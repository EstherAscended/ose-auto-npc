import { Constants } from "./constants.mjs";
import { OseAutoNpc } from "./ose-auto-npc.mjs";

export class OseAutoNpcInput extends FormApplication {
  static get defaultOptions() {
    const defaults = super.defaultOptions;
    const title = game.i18n.localize('OSEAUTONPC.form-title');

    const overrides = {
      width: "300",
      height: "200",
      template: Constants.TEMPLATES.CREATE,
      title: title,
      userId: game.userId,
      resizable: false,
      class: defaults.classes.concat(["ose-auto-npc"]),
      closeOnSubmit: true,
    };

    const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
    return mergedOptions;
  }

  constructor(...args) {
    super(...args);
  }

  async getData() {
    let classes = [];
    for (const charClass in Constants.CHARCLASSES) {
        classes.push(
            {
                name: Constants.CHARCLASSES[charClass].name,
                localize: `OSEAUTONPC.${Constants.CHARCLASSES[charClass].name}`,
            }
        );
    }

    classes.sort((a,b) => a.name.localeCompare(b.name));
    return {
        charClasses: classes,
        levelsAvailable: Array.from({ length: 14 }, (_, i) => i + 1)
    }
  }

  activateListeners(html) {
    super.activateListeners(html);
    html.on(
      "click",
      "[data-action='submit']",
      this._handleSendClick.bind(this)
    );
  }

  async _updateObject(event, formData) {
    this.render();
  }

  async _handleSendClick(event) {
    OseAutoNpc.generateNPC(
      Constants.CHARCLASSES[this.form.charClass.value],
      this.form.charName.value,
      this.form.charLevel.value
    );
  }
}