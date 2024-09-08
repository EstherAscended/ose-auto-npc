import { Constants, HelperMethods } from "./constants.mjs";
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
      closeOnSubmit: false,
      submitOnChange: true,
    };

    const mergedOptions = foundry.utils.mergeObject(defaults, overrides);
    return mergedOptions;
  }

  constructor(...args) {
    super(...args);
    this.classes = args[0];
  }

  async getData() {
    //This feels like a hacky way to handle reactivity for this form but other things I've tried haven't worked
    const selectedClass = this.form?.charClass?.value ? this.form?.charClass?.value : 'cleric'
    const charName = this.form?.charName?.value ? this.form?.charName?.value : 'NPC';
    const maxLevel = Constants.CHARCLASSES[selectedClass].maxLevel;
    let selectedLevel = this.form?.charLevel?.value ? this.form?.charLevel?.value : 1;

    if (selectedLevel > maxLevel) selectedLevel = maxLevel; 

    return {
        charClasses: this.classes,
        levelsAvailable: Array.from({ length: maxLevel }, (_, i) => i + 1),
        selectedClass,
        selectedLevel,
        charName,
    }
  }

  activateListeners(html) {
    super.activateListeners(html);

    Handlebars.registerHelper('eq', (a, b) => a == b)

    html.on(
      "click",
      "[data-action='save']",
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

    await this.close();
  }
}