const ds3Data = [
    {
        area: "Cemetery of Ash & Firelink Shrine",
        tasks: [
            { type: "checkpoint", description: "Arrive at Cemetery of Ash, light the bonfire.", checked: false },
            { type: "boss", description: "Defeat Iudex Gundyr. Pull the sword from his chest. Phase 2 is weak to fire.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/iudex_gundyr.jpg", checked: false },
            { type: "checkpoint", description: "Arrive at Firelink Shrine and light the bonfire. Plant the Coiled Sword.", checked: false },
            { type: "npc", description: "Speak to the Fire Keeper, Hawkwood the Deserter, and Blacksmith Andre.", checked: false },
            { type: "item", description: "Buy the Tower Key later to access the roof for an Estus Shard and the Covetous Silver Serpent Ring.", checked: false }
        ]
    },
    {
        area: "High Wall of Lothric",
        tasks: [
            { type: "checkpoint", description: "Light the High Wall of Lothric bonfire.", checked: false },
            { type: "npc", description: "Free Greirat of the Undead Settlement from his cell (requires Cell Key found below the second bonfire).", checked: false },
            { type: "npc", description: "Speak to Emma, High Priestess of Lothric Castle, to receive the Small Lothric Banner and the Way of Blue covenant item.", checked: false },
            { type: "boss", description: "Defeat Vordt of the Boreal Valley. Stick to his back and stomach. Weak to dark and lightning.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/vordt_of_the_boreal_valley.jpg", checked: false },
            { type: "action", description: "Use the banner at the edge of the cliff to be transported to the Undead Settlement.", checked: false }
        ]
    },
    {
        area: "Undead Settlement",
        tasks: [
            { type: "npc", description: "Recruit Yoel of Londor on the broken bridge. Accept his offer to 'draw out true strength' 5 times to start the Lord of Hollows ending quest. Do this BEFORE defeating Abyss Watchers.", checked: false },
            { type: "item", description: "Find Loretta's Bone hanging from a balcony. Give it to Greirat in Firelink.", checked: false },
            { type: "covenant", description: "Find the Warrior of Sunlight covenant item in the room with the Estus Soup.", checked: false },
            { type: "covenant", description: "Speak to Hodrick in the Pit of Hollows (accessed by getting in the cage on the non-hostile hollow's back) to join the Mound-Makers. Must be done before Curse-Rotted Greatwood.", checked: false },
            { type: "npc", description: "Speak to Cornyx of the Great Swamp in a cage at the top of the building with the pyromancers. He sells pyromancies.", checked: false },
            { type: "npc", description: "Speak to Siegward of Catarina on the elevator. Help him defeat the Fire Demon.", checked: false },
            { type: "npc", description: "Speak to Irina of Carim in her cell. Requires the Grave Key from the Shrine Handmaid (after giving her Mortician's Ashes). Do NOT buy dark miracles from her to keep her sane.", checked: false },
            { type: "boss", description: "Defeat the Curse-Rotted Greatwood. Attack the pustules on its body.", checked: false }
        ]
    },
    {
        area: "Road of Sacrifices",
        tasks: [
            { type: "npc", description: "Speak to Anri of Astora and Horace the Hushed at the Halfway Fortress bonfire. Receive the Blue Sentinels covenant from Horace.", checked: false },
            { type: "item", description: "Collect the Braille Divine Tome of Carim and give it to Irina.", checked: false },
            { type: "npc", description: "Find Orbeck of Vinheim in the ruins before the Crystal Sage. Requires 10 Intelligence to recruit. You must give him a scroll before defeating 4 bosses, or he leaves permanently.", checked: false },
            { type: "boss", description: "Defeat the Crystal Sage. The real sage uses purple magic; the clones use blue.", checked: false },
            { type: "covenant", description: "Join the Watchdogs of Farron by speaking to the Old Wolf of Farron up the ladder in the swamp.", checked: false }
        ]
    },
    {
        area: "Farron Keep",
        tasks: [
            { type: "action", description: "Extinguish the three flames in the swamp to open the large stone doors.", checked: false },
            { type: "item", description: "Find the Sage's Scroll and Golden Scroll in the swamp. Give them to Orbeck.", checked: false },
            { type: "npc", description: "If you drew out true strength 5 times, Yuria of Londor appears in Firelink. Ensure you follow her questline for the Usurpation of Fire ending.", checked: false },
            { type: "boss", description: "Defeat the Abyss Watchers, the first Lord of Cinder. Let them fight each other in phase 1.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/abyss_watchers.jpg", checked: false }
        ]
    },
    {
        area: "Cathedral of the Deep",
        tasks: [
            { type: "item", description: "Find the Paladin's Ashes and the Poisonbite Ring.", checked: false },
            { type: "npc", description: "Get tricked by Unbreakable Patches (disguised as Siegward). Find the real Siegward in the well outside the Cleansing Chapel and throw him his armor.", checked: false },
            { type: "covenant", description: "Join the Rosaria's Fingers covenant in the bedchamber. Warning: Offering a Pale Tongue fails Sirris's questline.", checked: false },
            { type: "boss", description: "Defeat the Deacons of the Deep. Attack the glowing red enemy. (Trophy: Lord of Cinder: Deacons of the Deep).", checked: false }
        ]
    },
    {
        area: "Catacombs of Carthus & Smouldering Lake",
        tasks: [
            { type: "npc", description: "Speak to Anri of Astora twice in the Catacombs. First time before the skeleton ball, second time near the wooden bridge.", checked: false },
            { type: "item", description: "Cut the wooden bridge to access Smouldering Lake.", checked: false },
            { type: "npc", description: "Find Horace in the Smouldering Lake cave. He is hollow; you must kill him so Anri is safe.", checked: false },
            { type: "boss", description: "Defeat High Lord Wolnir. Destroy his glowing bracelets.", checked: false },
            { type: "boss", description: "Defeat the Old Demon King in Smouldering Lake. Collect the Izalith Pyromancy Tome.", checked: false }
        ]
    },
    {
        area: "Irithyll of the Boreal Valley",
        tasks: [
            { type: "action", description: "Cross the barrier using the Small Doll dropped by the Deacons of the Deep.", checked: false },
            { type: "npc", description: "Help Sirris of the Sunless Realms defeat Creighton on the bridge (use her summon sign).", checked: false },
            { type: "npc", description: "Speak to Anri at the Church of Yorshka bonfire. Do NOT kill the pilgrim in the corner if you want the Usurpation of Fire ending.", checked: false },
            { type: "boss", description: "Defeat Pontiff Sulyvahn. Parry his opening leap attack. Summoning Anri/Gotthard makes phase 2 easier.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/pontiff_sulyvahn.jpg", checked: false }
        ]
    },
    {
        area: "Irithyll Dungeon & Profaned Capital",
        tasks: [
            { type: "npc", description: "Find Karla in Irithyll Dungeon. You need the Jailer's Key Ring from the Profaned Capital to free her. She accepts the dark tomes.", checked: false },
            { type: "npc", description: "Free Siegward from his cell using the Old Cell Key.", checked: false },
            { type: "item", description: "Perform the Path of the Dragon gesture (found after Oceiros) at the dragon statue in the dungeon to access Archdragon Peak.", checked: false },
            { type: "boss", description: "Defeat Yhorm the Giant. Use the Storm Ruler sword found at his throne. Siegward will join and help if his questline is complete.", checked: false }
        ]
    },
    {
        area: "Anor Londo",
        tasks: [
            { type: "npc", description: "Complete the 'marriage' ceremony with Anri in the Darkmoon Tomb (requires following Yuria's quest).", checked: false },
            { type: "item", description: "Find the Giant's Coal on the dead giant blacksmith.", checked: false },
            { type: "covenant", description: "Join the Blade of the Darkmoon by speaking to Company Captain Yorshka (requires Darkmoon Loyalty gesture from Sirris).", checked: false },
            { type: "boss", description: "Defeat Aldrich, Devourer of Gods. Watch out for his arrow rain in phase 2.", checked: false }
        ]
    },
    {
        area: "Lothric Castle & Consumed King's Garden",
        tasks: [
            { type: "boss", description: "Defeat the Dancer of the Boreal Valley (triggers automatically after defeating 3 Lords of Cinder, or by killing Emma).", checked: false },
            { type: "covenant", description: "Find the Sunlight Altar and offer Sunlight Medals for miracles.", checked: false },
            { type: "boss", description: "Defeat Dragonslayer Armour.", checked: false },
            { type: "boss", description: "Defeat Oceiros, the Consumed King in the Garden. Obtain the Path of the Dragon gesture.", checked: false }
        ]
    },
    {
        area: "Untended Graves (Optional/Secret)",
        tasks: [
            { type: "action", description: "Access the area by hitting the illusory wall behind the chest after Oceiros.", checked: false },
            { type: "boss", description: "Defeat Champion Gundyr. A much faster, more aggressive version of the tutorial boss. Good for parrying.", checked: false },
            { type: "item", description: "Collect the Eyes of a Fire Keeper from the dark Firelink Shrine. Give them to the Fire Keeper for the 'The End of Fire' ending.", checked: false }
        ]
    },
    {
        area: "Grand Archives",
        tasks: [
            { type: "item", description: "Collect Orbeck's Ashes if you bought all his spells. Give them to Yuria.", checked: false },
            { type: "item", description: "Find the Hunter's Ring and all the final spell scrolls/tomes.", checked: false },
            { type: "boss", description: "Defeat Lothric, Younger Prince and Lorian, Elder Prince.", checked: false }
        ]
    },
    {
        area: "Archdragon Peak (Secret Area)",
        tasks: [
            { type: "boss", description: "Defeat the Ancient Wyvern. Run through the level and perform a plunging attack on its head.", checked: false },
            { type: "item", description: "Collect the Dragon Chaser's Ashes.", checked: false },
            { type: "boss", description: "Defeat the Nameless King. Widely considered the hardest boss in the base game. Phase 1 target the dragon's head. Phase 2 dodge his delayed lightning strikes.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/nameless_king.jpg", checked: false }
        ]
    },
    {
        area: "DLC: Ashes of Ariandel",
        tasks: [
            { type: "action", description: "Speak to Slave Knight Gael at the Cleansing Chapel to enter the Painted World of Ariandel.", checked: false },
            { type: "boss", description: "Defeat the Champion's Gravetender & Gravetender Greatwolf.", checked: false },
            { type: "boss", description: "Defeat Sister Friede. This is a 3-phase endurance fight. Summon Gael for phase 2 and 3.", checked: false },
            { type: "item", description: "Collect all spells, weapons, and rings required for 100% completion.", checked: false }
        ]
    },
    {
        area: "DLC: The Ringed City",
        tasks: [
            { type: "action", description: "Travel to The Dreg Heap from the Kiln of the First Flame or Sister Friede's bonfire.", checked: false },
            { type: "boss", description: "Defeat the Demon in Pain & Demon From Below / Demon Prince.", checked: false },
            { type: "npc", description: "Complete Lapp's questline to get his armor.", checked: false },
            { type: "boss", description: "Defeat Halflight, Spear of the Church.", checked: false },
            { type: "boss", description: "Defeat Darkeater Midir. An incredibly tanky dragon; aim only for his head.", checked: false },
            { type: "boss", description: "Defeat Slave Knight Gael at the end of the world.", checked: false },
            { type: "item", description: "Collect all +3 Rings and spells for Platinum completion.", checked: false }
        ]
    },
    {
        area: "Endgame, Farm, & NG+ / NG++",
        tasks: [
            { type: "action", description: "Covenant Farming: Farm Proof of a Concord Kept (Silver Knights), Vertebra Shackles (Carthus Skeletons), Wolf's Blood Swordgrass (Ghrus), and Pale Tongues (Darkwraiths) for the spell and ring trophies.", checked: false },
            { type: "boss", description: "Defeat the Soul of Cinder at the Kiln of the First Flame.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/soul_of_cinder.jpg", checked: false },
            { type: "checkpoint", description: "Trigger the Ending. (Requires 3 playthroughs for the 3 endings: To Link the First Flame, The End of Fire, and The Usurpation of Fire).", checked: false },
            { type: "action", description: "In NG+ and NG++, collect all the +1 and +2 Rings necessary for the Master of Rings trophy (found in static locations across the world).", checked: false }
        ]
    }
];
