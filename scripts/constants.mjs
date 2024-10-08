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
    ELF: "classicfantasycompendium.abilities-elf",
    DWARF: "classicfantasycompendium.abilities-dwarf",
    HALFLING: "classicfantasycompendium.abilities-halfling",
    WEAPONS: "classicfantasycompendium.equipment-weapons",
    ARMOUR: "classicfantasycompendium.equipment-armour",
    ADVENTURING: "classicfantasycompendium.equipment-adventuring-gear",
    SPELLS: "classicfantasycompendium.spells",
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

  static CASTINGTYPE = {
    none: "none",
    arcane: "arcane",
    divine: "divine",
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
      maxLevel: 14,
      thac0ImproveInterval: 3,
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
      hdCutoffIncrement: 2,
      primeReqList: [
        {
          name: "str",
          index: 0,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.none,
        spellsKnown: null,
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 12 },
            wand: { value: 13 },
            paralysis: { value: 14 },
            breath: { value: 15 },
            spell: { value: 16 },
          }
        },
        {
          cutoff: 4,
          value: {
            death: { value: 10 },
            wand: { value: 11 },
            paralysis: { value: 12 },
            breath: { value: 13 },
            spell: { value: 14 },
          }
        },
        {
          cutoff: 7,
          value: {
            death: { value: 8 },
            wand: { value: 9 },
            paralysis: { value: 10 },
            breath: { value: 10 },
            spell: { value: 12 },
          }
        },
        {
          cutoff: 10,
          value: {
            death: { value: 6 },
            wand: { value: 7 },
            paralysis: { value: 8 },
            breath: { value: 8 },
            spell: { value: 10 },
          }
        },
        {
          cutoff: 13,
          value: {
            death: { value: 4 },
            wand: { value: 5 },
            paralysis: { value: 6 },
            breath: { value: 5 },
            spell: { value: 8 },
          }
        },
      ],
    },
    thief: {
      compendium: Constants.COMPENDIUMPACKS.THIEF,
      name: "thief",
      maxLevel: 14,
      thac0ImproveInterval: 4,
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
      hdCutoffIncrement: 2,
      primeReqList: [
        {
          name: "dex",
          index: 3,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.none,
        spellsKnown: null,
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 13 },
            wand: { value: 14 },
            paralysis: { value: 13 },
            breath: { value: 16 },
            spell: { value: 15 },
          }
        },
        {
          cutoff: 5,
          value: {
            death: { value: 12 },
            wand: { value: 13 },
            paralysis: { value: 11 },
            breath: { value: 14 },
            spell: { value: 13 },
          }
        },
        {
          cutoff: 9,
          value: {
            death: { value: 10 },
            wand: { value: 11 },
            paralysis: { value: 9 },
            breath: { value: 12 },
            spell: { value: 10 },
          }
        },
        {
          cutoff: 13,
          value: {
            death: { value: 8 },
            wand: { value: 9 },
            paralysis: { value: 7 },
            breath: { value: 10 },
            spell: { value: 8 },
          }
        },
      ],
    },
    magicuser: {
      compendium: Constants.COMPENDIUMPACKS.MAGICUSER,
      name: "magicuser",
      thac0ImproveInterval: 5,
      maxLevel: 14,
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
      hdCutoffIncrement: 1,
      primeReqList: [
        {
          name: "int",
          index: 1,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.arcane,
        spellsKnown: [
          [1,0,0,0,0,0],
          [2,0,0,0,0,0],
          [2,1,0,0,0,0],
          [2,2,0,0,0,0],
          [2,2,1,0,0,0],
          [2,2,2,0,0,0],
          [3,2,2,1,0,0],
          [3,3,2,2,0,0],
          [3,3,3,2,1,0],
          [3,3,3,3,2,0],
          [4,3,3,3,2,1],
          [4,4,3,3,3,2],
          [4,4,4,3,3,3],
          [4,4,4,4,3,3],
        ],
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 13 },
            wand: { value: 14 },
            paralysis: { value: 13 },
            breath: { value: 16 },
            spell: { value: 15 },
          }
        },
        {
          cutoff: 6,
          value: {
            death: { value: 11 },
            wand: { value: 12 },
            paralysis: { value: 11 },
            breath: { value: 13 },
            spell: { value: 12 },
          }
        },
        {
          cutoff: 11,
          value: {
            death: { value: 8 },
            wand: { value: 9 },
            paralysis: { value: 8 },
            breath: { value: 11 },
            spell: { value: 8 },
          }
        },
      ],
    },
    cleric: {
      compendium: Constants.COMPENDIUMPACKS.CLERIC,
      name: "cleric",
      maxLevel: 14,
      thac0ImproveInterval: 4,
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
      hdCutoffIncrement: 1,
      primeReqList: [
        {
          name: "wis",
          index: 2,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.divine,
        spellsKnown: [
          [0,0,0,0,0,0],
          [1,0,0,0,0,0],
          [2,0,0,0,0,0],
          [2,1,0,0,0,0],
          [2,2,0,0,0,0],
          [2,2,1,1,0,0],
          [2,2,2,1,1,0],
          [3,3,2,2,1,0],
          [3,3,3,2,2,0],
          [4,4,3,3,2,0],
          [4,4,4,3,3,0],
          [5,5,4,4,3,0],
          [5,5,5,4,4,0],
          [6,5,5,5,4,0],
        ],
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 11 },
            wand: { value: 12 },
            paralysis: { value: 14 },
            breath: { value: 16 },
            spell: { value: 15 },
          }
        },
        {
          cutoff: 5,
          value: {
            death: { value: 9 },
            wand: { value: 10 },
            paralysis: { value: 12 },
            breath: { value: 14 },
            spell: { value: 12 },
          }
        },
        {
          cutoff: 9,
          value: {
            death: { value: 6 },
            wand: { value: 7 },
            paralysis: { value: 9 },
            breath: { value: 11 },
            spell: { value: 9 },
          }
        },
        {
          cutoff: 13,
          value: {
            death: { value: 3 },
            wand: { value: 5 },
            paralysis: { value: 4 },
            breath: { value: 5 },
            spell: { value: 5 },
          }
        },
      ],
    },
    elf: {
      compendium: Constants.COMPENDIUMPACKS.ELF,
      name: "elf",
      maxLevel: 10,
      thac0ImproveInterval: 3,
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
      hd: 6,
      hdCutoffIncrement: 2,
      primeReqList: [
        {
          name: "str",
          index: 0,
        },
        {
          name: "int",
          index: 1,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.arcane,
        spellsKnown: [
          [1,0,0,0,0,0],
          [2,0,0,0,0,0],
          [2,1,0,0,0,0],
          [2,2,0,0,0,0],
          [2,2,1,0,0,0],
          [2,2,2,0,0,0],
          [3,2,2,1,0,0],
          [3,3,2,2,0,0],
          [3,3,3,2,1,0],
          [3,3,3,3,2,0],
        ],
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 12 },
            wand: { value: 13 },
            paralysis: { value: 13 },
            breath: { value: 15 },
            spell: { value: 15 },
          }
        },
        {
          cutoff: 4,
          value: {
            death: { value: 10 },
            wand: { value: 11 },
            paralysis: { value: 11 },
            breath: { value: 13 },
            spell: { value: 12 },
          }
        },
        {
          cutoff: 7,
          value: {
            death: { value: 8 },
            wand: { value: 9 },
            paralysis: { value: 9 },
            breath: { value: 10 },
            spell: { value: 10 },
          }
        },
        {
          cutoff: 10,
          value: {
            death: { value: 6 },
            wand: { value: 7 },
            paralysis: { value: 8 },
            breath: { value: 8 },
            spell: { value: 8 },
          }
        },
      ],
    },
    dwarf: {
      compendium: Constants.COMPENDIUMPACKS.DWARF,
      name: "dwarf",
      maxLevel: 12,
      thac0ImproveInterval: 3,
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
        Constants.WEAPONSMELEE.dagger,
      ],
      availableWeaponsRanged: [
        Constants.WEAPONSRANGED.shortbow,
        Constants.WEAPONSRANGED.sling,
        Constants.WEAPONSRANGED.javelin,
        Constants.WEAPONSRANGED.crossbow,
      ],
      availableArmour: [
        Constants.ARMOUR.leather,
        Constants.ARMOUR.chainmail,
        Constants.ARMOUR.platemail,
      ],
      canUseShield: true,
      hd: 8,
      hdCutoffIncrement: 3,
      primeReqList: [
        {
          name: "str",
          index: 0,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.none,
        spellsKnown: null,
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 8 },
            wand: { value: 9 },
            paralysis: { value: 10 },
            breath: { value: 13 },
            spell: { value: 12 },
          }
        },
        {
          cutoff: 4,
          value: {
            death: { value: 6 },
            wand: { value: 7 },
            paralysis: { value: 8 },
            breath: { value: 10 },
            spell: { value: 10 },
          }
        },
        {
          cutoff: 7,
          value: {
            death: { value: 4 },
            wand: { value: 5 },
            paralysis: { value: 6 },
            breath: { value: 7 },
            spell: { value: 8 },
          }
        },
        {
          cutoff: 10,
          value: {
            death: { value: 2 },
            wand: { value: 3 },
            paralysis: { value: 4 },
            breath: { value: 4 },
            spell: { value: 6 },
          }
        },
      ],
    },
    halfling: {
      compendium: Constants.COMPENDIUMPACKS.HALFLING,
      name: "halfling",
      maxLevel: 8,
      thac0ImproveInterval: 3,
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
        Constants.WEAPONSMELEE.dagger,
      ],
      availableWeaponsRanged: [
        Constants.WEAPONSRANGED.shortbow,
        Constants.WEAPONSRANGED.sling,
        Constants.WEAPONSRANGED.javelin,
        Constants.WEAPONSRANGED.crossbow,
      ],
      availableArmour: [
        Constants.ARMOUR.leather,
        Constants.ARMOUR.chainmail,
        Constants.ARMOUR.platemail,
      ],
      canUseShield: true,
      hd: 6,
      hdCutoffIncrement: 0,
      primeReqList: [
        {
          name: "dex",
          index: 3,
        },
        {
          name: "str",
          index: 0,
        },
      ],
      spells: {
        castingType: Constants.CASTINGTYPE.none,
        spellsKnown: null,
      },
      saves: [
        {
          cutoff: 1,
          value: {
            death: { value: 8 },
            wand: { value: 9 },
            paralysis: { value: 10 },
            breath: { value: 13 },
            spell: { value: 12 },
          }
        },
        {
          cutoff: 4,
          value: {
            death: { value: 6 },
            wand: { value: 7 },
            paralysis: { value: 8 },
            breath: { value: 10 },
            spell: { value: 10 },
          }
        },
        {
          cutoff: 7,
          value: {
            death: { value: 4 },
            wand: { value: 5 },
            paralysis: { value: 6 },
            breath: { value: 7 },
            spell: { value: 8 },
          }
        },
      ],
    },
  };

  static initialize() {
    this.classes = [];

    for (const charClass in Constants.CHARCLASSES) {
        this.classes.push(
            {
                name: Constants.CHARCLASSES[charClass].name,
                localize: `OSEAUTONPC.${Constants.CHARCLASSES[charClass].name}`,
            }
        );
    }
    this.classes.sort((a,b) => a.name.localeCompare(b.name));

    this.mainInput = new OseAutoNpcInput(this.classes);
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
