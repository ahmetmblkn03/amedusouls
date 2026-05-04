const ds1Data = [
    {
        area: "Northern Undead Asylum",
        tasks: [
            { type: "checkpoint", description: "Receive the Dungeon Cell Key from Oscar of Astora and escape your cell.", checked: false },
            { type: "boss", description: "Encounter the Asylum Demon. Run past it through the door on the left during the first encounter.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Asylum_Demon.jpg", checked: false },
            { type: "item", description: "Retrieve your starting weapons and shield.", checked: false },
            { type: "npc", description: "Speak to Oscar of Astora (dying knight) to receive the Estus Flask and Undead Asylum F2 East Key.", checked: false },
            { type: "boss", description: "Perform a plunging attack on the Asylum Demon, then defeat him. Receive the Big Pilgrim's Key.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Asylum_Demon.jpg", checked: false }
        ]
    },
    {
        area: "Firelink Shrine & Undead Burg",
        tasks: [
            { type: "checkpoint", description: "Arrive at Firelink Shrine via the giant crow.", checked: false },
            { type: "npc", description: "Speak to the Crestfallen Warrior, Petrus of Thorolund (join Way of White covenant), and Anastacia of Astora.", checked: false },
            { type: "item", description: "Collect the hidden items around Firelink Shrine, including the Morning Star and Talisman.", checked: false },
            { type: "boss", description: "Proceed to Undead Burg and defeat the Taurus Demon. Use plunging attacks from the tower.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Taurus_Demon.jpg", checked: false },
            { type: "npc", description: "Speak to Solaire of Astora to receive the White Sign Soapstone.", checked: false },
            { type: "npc", description: "Shoot the Hellkite Wyvern's tail from beneath the bridge to obtain the Drake Sword.", checked: false }
        ]
    },
    {
        area: "Undead Parish & The First Bell",
        tasks: [
            { type: "npc", description: "Meet Blacksmith Andre in the Undead Parish.", checked: false },
            { type: "item", description: "Obtain the Basement Key in front of the church.", checked: false },
            { type: "item", description: "Find the Fire Keeper Soul on the altar inside the church (guarded by the Berenike Knight).", checked: false },
            { type: "npc", description: "Rescue Knight Lautrec of Carim from his cell (requires Mystery Key).", checked: false },
            { type: "boss", description: "Defeat the Bell Gargoyles on the roof. Summon Solaire or Lautrec to make it a 3v2.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Bell_Gargoyle.jpg", checked: false },
            { type: "action", description: "Ring the First Bell of Awakening. (Trophy/Achievement). Speak to Oswald of Carim to buy Purging Stones.", checked: false }
        ]
    },
    {
        area: "Lower Undead Burg & The Depths",
        tasks: [
            { type: "npc", description: "Rescue Griggs of Vinheim from the locked room in Lower Undead Burg (requires Residence Key).", checked: false },
            { type: "boss", description: "Defeat the Capra Demon. Kill the dogs immediately, then use the stairs to perform plunging attacks.", checked: false },
            { type: "item", description: "Retrieve the Key to Depths from the Capra Demon.", checked: false },
            { type: "item", description: "Collect the Large Ember from the chest behind the first Butcher.", checked: false },
            { type: "npc", description: "Rescue Laurentius of the Great Swamp from the barrel in the Depths.", checked: false },
            { type: "npc", description: "Defeat Knight Kirk (NPC Invader) in the Depths while human.", checked: false },
            { type: "boss", description: "Defeat the Gaping Dragon. Cut off its tail to receive the Dragon King Greataxe. (Trophy: Defeat Gaping Dragon). Receive Blighttown Key.", checked: false }
        ]
    },
    {
        area: "Blighttown & The Second Bell",
        tasks: [
            { type: "item", description: "Find the Iaito and the Eagle Shield on the upper walkways.", checked: false },
            { type: "npc", description: "Defeat Maneater Mildred (NPC Invader) in the swamp while human.", checked: false },
            { type: "checkpoint", description: "Rest at the bonfire in the swamp.", checked: false },
            { type: "boss", description: "Defeat Chaos Witch Quelaag. Summon Maneater Mildred to tank her attacks. (Trophy: Defeat Chaos Witch Quelaag).", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Chaos_Witch_Quelaag.jpg", checked: false },
            { type: "action", description: "Ring the Second Bell of Awakening. (Trophy/Achievement).", checked: false },
            { type: "covenant", description: "Discover the hidden wall below the bell and join the Chaos Servant covenant. Speak to the Fair Lady.", checked: false },
            { type: "npc", description: "Speak to Quelana of Izalith in the swamp (requires Pyromancy Flame +10).", checked: false }
        ]
    },
    {
        area: "Sen's Fortress",
        tasks: [
            { type: "action", description: "Watch the gates open at Sen's Fortress. Wait for the Giant of Sen's to drop the boulder.", checked: false },
            { type: "npc", description: "Rescue Big Hat Logan from his cage using the Cage Key or Master Key.", checked: false },
            { type: "item", description: "Obtain the Lightning Spear from the Mimic.", checked: false },
            { type: "item", description: "Find the Covetous Gold Serpent Ring.", checked: false },
            { type: "boss", description: "Defeat the Iron Golem. Summon Iron Tarkus to easily solo the boss.", checked: false }
        ]
    },
    {
        area: "Anor Londo",
        tasks: [
            { type: "checkpoint", description: "Arrive in Anor Londo. Rest at the first bonfire with the Darkmoon Knightess.", checked: false },
            { type: "boss", description: "Navigate the rafters and the notorious Silver Knight archers.", checked: false },
            { type: "npc", description: "Speak to Solaire of Astora at the bonfire inside the castle.", checked: false },
            { type: "npc", description: "Invade Knight Lautrec using the Black Eye Orb (if he killed Anastacia) to retrieve her soul and the Ring of Favor and Protection.", checked: false },
            { type: "item", description: "Find the Havel's Set and Dragon Tooth in the basement.", checked: false },
            { type: "boss", description: "Defeat Dragon Slayer Ornstein and Executioner Smough. Defeat Smough first to get Ornstein's Soul (for Dragonslayer Spear) or vice versa.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Ornstein_and_Smough.jpg", checked: false },
            { type: "action", description: "Receive the Lordvessel from Gwynevere, Princess of Sunlight. (Trophy: Lordvessel).", checked: false }
        ]
    },
    {
        area: "Darkroot Garden & Basin",
        tasks: [
            { type: "item", description: "Purchase the Crest of Artorias from Andre (20k souls) to open the sealed door.", checked: false },
            { type: "covenant", description: "Speak to Alvina the cat to join the Forest Hunter covenant.", checked: false },
            { type: "boss", description: "Defeat the Great Grey Wolf Sif to obtain the Covenant of Artorias ring (required for the Abyss).", checked: false },
            { type: "boss", description: "Defeat the Hydra in Darkroot Basin. Stick to the edge of the water and chop off its heads.", checked: false },
            { type: "npc", description: "Rescue Dusk of Oolacile from the Golden Golem behind the Hydra. Summon her sign by the lake.", checked: false }
        ]
    },
    {
        area: "New Londo Ruins",
        tasks: [
            { type: "item", description: "Use Transient Curses to damage the Ghosts.", checked: false },
            { type: "npc", description: "Speak to Ingward on the roof to receive the Key to the Seal.", checked: false },
            { type: "action", description: "Open the seal to drain the water from New Londo Ruins.", checked: false },
            { type: "item", description: "Collect the Very Large Ember.", checked: false },
            { type: "boss", description: "Equip the Covenant of Artorias ring and drop into the Abyss. Defeat the Four Kings. (Trophy: Defeat Four Kings).", checked: false },
            { type: "covenant", description: "Do NOT place the Lordvessel with Frampt. Instead, speak to Darkstalker Kaathe in the Abyss to join the Darkwraith covenant.", checked: false }
        ]
    },
    {
        area: "The Duke's Archives & Crystal Cave",
        tasks: [
            { type: "action", description: "Place the Lordvessel to access the golden fog gate areas.", checked: false },
            { type: "boss", description: "Encounter Seath the Scaleless (Scripted Death). Equip a Ring of Sacrifice.", checked: false },
            { type: "item", description: "Escape the prison and turn off the blaring alarm.", checked: false },
            { type: "npc", description: "Rescue Big Hat Logan from his massive cell.", checked: false },
            { type: "item", description: "Collect the Crystal Ember and the Channeler's Trident (rare drop from Channelers).", checked: false },
            { type: "boss", description: "Navigate the invisible paths in the Crystal Cave.", checked: false },
            { type: "boss", description: "Defeat Seath the Scaleless. Destroy the primordial crystal first. Cut off his middle tail for the Moonlight Greatsword. (Trophy: Defeat Seath the Scaleless).", checked: false }
        ]
    },
    {
        area: "Demon Ruins & Lost Izalith",
        tasks: [
            { type: "boss", description: "Defeat Ceaseless Discharge. You can lure him to the fog gate and hit his arm to make him fall.", checked: false },
            { type: "item", description: "Collect the Chaos Flame Ember in the cooled lava pool.", checked: false },
            { type: "boss", description: "Defeat the Demon Firesage. Weak to bleed and magic.", checked: false },
            { type: "boss", description: "Defeat the Centipede Demon. Cut off its tail/arm for the Orange Charred Ring (lava immunity).", checked: false },
            { type: "npc", description: "Save Solaire of Astora by opening the Lost Izalith shortcut (requires Chaos Servant +2) and killing the Sunlight Maggot.", checked: false },
            { type: "boss", description: "Defeat The Bed of Chaos. Destroy the left/right root nodes, then drop onto the center root to kill the bug. (Trophy: Defeat Bed of Chaos).", checked: false }
        ]
    },
    {
        area: "The Catacombs & Tomb of the Giants",
        tasks: [
            { type: "item", description: "Equip a Divine weapon to permanently kill the reviving skeletons.", checked: false },
            { type: "npc", description: "Speak to Vamos the Blacksmith.", checked: false },
            { type: "boss", description: "Defeat Pinwheel to receive the Rite of Kindling (Trophy: Rite of Kindling).", checked: false },
            { type: "covenant", description: "Nestle in the coffin with Eyes of Death in your inventory to join the Gravelord Servant covenant and get the Gravelord Sword.", checked: false },
            { type: "npc", description: "Get kicked into a pit by Trusty Patches. Forgive him so he moves to Firelink Shrine.", checked: false },
            { type: "npc", description: "Rescue Rhea of Thorolund from her hollowed companions.", checked: false },
            { type: "boss", description: "Defeat Gravelord Nito. Stay near the entrance so you don't aggro the Giant Skeletons in the back. (Trophy: Defeat Gravelord Nito).", checked: false }
        ]
    },
    {
        area: "DLC: Artorias of the Abyss",
        tasks: [
            { type: "action", description: "Kill the Crystal Golem in the Duke's Archives to get the Broken Pendant.", checked: false },
            { type: "action", description: "Return to the basin where you rescued Dusk and enter the portal.", checked: false },
            { type: "boss", description: "Defeat the Sanctuary Guardian.", checked: false },
            { type: "boss", description: "Defeat Artorias the Abysswalker. Disrupt his buffing animation.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Artorias_the_Abysswalker.jpg", checked: false },
            { type: "boss", description: "Defeat Black Dragon Kalameet. You must have Hawkeye Gough shoot him down first. Cut off his tail for the Obsidian Greatsword.", checked: false },
            { type: "boss", description: "Defeat Manus, Father of the Abyss. Use the Silver Pendant to deflect his dark magic.", checked: false }
        ]
    },
    {
        area: "Kiln of the First Flame & NG+",
        tasks: [
            { type: "action", description: "Offer the 4 Lord Souls to the Lordvessel to open the door to the Kiln.", checked: false },
            { type: "item", description: "Farm the Black Knights for any missing Black Knight weapons/shields and Titanite Chunks.", checked: false },
            { type: "action", description: "Perform any final weapon upgrades and kindling before entering NG+.", checked: false },
            { type: "boss", description: "Defeat Gwyn, Lord of Cinder. Parry his attacks for massive damage.", imageUrl: "https://darksouls.wiki.fextralife.com/file/Dark-Souls/Gwyn_Lord_of_Cinder.jpg", checked: false },
            { type: "checkpoint", description: "Choose to Link the Fire or walk away to become the Dark Lord. (Trophy/Achievement).", checked: false },
            { type: "action", description: "Begin NG+ and NG++ to acquire all boss souls required to craft the remaining unique weapons for the 'Knight's Honor' trophy.", checked: false }
        ]
    }
];
