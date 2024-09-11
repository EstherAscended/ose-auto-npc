import { Constants, HelperMethods } from "./constants.mjs";
import { Gear } from "./gear.mjs";

export class OseNpc {
  static getStats(primeReqList) {
    let statCollection = OseNpc.generateStatCollection();
    let statsSorted = [...statCollection].sort((a, b) => b - a);
    let indexSeen = {
      0: false,
      1: false,
      2: false,
      3: false,
      4: false,
      5: false,
    };

    primeReqList.forEach((req) => {
      statCollection[req.index] = statsSorted[0];
      indexSeen[req.index] = true;
      statsSorted.shift();
    });

    HelperMethods.shuffleArray(statsSorted);

    for (let i = 0; i < statCollection.length; i++) {
      if (indexSeen[i]) continue;
      statCollection[i] = statsSorted[0];
      indexSeen[i] = true;
      statsSorted.shift();
    }

    return {
      str: {
        value: statCollection[0],
      },
      int: {
        value: statCollection[1],
      },
      wis: {
        value: statCollection[2],
      },
      dex: {
        value: statCollection[3],
      },
      con: {
        value: statCollection[4],
      },
      cha: {
        value: statCollection[5],
      },
    };
  }

  static generateStatCollection() {
    let stats = [];
    let d = 6;

    for (let i = 0; i < 6; i++) {
      stats.push(
        HelperMethods.diceRoll(d) +
          HelperMethods.diceRoll(d) +
          HelperMethods.diceRoll(d)
      );
    }
    return stats;
  }

  static getThac0Info(interval, level) {
    const intervalsHit = Math.floor(level / interval);
    let totalReduction = 2 * intervalsHit;
    if (intervalsHit > 1) totalReduction++;
    return 19 - totalReduction;
  }

  static getHpInfo(charClassHd, hdCutoffIncrement, level, con) {
    let hp = 0;
    let conMod = 0;

    switch (con) {
      case con < 4:
        conMod = -3;
        break;
      case con < 6:
        conMod = -2;
        break;
      case con < 9:
        conMod = -1;
        break;
      case con < 13:
        conMod = 0;
        break;
      case con < 16:
        conMod = 1;
        break;
      case con < 18:
        conMod = 2;
        break;
      case con >= 18:
        conMod = 3;
        break;
    }

    for (let i = 0; i < level; i++) {
        if (i < 9) {
            let rolledHp = HelperMethods.diceRoll(charClassHd) + conMod;
            if (rolledHp < 1) rolledHp = 1;
            hp += rolledHp;
        } else {
            hp += hdCutoffIncrement;
        }
    }

    const hdString = level <= 9 ? `${level}d${charClassHd}` : `9d${charClassHd}+${hdCutoffIncrement * (level - 9)}`

    return {
      hd: hdString,
      max: hp,
      value: hp,
    };
  }

  static getAlignment(availableAlignments) {
    return availableAlignments[HelperMethods.diceRoll(availableAlignments.length) - 1];
  }

  static async getGearAndClassAbilities(charClass, spellDetails) {
    const abilities = await OseNpc.getClassAbilities(charClass);
    const gear = await Gear.getGear(charClass);

    let spells = [];
    if (charClass.spells.castingType !== Constants.CASTINGTYPE.none) {
        for (let i = 0; i < 6; i++) {
            if (spellDetails.spellList[i]) spells = spells.concat(spellDetails.spellList[i]);
        }
    }

    const fullList = abilities.concat(gear).concat(spells);
    return fullList;
  }

  static async getClassAbilities(charClass) {
    const abilities = game.packs.get(charClass.compendium);
    const documents = await abilities.getDocuments();
    let mappedDocuments = [];
    documents.forEach((e) => {
      mappedDocuments.push({
        name: e.name,
        img: e.img,
        type: e.type,
        system: e.system,
      });
    });
    return mappedDocuments;
  }

  static getSaves(saves, level) {
    let returnedSaves = null;

    for (const saveObject of saves) {
        if (level >= saveObject.cutoff) {
            returnedSaves = saveObject.value;
            continue;
        } else {
            break;
        }
    }

    return returnedSaves;
  }

  static async getSpells(spellDetails, level) {
    let spells = {
        enabled: false,
    }

    if (spellDetails.castingType !== Constants.CASTINGTYPE.none) {
        const spellPack = game.packs.get(Constants.COMPENDIUMPACKS.SPELLS);
        const spellTypeFilter = spellDetails.castingType === Constants.CASTINGTYPE.arcane ? "MU" : "C";
        const spellListFullIndex = spellPack.index.filter(e => e.name.startsWith(spellTypeFilter));
        spells.enabled = true;
        spells.slots = {
            1: {used: 0, max: spellDetails.spellsKnown[level - 1][0]},
            2: {used: 0, max: spellDetails.spellsKnown[level - 1][1]},
            3: {used: 0, max: spellDetails.spellsKnown[level - 1][2]},
            4: {used: 0, max: spellDetails.spellsKnown[level - 1][3]},
            5: {used: 0, max: spellDetails.spellsKnown[level - 1][4]},
            6: {used: 0, max: spellDetails.spellsKnown[level - 1][5]},
        }

        let spellList = [[],[],[],[],[],[]];

        for (let i = 0; i < spellList.length; i++) {
            if (spellDetails.spellsKnown[level - 1][i] > 0) {
                const levelSpellListIndex = spellListFullIndex.filter(spell => {
                    return spell.name.startsWith(`${spellTypeFilter}${i+1}`);
                })

                let pickedSpellsIndex = [];

                for (let j = 0; j < spellDetails.spellsKnown[level - 1][i]; j++) {
                    const spellIndex = HelperMethods.diceRoll(levelSpellListIndex.length) - 1;
                    pickedSpellsIndex.push(levelSpellListIndex[spellIndex]);
                }

                for (let n = 0; n < pickedSpellsIndex.length; n++) {
                    const spellToAdd = await spellPack.getDocument(pickedSpellsIndex[n]._id);
                    spellList[i].push(
                        {
                            name: spellToAdd.name,
                            type: spellToAdd.type,
                            system: spellToAdd.system,
                            img: spellToAdd.img,
                        }
                    );
                }
            }
        }
        spells.spellList = {
            1: spellList[0],
            2: spellList[1],
            3: spellList[2],
            4: spellList[3],
            5: spellList[4],
            6: spellList[5],
        }
    }
    return spells;
  }

}
