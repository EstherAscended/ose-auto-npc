# OSE Auto NPC

## Description

OSE Auto NPC adds a new button in the Actor tab for quickly generating NPCs. This aids GMs to populate wandering adventurer parties or retainers in towns.

NPCs are generated with a random selection of class appropriate gear/spells.

NPC stats favour their prime requisites but are otherwise assigned randomly using 3d6.

## Dependencies

OSE Auto NPC requires both the OSE system and Classic Fantasy Compendium module in order to work. Currently it does not work with the Advanced Fantasy Compendium.

## How to Use

Click the new 'Auto NPC' button on the Actor tab. A box will pop up allowing you to enter the name, class and level of your desired NPC. 

Clicking 'Create' will generate the NPC and add them to your actors list.

## Limitations

- Armour and weapons are currently unequipped on the NPCs on creation. I tried playing around with the 'equipped' flag but it didn't seem to work as expected.
- Shields may sometimes generate on NPCs carrying two-handed weapons.
- NPCs may generate with a second backpack or set of thief's tools/holy symbol. For the moment I kind of like this as a feature but may change it.
- NPCs generate with the default 'mystery man' image. I may put together a stock collection of character images in the future.
- There is nothing currently stopping a class with stat requirements from generating with requirements below that minimum. 