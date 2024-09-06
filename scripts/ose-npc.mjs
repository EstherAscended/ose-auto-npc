import { HelperMethods } from "./constants.mjs";
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

  static async getGearAndClassAbilities(charClass) {
    let abilities = await OseNpc.getClassAbilities(charClass);
    let gear = await Gear.getGear(charClass);

    return abilities.concat(gear);
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
}
