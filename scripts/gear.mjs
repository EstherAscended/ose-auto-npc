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

        //You can get some weirdness with having two handed weapons and shield.
        //I might fix that later.
        if (charClass.canUseShield) {
            const dieRoll = HelperMethods.diceRoll(100);
            if (dieRoll <= 33) {
                const shield = await Gear.getShield();
                gear.push(shield);
            }
        }

        const adventuringGear = await Gear.getAdventuringGear(charClass.name);
        return gear.concat(adventuringGear);
    }

    static async getWeapon(weapons) {
        const weaponKey = weapons[HelperMethods.diceRoll(weapons.length) - 1];

        const weapon = await game.packs.get(Constants.COMPENDIUMPACKS.WEAPONS).getDocument(weaponKey);
        const mappedWeapon = {
            name: weapon.name,
            type: weapon.type,
            img: weapon.img,
            system: weapon.system
        }
        return mappedWeapon;
    }

    static async getShield() {
        const shieldKey = Constants.ARMOUR.shield;

        const shield = await game.packs.get(Constants.COMPENDIUMPACKS.ARMOUR).getDocument(shieldKey);
        const mappedShield = {
            name: shield.name,
            type: shield.type,
            img: shield.img,
            system: shield.system
        }
        return mappedShield;
    }

    static async getArmour(armours) {
        const armourKey = armours[HelperMethods.diceRoll(armours.length) - 1];

        const armour = await game.packs.get(Constants.COMPENDIUMPACKS.ARMOUR).getDocument(armourKey);
        const mappedArmour = {
            name: armour.name,
            type: armour.type,
            img: armour.img,
            system: armour.system
        }
        return mappedArmour;
    }

    static async getAdventuringGear(className) {
        let gearKeys = [];

        gearKeys.push(Constants.ADVENTURINGGEAR.backpack);

        switch(className) {
            case Constants.CHARCLASSES.cleric.name:
                gearKeys.push(Constants.ADVENTURINGGEAR.holysymbol);
                break;
            case Constants.CHARCLASSES.thief.name:
                gearKeys.push(Constants.ADVENTURINGGEAR.thieftools);
                break;
        }

        //This means characters might end up with multiple backpacks or other default items. I kind of like that.
        Object.keys(Constants.ADVENTURINGGEAR).forEach(key => {
            const diceRoll = HelperMethods.diceRoll(10);
            if (diceRoll === 10) gearKeys.push(Constants.ADVENTURINGGEAR[key]);
        });

        const gearPack = game.packs.get(Constants.COMPENDIUMPACKS.ADVENTURING);
        let gear = [];

        for (let i = 0; i < gearKeys.length; i++) {
            const gearItem = await gearPack.getDocument(gearKeys[i]);

            const mappedItem = {
                name: gearItem.name,
                type: gearItem.type,
                img: gearItem.img,
                system: gearItem.system
            }

            gear.push(mappedItem);
        }

        return gear;
    }
}
