import { OseAutoNpcInput } from "./ose-auto-npc-input.mjs";

export class Constants {
  static TEMPLATES = {
    CREATE: "modules/ose-auto-npc/templates/ose-auto-npc.hbs",
  };

  static COMPENDIUMPACKS = {
    THIEF: "classicfantasycompendium.abilities-thief",
    MAGICUSER: "classicfantasycompendium.abilities-magic-user",
    CLERIC: "classicfantasycompendium.abilities-cleric",
    FIGHTER: "classicfantasycompendium.abilities-fighter",
  };

  static ALIGNMENTS = {
    lawful: {
        name: "lawful"
    },
    neutral: {
        name: "neutral"
    },
    chaotic: {
        name: "chaotic"
    }
  }

  static CHARCLASSES = {
    fighter: {
      compendium: Constants.COMPENDIUMPACKS.FIGHTER,
      name: "fighter",
      availableAlignments: [
        Constants.ALIGNMENTS.lawful,
        Constants.ALIGNMENTS.neutral,
        Constants.ALIGNMENTS.chaotic
      ],
      hd: 8,
      primeReqList: [
        {
          name: "str",
          index: 0,
        },
      ],
      saves: {
        tier1: {
          death: { value: 12 },
          wand: { value: 13 },
          paralysis: { value: 14 },
          breath: { value: 15 },
          spell: { value: 16 },
        },
      },
    },
    thief: {
      compendium: Constants.COMPENDIUMPACKS.THIEF,
      name: "thief",
      availableAlignments: [
        Constants.ALIGNMENTS.lawful,
        Constants.ALIGNMENTS.neutral,
        Constants.ALIGNMENTS.chaotic
      ],
      hd: 4,
      primeReqList: [
        {
          name: "dex",
          index: 3,
        },
      ],
      saves: {
        tier1: {
          death: { value: 13 },
          wand: { value: 14 },
          paralysis: { value: 13 },
          breath: { value: 16 },
          spell: { value: 15 },
        },
      },
    },
    magicuser: {
      compendium: Constants.COMPENDIUMPACKS.MAGICUSER,
      name: "magicuser",
      availableAlignments: [
        Constants.ALIGNMENTS.lawful,
        Constants.ALIGNMENTS.neutral,
        Constants.ALIGNMENTS.chaotic
      ],
      hd: 4,
      primeReqList: [
        {
          name: "int",
          index: 1,
        },
      ],
      saves: {
        tier1: {
          death: { value: 13 },
          wand: { value: 14 },
          paralysis: { value: 13 },
          breath: { value: 16 },
          spell: { value: 15 },
        },
      },
    },
    cleric: {
      compendium: Constants.COMPENDIUMPACKS.CLERIC,
      name: "cleric",
      availableAlignments: [
        Constants.ALIGNMENTS.lawful,
        Constants.ALIGNMENTS.neutral,
        Constants.ALIGNMENTS.chaotic
      ],
      hd: 6,
      primeReqList: [
        {
          name: "wis",
          index: 2,
        },
      ],
      saves: {
        tier1: {
          death: { value: 11 },
          wand: { value: 12 },
          paralysis: { value: 14 },
          breath: { value: 16 },
          spell: { value: 15 },
        },
      },
    },
  };

  static initialize() {
    this.mainInput = new OseAutoNpcInput();
  }
}

export class HelperMethods {
  static diceRoll(max) {
    return Math.floor(Math.random() * max + 1);
  }

  static shuffleArray(array) {
    for (var i = array.length - 1; i >= 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}
