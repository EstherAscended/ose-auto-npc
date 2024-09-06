import { Constants } from "./constants.mjs";
import { OseNpc } from "./ose-npc.mjs";

export class OseAutoNpc {
  static async generateNPC(charClass, name, level) {
    let stats = OseNpc.getStats(charClass.primeReqList);

    let actor = await Actor.create({
      name: name,
      type: "character",
      img: "icons/svg/mystery-man.svg",
      items: await OseNpc.getGearAndClassAbilities(charClass),
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
        saves: OseNpc.getSaves(charClass.saves, level),
        hp: OseNpc.getHpInfo(charClass.hd, level, stats["con"]),
        scores: stats,
      },
    });
  }
}

Hooks.once("init", () => {
  Constants.initialize();
});

Hooks.on("getActorDirectoryEntryContext", (app, entryOptions) => {
  const buttons = app.element[0].children[0].children[0];
  var button = document.createElement("button");
  button.classList = ["ose-auto-npc-button"];
  button.innerHTML = game.i18n.localize("OSEAUTONPC.npc-button");

  button.addEventListener("click", function () {
    Constants.mainInput.render(true, { userId: game.userId });
  });

  buttons.append(button);
});
