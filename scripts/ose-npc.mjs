import { HelperMethods } from "./constants.mjs";

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

  static getHpInfo(charClassHd, level, con) {
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
      hp += HelperMethods.diceRoll(charClassHd) + conMod;
      if (hp < 1) hp = 1;
    }

    return {
      hd: `${level}d${charClassHd}`,
      max: hp,
      value: hp,
    };
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

  static getSaves(charClass, level) {
    return charClass.saves.tier1;
  }

  static getAlignment(charClass) {
    return game.i18n.localize("OSEAUTONPC.lawful");
  }
}
