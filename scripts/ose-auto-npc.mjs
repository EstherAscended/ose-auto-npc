import { Constants } from "./constants.mjs";
import { OseNpc } from "./ose-npc.mjs";

export class OseAutoNpc {
  static async generateNPC(charClass, name, level) {
    let stats = OseNpc.getStats(charClass.primeReqList);

    //We need to add the spells to items so they show on the sheet
    const spellDetails = await OseNpc.getSpells(charClass.spells, level);

    let actor = await Actor.create({
      name: name,
      type: "character",
      img: "icons/svg/mystery-man.svg",
      items: (await OseNpc.getGearAndClassAbilities(charClass, spellDetails)),
      system: {
        details: {
          class: game.i18n.localize(`OSEAUTONPC.${charClass.name}`),
          alignment: game.i18n.localize(`OSEAUTONPC.${OseNpc.getAlignment(charClass.availableAlignments).name}`),
          level: level > charClass.maxLevel ? charClass.maxLevel : level,
        },
        retainer: {
          enabled: true,
          loyalty: 7,
        },
        spells: spellDetails,
        saves: OseNpc.getSaves(charClass.saves, level),
        hp: OseNpc.getHpInfo(charClass.hd, charClass.hdCutoffIncrement, level, stats["con"]),
        scores: stats,
        thac0: {
          value: OseNpc.getThac0Info(charClass.thac0ImproveInterval, level),
        }
      },
    });
  }
}

Hooks.once("init", () => {
  Constants.initialize();
});

Hooks.on("getActorDirectoryEntryContext", (app, entryOptions) => {
  let buttons = null;
  try {
    buttons = app.element.find(`[class="header-actions action-buttons flexrow"]`);
  } catch {
    buttons = app.find(`[class="header-actions action-buttons flexrow"]`);
  }

  if(game.user.isGM) {

    let button = document.createElement("button");
    button.classList = ["ose-auto-npc-button"];
    button.innerHTML = "<i class='fas fa-dice'></i>" + game.i18n.localize("OSEAUTONPC.npc-button");

    button.addEventListener("click", function () {
      Constants.mainInput.render(true, { userId: game.userId });
    });

    buttons.append(button);
  }
});
