const erData = [
    {
        area: "Limgrave & Weeping Peninsula",
        tasks: [
            { type: "checkpoint", description: "Arrive in Limgrave, speak to White Mask Varré at the Site of Grace — exhaust his dialogue. His questline is required for a short route to Mohgwyn Palace and can reward the Pureblood Knight's Medal.", missable: true, checked: false },
            { type: "checkpoint", description: "Rest at Gatefront Ruins to meet Melina, receive Torrent (your spectral steed), and gain the ability to level up.", checked: false },
            { type: "checkpoint", description: "⚠️ Return to the Church of Elleh at NIGHT (sit at a grace and pass time) to meet Renna (Ranni). She gives you the Spirit Calling Bell and Lone Wolf Ashes. This window closes after you get the Roundtable Hold invitation — don't miss it.", missable: true, checked: false },
            { type: "npc", description: "Speak to Roderika at Stormhill Shack and receive the Jellyfish Ashes. Exhaust her dialogue — she moves to Roundtable Hold and becomes a Spirit Tuner.", missable: true, checked: false },
            { type: "boss", description: "Defeat Margit, the Fell Omen at the entrance to Stormveil Castle. Use Margit's Shackle (bought from Patches later) to stagger him in phase 1.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/margit_the_fell_omen_bosses_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "boss", description: "Defeat Leonine Misbegotten at Castle Morne in the Weeping Peninsula. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Godrick the Grafted in Stormveil Castle. (Trophy/Achievement: Shardbearer Godrick). Restore his Great Rune at the Divine Tower of Limgrave for the rune to function.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_the_grafted_bosses_elden_ring_wiki_guide_300px.jpg", checked: false }
        ]
    },
    {
        area: "Liurnia of the Lakes",
        tasks: [
            { type: "npc", description: "Meet Sorcerer Thops at the Church of Irith. Give him a Glintstone Key later to progress his quest and access his inventory.", missable: true, checked: false },
            { type: "item", description: "Find the Academy Glintstone Key hidden behind the sleeping Glintstone Dragon Smarag (south of the Academy entrance).", checked: false },
            { type: "boss", description: "Defeat Red Wolf of Radagon in the Raya Lucaria Academy. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Rennala, Queen of the Full Moon. Phase 1: hit the glowing scholars. Phase 2: dodge her spells. (Trophy/Achievement: Shardbearer Rennala). She also enables respeccing.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rennala_queen_of_the_full_moon_bosses_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "npc", description: "Proceed to Caria Manor and defeat Royal Knight Loretta. (Trophy/Achievement). This opens the Three Sisters area and Ranni's Rise.", checked: false },
            { type: "npc", description: "⚠️ Meet Ranni the Witch at Ranni's Rise and START her questline (say yes when she asks you to serve her). This is required for the Age of Stars ending AND for the Moonlight Greatsword and Dark Moon Ring.", missable: true, checked: false }
        ]
    },
    {
        area: "Caelid & Dragonbarrow",
        tasks: [
            { type: "checkpoint", description: "Travel to Caelid. Enemies inflict Scarlet Rot — bring Preserving Boluses.", checked: false },
            { type: "boss", description: "Defeat Starscourge Radahn at Redmane Castle. Summon all available festival NPCs to help. (Trophy/Achievement: Shardbearer Radahn). Restore his rune at the Divine Tower of Caelid. His death also opens Nokron.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_radahn_bosses_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "boss", description: "Defeat Commander O'Neil in the Swamp of Aeonia to obtain the Unalloyed Gold Needle — required for Millicent's questline.", missable: true, checked: false },
            { type: "npc", description: "⚠️ Give the Unalloyed Gold Needle to Millicent at the Church of the Plague to start her questline. Following it to completion yields the Miquella's Needle (needed to cure the Frenzied Flame).", missable: true, checked: false }
        ]
    },
    {
        area: "Underground Regions (Nokron & Nokstella)",
        tasks: [
            { type: "action", description: "Descend into the crater in southern Limgrave (created by Radahn's meteor) to enter Nokron, Eternal City.", checked: false },
            { type: "boss", description: "Defeat the Mimic Tear. (Trophy/Achievement). Unequip all weapons and armor BEFORE entering the fog gate — the boss copies your loadout and becomes trivial with nothing equipped.", checked: false },
            { type: "item", description: "Collect the Fingerslayer Blade in Nokron's Ancestral Woods and give it to Ranni to receive the Carian Inverted Statue — required to progress her quest.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Regal Ancestor Spirit in Nokron. (Trophy/Achievement). Light all five fires first.", checked: false },
            { type: "action", description: "Use the portal in Renna's Rise (unlocked after giving Ranni the Fingerslayer Blade) to access Ainsel River Main and Nokstella.", checked: false },
            { type: "boss", description: "Defeat Astel, Naturalborn of the Void at the end of the Lake of Rot. (Trophy/Achievement). Navigate through the rot lake using the coffin shortcut.", checked: false },
            { type: "npc", description: "⚠️ After Astel: access the Moonlight Altar plateau, defeat Adula's Moonblade dragon, then give Ranni the Dark Moon Ring at the cathedral. This completes Ranni's quest and unlocks the Age of Stars ending.", missable: true, checked: false }
        ]
    },
    {
        area: "Altus Plateau & Mt. Gelmir",
        tasks: [
            { type: "action", description: "Reach Altus Plateau via the Grand Lift of Dectus (requires both medallion halves from Fort Haight in Limgrave and Fort Faroth in Caelid) or through the Ruin-Strewn Precipice in northern Liurnia.", checked: false },
            { type: "boss", description: "Defeat Magma Wyrm Makar if using the Ruin-Strewn Precipice route. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Elemer of the Briar at the Shaded Castle. (Trophy/Achievement).", checked: false },
            { type: "npc", description: "Join the Volcano Manor faction by speaking to Tanith. Complete assassination contracts to receive rewards including Rykard's Rancor and relationship items. Exhaust contract progression for Bernahl's quest.", missable: true, checked: false },
            { type: "boss", description: "Defeat Godskin Noble in Volcano Manor's Temple of Eiglay. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Rykard, Lord of Blasphemy. Pick up the Serpent-Hunter spear found inside the arena — it deals massive damage and is essentially required. (Trophy/Achievement: Shardbearer Rykard).", checked: false }
        ]
    },
    {
        area: "Leyndell, Royal Capital",
        tasks: [
            { type: "boss", description: "Defeat the Draconic Tree Sentinel guarding the main entrance to the Capital.", checked: false },
            { type: "boss", description: "Defeat Godfrey, First Elden Lord (Golden Shade) in the Erdtree Sanctuary. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Morgott, the Omen King at the Elden Throne. (Trophy/Achievement: Shardbearer Morgott).", imageUrl: "", checked: false },
            { type: "action", description: "Interact with the impenetrable thorns at the Erdtree entrance. Speak to Melina at the Elden Throne bonfire to receive the Rold Medallion.", checked: false },
            { type: "action", description: "Descend into the Subterranean Shunning-Grounds beneath Leyndell — access via a well near the Avenue Balcony grace.", checked: false },
            { type: "boss", description: "Defeat Mohg, the Omen in the sewers. (Trophy/Achievement). Drop down the corpse pile to find the Three Fingers path.", checked: false },
            { type: "action", description: "⚠️ Complete the platforming puzzle below Mohg, remove ALL equipment, and accept the Frenzied Flame from the Three Fingers — required for the Lord of Frenzied Flame ending. Use Miquella's Needle (from Millicent's quest) later at Dragonlord Placidusax's arena to cure it if needed.", missable: true, checked: false }
        ]
    },
    {
        area: "Mountaintops of the Giants & Consecrated Snowfield",
        tasks: [
            { type: "boss", description: "Defeat Commander Niall at Castle Sol to obtain the left half of the Haligtree Secret Medallion. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat the Fire Giant at the Forge of the Giants. Target his injured ankle in phase 1, then his eye/hands in phase 2. (Trophy/Achievement).", checked: false },
            { type: "action", description: "⚠️ Commit the cardinal sin at the Forge of the Giants. This permanently alters Leyndell into Ashen Capital — make sure you've finished all Leyndell content first.", missable: true, checked: false },
            { type: "action", description: "Use the Haligtree Secret Medallion at the Grand Lift of Rold to access the Consecrated Snowfield.", checked: false },
            { type: "action", description: "Take the Sending Gate teleporter in the Snowfield to reach Mohgwyn Palace (alternate to Varré's route).", checked: false },
            { type: "boss", description: "⚠️ Defeat Mohg, Lord of Blood in Mohgwyn Palace. Use the Purifying Crystal Tear in your flask to negate his blood curse in phase 2. (Trophy/Achievement: Shardbearer Mohg). REQUIRED to access the Shadow of the Erdtree DLC.", missable: true, checked: false }
        ]
    },
    {
        area: "Miquella's Haligtree",
        tasks: [
            { type: "action", description: "Solve the statue lighting puzzle in Ordina, Liturgical Town (use the Spiritspring to reach the rooftops) to open the portal to the Haligtree.", checked: false },
            { type: "boss", description: "Defeat Loretta, Knight of the Haligtree. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Malenia, Blade of Miquella. Widely considered the hardest boss in the base game. Learn to dodge the Waterfowl Dance. She heals on every hit — use spirit ashes to split her attention. (Trophy/Achievement: Shardbearer Malenia).", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia_blade_of_miquella_bosses_elden_ring_wiki_guide_300px.jpg", checked: false }
        ]
    },
    {
        area: "Crumbling Farum Azula & Ashen Capital",
        tasks: [
            { type: "boss", description: "Defeat the Godskin Duo. Use Sleep Pots or the Sleepbone Arrow to incapacitate one while you fight the other. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Dragonlord Placidusax (optional secret boss). Access by riding the wind lift down near the great bridge and dropping to a hidden platform. (Trophy/Achievement). ⚠️ This is also the arena where you can cure the Frenzied Flame using Miquella's Needle.", checked: false },
            { type: "boss", description: "Defeat Maliketh, the Black Blade. Use the Blasphemous Claw to parry his black flame attacks in phase 2. (Trophy/Achievement). His death transforms Leyndell into the Ashen Capital permanently.", checked: false },
            { type: "boss", description: "Return to the Ashen Capital and defeat Sir Gideon Ofnir, the All-Knowing.", checked: false },
            { type: "boss", description: "Defeat Godfrey, First Elden Lord / Hoarah Loux, Warrior. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Radagon of the Golden Order and the Elden Beast. High holy resistance is crucial. Bring Clarifying Horn Charm to resist Elden Beast's confusion.", checked: false },
            { type: "checkpoint", description: "⚠️ Backup your save before triggering the ending if you want all 3 ending trophies in one playthrough using save reloading.", checked: false },
            { type: "checkpoint", description: "Trigger the 3 Endings for all trophies: Elden Lord (default), Age of Stars (summon Ranni's summon sign), and Lord of Frenzied Flame (accept Three Fingers mark).", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Gravesite Plain & Scadu Altus)",
        tasks: [
            { type: "action", description: "⚠️ PRE-REQUISITE: Mohg, Lord of Blood must be defeated. Interact with Miquella's withered arm in Mohg's arena to enter the Realm of Shadow.", checked: false },
            { type: "item", description: "Collect Scadutree Fragments and Revered Spirit Ashes throughout the DLC to level up your Shadow Realm attack and defense. These are more important than character level here.", checked: false },
            { type: "boss", description: "Defeat the Divine Dancing Lion in Belurat, Tower Settlement.", checked: false },
            { type: "boss", description: "Defeat Rellana, Twin Moon Knight in Castle Ensis to access Scadu Altus.", checked: false },
            { type: "npc", description: "⚠️ Find and speak to Needle Knight Leda, Hornsent, Moore, and Thiollier early. Their questlines determine who helps you in the final DLC boss fight — Ansbach and Thiollier summons are REQUIRED for their quest completion rewards.", missable: true, checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Cerulean Coast, Charo's Hidden Grave, Jagged Peak)",
        tasks: [
            { type: "boss", description: "Defeat the Putrescent Knight at the bottom of the Stone Coffin Fissure. Required to access St. Trina and Thiollier's quest.", checked: false },
            { type: "npc", description: "⚠️ Speak to St. Trina after the Putrescent Knight fight. Imbibe her nectar repeatedly (multiple visits) to progress Thiollier's quest. Required for his summon in the final boss.", missable: true, checked: false },
            { type: "boss", description: "Ascend the Jagged Peak and defeat Bayle the Dread. Summon Igon (his summon sign is on the peak) for an epic voiced encounter.", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Shadow Keep & Abyssal Woods)",
        tasks: [
            { type: "boss", description: "Defeat the Golden Hippopotamus at the entrance to the Shadow Keep.", checked: false },
            { type: "boss", description: "Defeat Messmer the Impaler at the top of the Specimen Storehouse. Key story boss. Obtain Messmer's Kindling — REQUIRED to progress.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_the_impaler_bosses_shadow_of_the_erdtree_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "boss", description: "Defeat Commander Gaius at the Scaduview side of the Shadow Keep — opens the western path.", checked: false },
            { type: "action", description: "Find the illusory wall in the Shadow Keep to reach the Abyssal Woods. Use stealth (crouch) to avoid the Winter Lantern enemies — they are unkillable without a parry and cause Madness buildup.", checked: false },
            { type: "boss", description: "Defeat Midra, Lord of Frenzied Flame in the Abyssal Woods manor.", checked: false },
            { type: "boss", description: "Defeat Romina, Saint of the Bud in the Church of the Bud — opens the Sealing Tree.", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Enir-Ilim & Finale)",
        tasks: [
            { type: "action", description: "Burn the Sealing Tree with Messmer's Kindling to open the path to Enir-Ilim.", checked: false },
            { type: "boss", description: "⚠️ Defeat Leda and her allies in the NPC brawl before the final boss. Summon your allies (Thiollier, Ansbach) — their presence here is required to complete their questlines.", missable: true, checked: false },
            { type: "boss", description: "Defeat Promised Consort Radahn / Radahn, Consort of Miquella. One of the hardest bosses in the game. Strong shield or high mobility builds recommended. Summon both Ansbach and Thiollier for quest completion.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/promised_consort_radahn_boss_shadow_of_the_erdtree_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "checkpoint", description: "Interact with the memory in the center of the arena to view the final DLC cutscene and complete the SotE questline.", checked: false }
        ]
    }
];
