import { Constants, HelperMethods } from "./constants.mjs";

export class Gear {
    static async getGear(charClass) {
        let gear = [];

        if (charClass.availableWeaponsMelee.length > 0) {
            const meleeWeapon = await Gear.getWeapon(charClass.availableWeaponsMelee);
            gear.push(meleeWeapon);
        }

        if (charClass.availableWeaponsRanged.length > 0) {
            const rangedWeapon = await Gear.getWeapon(charClass.availableWeaponsRanged);
            gear.push(rangedWeapon);
        }

        if (charClass.availableArmour.length > 0) {
            const armour = await Gear.getArmour(charClass.availableArmour);
            gear.push(armour);
        }
        return gear;
    }

    static async getWeapon(weapons) {
        let weaponKey = weapons[HelperMethods.diceRoll(weapons.length) - 1];

        let weapon = await game.packs.get(Constants.COMPENDIUMPACKS.WEAPONS).getDocument(weaponKey);
        let mappedWeapon = {
            name: weapon.name,
            type: weapon.type,
            img: weapon.img,
            system: weapon.system
        }
        return mappedWeapon;
    }

    static async getArmour(armours) {
        let armourKey = armours[HelperMethods.diceRoll(armours.length) - 1];

        let armour = await game.packs.get(Constants.COMPENDIUMPACKS.ARMOUR).getDocument(armourKey);
        let mappedArmour = {
            name: armour.name,
            type: armour.type,
            img: armour.img,
            system: armour.system
        }
        return mappedArmour;
    }
}
