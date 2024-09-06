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
    WEAPONS: "classicfantasycompendium.equipment-weapons",
    ARMOUR: "classicfantasycompendium.equipment-armour",
    ADVENTURING: "classicfantasycompendium.equipment-adventuring-gear",
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

  static WEAPONSMELEE = {
    spear: "2KT2MPd8XQvSqFzY",
    polearm: "6sigc3caYw0EAxov",
    silverdagger: "8XrJM94weLAggBMH",
    warhammer: "Dt9pHNnMccB5gf5t",
    mace: "RmgLtMKfD9gp2VuA",
    battleaxe: "TSefN1YwasWk3C33",
    lance: "W4Ew6Y8yWMhyMKcw",
    sword: "ao0TnCtDRc7j2cgH",
    club: "enUmfq78M7VYbjlI",
    handaxe: "gWoFtRBZVhD7Mn1u",
    staff: "jHp1OxCGmaX8L9Oq",
    shortsword: "qwvWgV1TXktyjo7Z",
    twohandedsword: "vqMuPOYGfK8q1MkH",
    dagger: "xbHwMIT3yltfNyDA",
  }

  static WEAPONSRANGED = {
    shortbow: "SrdLQTgrRnMEubDV",
    sling: "bEkUiPKsDHQ0QfTU",
    javelin: "eubog3nXYtIu9G4n",
    longbow: "exFR5KNnamClFlkH",
    crossbow: "tfXZNnu2Wur25hBs",
  }

  static ARMOUR = {
    leather: "b5tbL2UaqtpvdMAv",
    chainmail: "Fz8pG8FPvTadAlVG",
    platemail: "7iWthUf8FGPFykNc",
    shield: "IdYZfRwcaUq1roXV",
  }

  static ADVENTURINGGEAR = {
    holywater: "00gPVNNHm6YRbe9p",
    thieftools: "1pzSds6BeECQSPgx",
    rope: "6VLgwtvKStUa3xTS",
    mirror: "8ZID1ekfNgvZycrZ",
    crowbar: "97hXAAop9n3KxLu7",
    waterskin: "Ec5rHsIPLK7pp7ps",
    pole: "FKc2ct1YwxELjIdZ",
    wolfsbane: "IGQmvVB13WY5QKSY",
    stakes: "J8vZc8ykJIKXmOmp",
    rationsstandard: "KXtDnAkucUiVCnIX",
    backpack: "Kk7hsmmk6kxk7zhs",
    holysymbol: "QuF0bIGHIUtA1JyU",
    torch: "SRuHFBRrOcJjLoAt",
    garlic: "VnJzTjTBVeQz6x8o",
    tinderbox: "XcCELO7uam0CpZs7",
    grapplinghook: "XgH3FiR5Yet1Iusu",
    oilflask: "Y2Z3ua6rcgpZ2qxt",
    sacksmall: "ZIDDvsptjUwRN1mK",
    lantern: "cpUaTALrWcZS6o62",
    rationsiron: "pdz21inLwWv7wyl0",
    spikes: "r3kJCEcJOAH5pBnc",
    hammer: "rKfPjJswAflCyaU2",
    sacklarge: "tdyDafIe9T9lUcv3",
    wine: "ub6JspwjwLIEMd5g",
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
      availableWeaponsMelee: [
        Constants.WEAPONSMELEE.spear,
        Constants.WEAPONSMELEE.polearm,
        Constants.WEAPONSMELEE.silverdagger,
        Constants.WEAPONSMELEE.warhammer,
        Constants.WEAPONSMELEE.mace,
        Constants.WEAPONSMELEE.battleaxe,
        Constants.WEAPONSMELEE.lance,
        Constants.WEAPONSMELEE.sword,
        Constants.WEAPONSMELEE.club,
        Constants.WEAPONSMELEE.handaxe,
        Constants.WEAPONSMELEE.staff,
        Constants.WEAPONSMELEE.shortsword,
        Constants.WEAPONSMELEE.twohandedsword,
        Constants.WEAPONSMELEE.dagger,
      ],
      availableWeaponsRanged: [
        Constants.WEAPONSRANGED.shortbow,
        Constants.WEAPONSRANGED.sling,
        Constants.WEAPONSRANGED.javelin,
        Constants.WEAPONSRANGED.longbow,
        Constants.WEAPONSRANGED.crossbow,
      ],
      availableArmour: [
        Constants.ARMOUR.leather,
        Constants.ARMOUR.chainmail,
        Constants.ARMOUR.platemail,
      ],
      canUseShield: true,
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
      availableWeaponsMelee: [
        Constants.WEAPONSMELEE.spear,
        Constants.WEAPONSMELEE.polearm,
        Constants.WEAPONSMELEE.silverdagger,
        Constants.WEAPONSMELEE.warhammer,
        Constants.WEAPONSMELEE.mace,
        Constants.WEAPONSMELEE.battleaxe,
        Constants.WEAPONSMELEE.lance,
        Constants.WEAPONSMELEE.sword,
        Constants.WEAPONSMELEE.club,
        Constants.WEAPONSMELEE.handaxe,
        Constants.WEAPONSMELEE.staff,
        Constants.WEAPONSMELEE.shortsword,
        Constants.WEAPONSMELEE.twohandedsword,
        Constants.WEAPONSMELEE.dagger,
      ],
      availableWeaponsRanged: [
        Constants.WEAPONSRANGED.shortbow,
        Constants.WEAPONSRANGED.sling,
        Constants.WEAPONSRANGED.javelin,
        Constants.WEAPONSRANGED.longbow,
        Constants.WEAPONSRANGED.crossbow,
      ],
      availableArmour: [
        Constants.ARMOUR.leather,
      ],
      canUseShield: false,
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
      availableWeaponsMelee: [
        Constants.WEAPONSMELEE.dagger,
        Constants.WEAPONSMELEE.silverdagger,
        Constants.WEAPONSMELEE.staff
      ],
      availableArmour: [],
      availableWeaponsRanged: [],
      canUseShield: false,
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
      availableWeaponsMelee: [
        Constants.WEAPONSMELEE.polearm,
        Constants.WEAPONSMELEE.warhammer,
        Constants.WEAPONSMELEE.mace,
        Constants.WEAPONSMELEE.club,
        Constants.WEAPONSMELEE.staff,
      ],
      availableWeaponsRanged: [
        Constants.WEAPONSRANGED.sling,
      ],
      availableArmour: [
        Constants.ARMOUR.leather,
        Constants.ARMOUR.chainmail,
        Constants.ARMOUR.platemail,
      ],
      canUseShield: true,
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
