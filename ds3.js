const ds3Data = [
    {
        area: "Cemetery of Ash & Firelink Shrine",
        tasks: [
            { type: "checkpoint", description: "Arrive at Cemetery of Ash, light the bonfire.", checked: false },
            { type: "boss", description: "Defeat Iudex Gundyr. Pull the sword from his chest. Phase 2 is weak to fire.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/iudex_gundyr.jpg", checked: false },
            { type: "checkpoint", description: "Arrive at Firelink Shrine and light the bonfire. Plant the Coiled Sword.", checked: false },
            { type: "npc", description: "Speak to the Fire Keeper, Hawkwood the Deserter, and Blacksmith Andre.", checked: false },
            { type: "item", description: "Buy the Tower Key from the Shrine Handmaid later (20k souls) to access the roof for an Estus Shard and the Covetous Silver Serpent Ring.", checked: false }
        ]
    },
    {
        area: "High Wall of Lothric",
        tasks: [
            // ── Core Progression ─────────────────────────────────────────────────
            { type: "checkpoint", description: "Light the High Wall of Lothric bonfire.", builds: ["all"], goals: ["story"], checked: false },
            { type: "npc", description: "⚠️ Free Greirat of the Undead Settlement from his cell using the Cell Key (on a corpse directly below the second bonfire). Exhaust his dialogue — he sells Lockpicks and later goes on scavenging runs, bringing back unique upgrade materials.", builds: ["all"], goals: ["platinum"], missable: true, checked: false },
            { type: "npc", description: "Speak to Emma, High Priestess of Lothric Castle — receive the Small Lothric Banner and the Way of Blue covenant item.", builds: ["all"], goals: ["story"], checked: false },

            // ── Build-Specific Items ─────────────────────────────────────────────
            { type: "item", description: "Refined Gem — dropped by armored Lothric Knights (sword variety). Used for Quality (Str+Dex) weapon infusions — best early infusion for quality builds.", builds: ["dex", "str"], goals: ["100%"], checked: false },
            { type: "item", description: "Raw Gem — corpse in the tower near the wyverns. Removes scaling but boosts base AR — excellent with high-base-damage weapons on low-level runs.", builds: ["all"], goals: ["100%"], checked: false },
            { type: "item", description: "Fire Gem — rare drop from the torch-wielding Hollow at the base of the first tower. Infuses weapons with Fire damage — a strong early damage boost for Faith builds before clerics get traction.", builds: ["faith"], goals: ["100%"], checked: false },
            { type: "item", description: "Irithyll Straight Sword — dropped by the Boreal Outrider Knight on the rooftop (near the icy mist door). Applies Frostbite buildup — one of the strongest early Dex weapons.", builds: ["dex"], goals: ["platinum"], checked: false },
            { type: "item", description: "Deep Battle Axe — dropped by a Mimic chest on the upper rooftop area. Has innate Deep infusion (Dark damage) — relevant for Faith-Hex hybrid builds.", builds: ["faith", "str"], goals: ["100%"], checked: false },
            { type: "item", description: "Gold Pine Resin x2 — on the rooftops before Vordt's fog gate. Temporarily adds Lightning to your weapon — useful for Faith builds struggling with Vordt.", builds: ["faith"], goals: ["100%"], checked: false },

            // ── Covenant + Platinum ─────────────────────────────────────────────
            { type: "covenant", description: "Join the Way of Blue covenant using Emma's item (press 'use' on it in your inventory). One of the covenants needed for completing all covenants in the 'Master of Expression' gesture set.", builds: ["all"], goals: ["platinum"], checked: false },

            // ── Master of Rings Items ──────────────────────────────────────────
            { type: "item", description: "Red Tearstone Ring — in the hanging cage above the area leading to Vordt. Boosts attack when HP is below 20%. Required for the 'Master of Rings' trophy.", builds: ["all"], goals: ["platinum"], checked: false },
            { type: "item", description: "Lloyd's Shield Ring +1 — same location as the base ring, but only spawns in NG+. Boosts absorption when HP is full. Required for the 'Master of Rings' trophy.", builds: ["all"], goals: ["platinum"], ng_plus: "NG+", checked: false },

            // ── Main Boss ──────────────────────────────────────────────────────
            { type: "boss", description: "Defeat Vordt of the Boreal Valley. Stay beneath him targeting his stomach/legs — his attacks have poor tracking. Weak to Dark and Lightning. Phase 2 he charges constantly.", builds: ["all"], goals: ["story"], imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/vordt_of_the_boreal_valley.jpg", checked: false },
            { type: "action", description: "Use the Small Lothric Banner at the cliff's edge to be carried by the wyverns to the Undead Settlement.", builds: ["all"], goals: ["story"], checked: false },
        ]
    },
    {
        area: "Undead Settlement",
        tasks: [
            { type: "npc", description: "⚠️ Recruit Yoel of Londor on the broken bridge. Accept his offer to 'draw out true strength' 5 times to unlock Yuria and the Usurpation of Fire ending. MUST be done BEFORE defeating the Abyss Watchers or Yoel dies.", missable: true, checked: false },
            { type: "item", description: "Find Loretta's Bone hanging from a balcony. Give it to Greirat in Firelink to unlock his first scavenge run (he brings back Siegbräu and other items).", checked: false },
            { type: "covenant", description: "Find the Warrior of Sunlight covenant item in the room with the Estus Soup.", checked: false },
            { type: "covenant", description: "⚠️ Join the Mound-Makers: get into the cage on the non-hostile Hollow's back, speak to Hodrick in the Pit of Hollows. MUST be done before defeating the Curse-Rotted Greatwood or Hodrick leaves.", missable: true, checked: false },
            { type: "npc", description: "Speak to Cornyx of the Great Swamp in a cage above the building with the pyromancers. He teaches pyromancies.", missable: true, checked: false },
            { type: "npc", description: "Speak to Siegward of Catarina on the elevator. Help him defeat the Fire Demon below to progress his quest.", missable: true, checked: false },
            { type: "npc", description: "Rescue Irina of Carim in her cell (requires Grave Key from Shrine Handmaid after giving her Mortician's Ashes). Do NOT buy dark miracles from her — she'll go hollow and you'll lose access to her miracles.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Curse-Rotted Greatwood. Attack the pustules on its body.", checked: false }
        ]
    },
    {
        area: "Road of Sacrifices",
        tasks: [
            { type: "npc", description: "Speak to Anri of Astora and Horace the Hushed at the Halfway Fortress bonfire. Receive the Blue Sentinels covenant from Horace.", checked: false },
            { type: "item", description: "Collect the Braille Divine Tome of Carim and give it to Irina in Firelink.", checked: false },
            { type: "npc", description: "⚠️ Find Orbeck of Vinheim in the ruins before the Crystal Sage (requires 10 INT to recruit). Give him at least one scroll BEFORE defeating 4 bosses — if you don't, he leaves permanently and you lose access to his sorceries.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Crystal Sage. The real Sage uses purple magic; the clones use blue.", checked: false },
            { type: "covenant", description: "Join the Watchdogs of Farron by speaking to the Old Wolf of Farron up the ladder in the swamp.", checked: false }
        ]
    },
    {
        area: "Farron Keep",
        tasks: [
            { type: "action", description: "Extinguish the three flames in the swamp to open the large stone doors leading to the Abyss Watchers.", checked: false },
            { type: "item", description: "Find the Sage's Scroll and Golden Scroll in the swamp. Give them to Orbeck in Firelink.", checked: false },
            { type: "npc", description: "⚠️ If you drew out true strength 5 times from Yoel, Yuria of Londor will appear in Firelink after this area. Talk to her and follow her directions carefully for the Usurpation of Fire ending.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Abyss Watchers, the first Lord of Cinder. Let them fight each other in phase 1 to save resources.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/abyss_watchers.jpg", checked: false }
        ]
    },
    {
        area: "Cathedral of the Deep",
        tasks: [
            { type: "item", description: "Find the Paladin's Ashes and the Poisonbite Ring.", checked: false },
            { type: "npc", description: "Get tricked by Unbreakable Patches (disguised as Siegward). Find the real Siegward trapped in the well outside the Cleansing Chapel — throw him his armor from the chest inside the chapel.", missable: true, checked: false },
            { type: "covenant", description: "Join Rosaria's Fingers in the bedchamber. ⚠️ Warning: Offering a Pale Tongue to Rosaria permanently fails Sirris's questline.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Deacons of the Deep. Focus down the glowing red enemy. (Trophy: Lord of Cinder: Deacons of the Deep).", checked: false }
        ]
    },
    {
        area: "Catacombs of Carthus & Smouldering Lake",
        tasks: [
            { type: "npc", description: "Speak to Anri of Astora twice in the Catacombs — first before the skeleton ball trap, second near the wooden bridge.", missable: true, checked: false },
            { type: "item", description: "Cut the wooden bridge to create a ladder to access Smouldering Lake below.", checked: false },
            { type: "npc", description: "⚠️ Find Horace in the cave in Smouldering Lake — he's gone hollow. Kill him so Anri doesn't find his body (which would break her questline).", missable: true, checked: false },
            { type: "boss", description: "Defeat High Lord Wolnir. Destroy his glowing bracelets — all three cause him to die.", checked: false },
            { type: "boss", description: "Defeat the Old Demon King in Smouldering Lake. Collect the Izalith Pyromancy Tome from this area.", checked: false }
        ]
    },
    {
        area: "Irithyll of the Boreal Valley",
        tasks: [
            { type: "action", description: "Cross the barrier into Irithyll using the Small Doll dropped by the Deacons of the Deep.", checked: false },
            { type: "npc", description: "Help Sirris of the Sunless Realms defeat Creighton the Wanderer on the bridge — use her summon sign on the bridge approach.", missable: true, checked: false },
            { type: "npc", description: "⚠️ Speak to Anri at the Church of Yorshka bonfire. Do NOT kill the stone pilgrim in the corner if you want the Usurpation of Fire ending — that pilgrim is planted by Yuria to set up the marriage ceremony.", missable: true, checked: false },
            { type: "boss", description: "Defeat Pontiff Sulyvahn. Parry his opening leap attack. Summoning Anri or Gotthard makes phase 2 easier.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/pontiff_sulyvahn.jpg", checked: false }
        ]
    },
    {
        area: "Irithyll Dungeon & Profaned Capital",
        tasks: [
            { type: "npc", description: "Find Karla in Irithyll Dungeon. You need the Jailer's Key Ring from the Profaned Capital to free her. She accepts and teaches dark tomes.", missable: true, checked: false },
            { type: "npc", description: "Free Siegward from his cell in the dungeon using the Old Cell Key.", missable: true, checked: false },
            { type: "item", description: "After defeating Oceiros, perform the Path of the Dragon gesture at the dragon statue in the dungeon to access Archdragon Peak.", checked: false },
            { type: "boss", description: "Defeat Yhorm the Giant. Use the Storm Ruler sword found at his throne. Siegward will join you if his questline is complete.", checked: false }
        ]
    },
    {
        area: "Anor Londo",
        tasks: [
            { type: "npc", description: "⚠️ Complete the 'marriage' ceremony with Anri in the Darkmoon Tomb (requires following Yuria's full quest). This is required for the Usurpation of Fire ending.", missable: true, checked: false },
            { type: "item", description: "Find the Giant's Coal on the dead giant blacksmith — gives Andre the ability to infuse weapons with specific gems.", checked: false },
            { type: "covenant", description: "Join the Blade of the Darkmoon by speaking to Company Captain Yorshka (requires the Darkmoon Loyalty gesture from Sirris after her questline completes).", missable: true, checked: false },
            { type: "boss", description: "Defeat Aldrich, Devourer of Gods. Move constantly to avoid his arrow rain in phase 2.", checked: false }
        ]
    },
    {
        area: "Lothric Castle & Consumed King's Garden",
        tasks: [
            { type: "boss", description: "Defeat the Dancer of the Boreal Valley (triggers automatically after defeating 3 Lords of Cinder, or by killing Emma early).", checked: false },
            { type: "covenant", description: "Find the Sunlight Altar in Lothric Castle and offer Sunlight Medals for miracles (Rank 1: Sacred Oath, Rank 2: Sunlight Spear).", checked: false },
            { type: "boss", description: "Defeat Dragonslayer Armour.", checked: false },
            { type: "boss", description: "Defeat Oceiros, the Consumed King in the Garden. Obtain the Path of the Dragon gesture from the corpse behind him.", checked: false }
        ]
    },
    {
        area: "Untended Graves (Optional/Secret Area)",
        tasks: [
            { type: "action", description: "Access by hitting the illusory wall behind the chest in the room after Oceiros.", checked: false },
            { type: "boss", description: "Defeat Champion Gundyr. A much faster, more aggressive version of the tutorial boss — excellent for practicing parries.", checked: false },
            { type: "item", description: "Collect the Eyes of a Fire Keeper from the dark Firelink Shrine. Give them to the Fire Keeper for the 'The End of Fire' ending option.", missable: true, checked: false }
        ]
    },
    {
        area: "Grand Archives",
        tasks: [
            { type: "item", description: "⚠️ Collect Orbeck's Ashes — only available after buying ALL his sorceries. Give them to Yuria to complete the related quest step.", missable: true, checked: false },
            { type: "item", description: "Find the Hunter's Ring and all remaining spell scrolls/tomes in the Archives.", checked: false },
            { type: "boss", description: "Defeat Lothric, Younger Prince and Lorian, Elder Prince.", checked: false }
        ]
    },
    {
        area: "Archdragon Peak (Secret Area)",
        tasks: [
            { type: "boss", description: "Defeat the Ancient Wyvern. Run through the level, ignoring enemies, and perform a plunging attack on its head from above.", checked: false },
            { type: "item", description: "Collect the Dragon Chaser's Ashes. Give them to the Shrine Handmaid for more Dragon covenant items.", checked: false },
            { type: "boss", description: "Defeat the Nameless King. Widely considered the hardest boss in the base game. Phase 1: target the dragon's head only. Phase 2: dodge his delayed lightning strikes.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/nameless_king.jpg", checked: false }
        ]
    },
    {
        area: "DLC: Ashes of Ariandel",
        tasks: [
            { type: "action", description: "Speak to Slave Knight Gael at the Cleansing Chapel to enter the Painted World of Ariandel.", checked: false },
            { type: "boss", description: "Defeat the Champion's Gravetender & Gravetender Greatwolf.", checked: false },
            { type: "boss", description: "Defeat Sister Friede. A 3-phase endurance fight. Summon Gael for phases 2 and 3.", checked: false },
            { type: "item", description: "Collect all spells, weapons, and rings (including +1 ring variants) required for Platinum completion in this DLC.", ng_plus: "NG+", checked: false }
        ]
    },
    {
        area: "DLC: The Ringed City",
        tasks: [
            { type: "action", description: "Travel to The Dreg Heap from the Kiln of the First Flame bonfire or Sister Friede's bonfire.", checked: false },
            { type: "boss", description: "Defeat the Demon in Pain & Demon From Below / Demon Prince.", checked: false },
            { type: "npc", description: "Complete Lapp's questline — speak to him multiple times across the area to obtain his full armor set.", missable: true, checked: false },
            { type: "boss", description: "Defeat Halflight, Spear of the Church.", checked: false },
            { type: "boss", description: "Defeat Darkeater Midir. An incredibly tanky dragon — aim ONLY for his head for maximum poise damage.", checked: false },
            { type: "boss", description: "Defeat Slave Knight Gael at the end of the world.", checked: false },
            { type: "item", description: "Collect all +3 Ring variants (only found here) and remaining spells needed for the Master of Rings trophy.", ng_plus: "NG+", checked: false }
        ]
    },
    {
        area: "Endgame, Farm & NG+ / NG++",
        tasks: [
            { type: "action", description: "Covenant Farming: Farm Proof of a Concord Kept (Silver Knights in Anor Londo), Vertebra Shackles (Carthus Skeletons), Wolf's Blood Swordgrass (Ghrus in Farron Keep), and Pale Tongues (Darkwraiths) for spell and ring trophies.", checked: false },
            { type: "boss", description: "Defeat the Soul of Cinder at the Kiln of the First Flame.", imageUrl: "https://darksouls3.wiki.fextralife.com/file/Dark-Souls-3/soul_of_cinder.jpg", checked: false },
            { type: "checkpoint", description: "Trigger the chosen ending. 3 endings are needed total for Platinum: To Link the First Flame, The End of Fire, and The Usurpation of Fire.", checked: false },
            { type: "action", description: "In NG+: Collect all +1 Ring variants (found in static locations throughout the world, not obtainable in NG).", ng_plus: "NG+", checked: false },
            { type: "action", description: "In NG++: Collect all +2 Ring variants. Together with +0 (NG) and +1 (NG+), this completes the Master of Rings trophy.", ng_plus: "NG++", checked: false }
        ]
    }
];
