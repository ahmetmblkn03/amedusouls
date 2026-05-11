const erData = [
    {
        area: "Limgrave & Weeping Peninsula",
        tasks: [
            { type: "checkpoint", description: "Arrive in Limgrave, speak to White Mask Varré, and avoid the Tree Sentinel.", checked: false },
            { type: "checkpoint", description: "Rest at Gatefront Ruins to meet Melina, receive Torrent (your spectral steed), and gain the ability to level up.", checked: false },
            { type: "checkpoint", description: "Return to the Church of Elleh at night to meet Renna (Ranni) and receive the Spirit Calling Bell and Lone Wolf Ashes.", checked: false },
            { type: "npc", description: "Speak to Roderika at Stormhill Shack and receive the Jellyfish Ashes.", location: "Stormhill Shack", checked: false },
            { type: "boss", description: "Defeat Margit, the Fell Omen at the entrance to Stormveil Castle. You can use Margit's Shackle to make phase 1 easier.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/margit_the_fell_omen_bosses_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "boss", description: "Defeat Leonine Misbegotten at Castle Morne in the Weeping Peninsula (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Godrick the Grafted in Stormveil Castle. (Trophy/Achievement: Shardbearer Godrick). Restore his Great Rune at the Divine Tower of Limgrave.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/godrick_the_grafted_bosses_elden_ring_wiki_guide_300px.jpg", checked: false }
        ]
    },
    {
        area: "Liurnia of the Lakes",
        tasks: [
            { type: "npc", description: "Meet Sorcerer Thops at the Church of Irith.", location: "Church of Irith", checked: false },
            { type: "item", description: "Find the Academy Glintstone Key behind the sleeping Glintstone Dragon Smarag.", checked: false },
            { type: "boss", description: "Defeat Red Wolf of Radagon in the Raya Lucaria Academy. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Rennala, Queen of the Full Moon. Phase 1: Hit the glowing scholars. Phase 2: Dodge her spells. (Trophy/Achievement: Shardbearer Rennala).", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/rennala_queen_of_the_full_moon_bosses_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "npc", description: "Proceed to Caria Manor and defeat Royal Knight Loretta (Trophy/Achievement).", location: "Caria Manor", checked: false },
            { type: "npc", description: "Meet Ranni the Witch at Ranni's Rise to begin her massive questline (Required for the Age of Stars ending).", location: "Ranni's Rise", checked: false }
        ]
    },
    {
        area: "Caelid & Dragonbarrow",
        tasks: [
            { type: "checkpoint", description: "Travel to Caelid. Be warned, the enemies here hit hard and inflict Scarlet Rot.", checked: false },
            { type: "boss", description: "Defeat Starscourge Radahn at Redmane Castle. Summon the festival NPCs to help. (Trophy/Achievement: Shardbearer Radahn). Restore his rune at the Divine Tower of Caelid.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/starscourge_radahn_bosses_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "boss", description: "Defeat Commander O'Neil in the Swamp of Aeonia to get the Unalloyed Gold Needle for Millicent's quest.", checked: false },
            { type: "npc", description: "Give the needle to Millicent at the Church of the Plague to start her questline.", location: "Church of the Plague", checked: false }
        ]
    },
    {
        area: "Underground Regions (Nokron & Nokstella)",
        tasks: [
            { type: "action", description: "Descend into the crater in Limgrave (created by Radahn's meteor) to enter Nokron, Eternal City.", checked: false },
            { type: "boss", description: "Defeat the Mimic Tear (Trophy/Achievement). Unequip your weapons before entering the arena for an easy fight.", checked: false },
            { type: "item", description: "Collect the Fingerslayer Blade in Nokron and give it to Ranni to receive the Carian Inverted Statue.", checked: false },
            { type: "boss", description: "Defeat the Regal Ancestor Spirit in Nokron (Trophy/Achievement).", checked: false },
            { type: "action", description: "Use the portal in Renna's Rise to access Ainsel River Main and Nokstella.", checked: false },
            { type: "boss", description: "Defeat Astel, Naturalborn of the Void at the end of the Lake of Rot. (Trophy/Achievement). Access the Moonlight Altar and give Ranni the Dark Moon Ring.", checked: false }
        ]
    },
    {
        area: "Altus Plateau & Mt. Gelmir",
        tasks: [
            { type: "action", description: "Reach Altus Plateau via the Grand Lift of Dectus (requires finding both medallion halves in Limgrave and Caelid) or the Ruin-Strewn Precipice.", checked: false },
            { type: "boss", description: "Defeat Magma Wyrm Makar if using the Ruin-Strewn Precipice route (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Elemer of the Briar at the Shaded Castle (Trophy/Achievement).", checked: false },
            { type: "npc", description: "Join the Volcano Manor faction and complete the assassination contracts, OR explore the legacy dungeon.", location: "Volcano Manor", checked: false },
            { type: "boss", description: "Defeat Godskin Noble in Volcano Manor (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Rykard, Lord of Blasphemy using the Serpent-Hunter spear found in the arena. (Trophy/Achievement: Shardbearer Rykard).", checked: false }
        ]
    },
    {
        area: "Leyndell, Royal Capital",
        tasks: [
            { type: "boss", description: "Defeat the Draconic Tree Sentinel guarding the entrance to the Capital.", checked: false },
            { type: "boss", description: "Defeat Godfrey, First Elden Lord (Golden Shade) in the Erdtree Sanctuary. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Morgott, the Omen King at the Elden Throne. (Trophy/Achievement: Shardbearer Morgott).", checked: false },
            { type: "action", description: "Interact with the impenetrable thorns at the Erdtree entrance, then speak to Melina at the Elden Throne bonfire to receive the Rold Medallion.", checked: false },
            { type: "action", description: "Descend into the Subterranean Shunning-Grounds beneath Leyndell.", checked: false },
            { type: "boss", description: "Defeat Mohg, the Omen in the sewers. (Trophy/Achievement).", checked: false },
            { type: "action", description: "Complete the platforming puzzle below Mohg, remove your armor, and accept the Frenzied Flame from the Three Fingers (Required for the Lord of Frenzied Flame ending). Note: Use Miquella's Needle later if you want to cure it.", checked: false }
        ]
    },
    {
        area: "Mountaintops of the Giants & Consecrated Snowfield",
        tasks: [
            { type: "boss", description: "Defeat Commander Niall at Castle Sol to obtain the left half of the Haligtree Secret Medallion. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat the Fire Giant at the Forge of the Giants. Target his injured ankle in phase 1, and his hands/eye in phase 2. (Trophy/Achievement).", checked: false },
            { type: "action", description: "Commit the cardinal sin at the Forge of the Giants. This alters Leyndell permanently into the Ashen Capital.", checked: false },
            { type: "action", description: "Use the Haligtree Secret Medallion at the Grand Lift of Rold to access the Consecrated Snowfield.", checked: false },
            { type: "action", description: "Take the teleporter in the Snowfield to access Mohgwyn Palace.", checked: false },
            { type: "boss", description: "Defeat Mohg, Lord of Blood in Mohgwyn Palace. Use the Purifying Crystal Tear in your flask to negate his blood curse. (Trophy/Achievement: Shardbearer Mohg). *REQUIRED FOR DLC*.", checked: false }
        ]
    },
    {
        area: "Miquella's Haligtree",
        tasks: [
            { type: "action", description: "Solve the puzzle in Ordina, Liturgical Town to open the portal to the Haligtree.", checked: false },
            { type: "boss", description: "Defeat Loretta, Knight of the Haligtree (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Malenia, Blade of Miquella. Widely considered the hardest boss in the game. Dodge her Waterfowl Dance. (Trophy/Achievement: Shardbearer Malenia).", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/malenia_blade_of_miquella_bosses_elden_ring_wiki_guide_300px.jpg", checked: false }
        ]
    },
    {
        area: "Crumbling Farum Azula & Ashen Capital",
        tasks: [
            { type: "boss", description: "Defeat the Godskin Duo. Use Sleep Pots to incapacitate one while you fight the other. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Dragonlord Placidusax (Optional secret boss). Access by dropping down ledges near the great bridge. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Maliketh, the Black Blade. Use the Blasphemous Claw to parry his black flame attacks. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Return to the Ashen Capital and defeat Sir Gideon Ofnir, the All-Knowing.", checked: false },
            { type: "boss", description: "Defeat Godfrey, First Elden Lord / Hoarah Loux, Warrior. (Trophy/Achievement).", checked: false },
            { type: "boss", description: "Defeat Radagon of the Golden Order and the Elden Beast. Holy damage resistance is crucial here.", checked: false },
            { type: "checkpoint", description: "Backup your save here if you want to get all 3 ending trophies in one playthrough.", checked: false },
            { type: "checkpoint", description: "Trigger the Endings: Elden Lord, Age of Stars (Summon Ranni), and Lord of Frenzied Flame.", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Gravesite Plain & Scadu Altus)",
        tasks: [
            { type: "action", description: "Interact with Miquella's withered arm in Mohg's arena to enter the Realm of Shadow.", checked: false },
            { type: "item", description: "Collect Scadutree Fragments and Revered Spirit Ashes to level up your DLC attack and defense stats.", checked: false },
            { type: "boss", description: "Defeat the Divine Dancing Lion in Belurat, Tower Settlement.", checked: false },
            { type: "boss", description: "Defeat Rellana, Twin Moon Knight in Castle Ensis to access Scadu Altus.", checked: false },
            { type: "npc", description: "Find and speak to Needle Knight Leda, Hornsent, Moore, and Thiollier.", location: "Scadu Altus", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Cerulean Coast, Charo's Hidden Grave, Jagged Peak)",
        tasks: [
            { type: "boss", description: "Defeat the Putrescent Knight at the bottom of the Stone Coffin Fissure.", checked: false },
            { type: "npc", description: "Speak to St. Trina after the Putrescent Knight fight. Imbibe her nectar repeatedly to progress Thiollier's quest.", location: "Stone Coffin Fissure", checked: false },
            { type: "boss", description: "Ascend the Jagged Peak and defeat Bayle the Dread. Summon Igon for an epic fight.", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Shadow Keep & Abyssal Woods)",
        tasks: [
            { type: "boss", description: "Defeat the Golden Hippopotamus at the entrance to the Shadow Keep.", checked: false },
            { type: "boss", description: "Defeat Messmer the Impaler at the top of the Specimen Storehouse. (Key story boss). Obtain Messmer's Kindling.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/messmer_the_impaler_bosses_shadow_of_the_erdtree_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "boss", description: "Defeat Commander Gaius at the Scaduview side of the Shadow Keep.", checked: false },
            { type: "action", description: "Use the illusory wall in the Shadow Keep to reach the Abyssal Woods. Use stealth to avoid the Winter Lantern enemies (they are unkillable unless you parry them).", checked: false },
            { type: "boss", description: "Defeat Midra, Lord of Frenzied Flame in the Abyssal Woods.", checked: false },
            { type: "boss", description: "Defeat Romina, Saint of the Bud in the Church of the Bud.", checked: false }
        ]
    },
    {
        area: "DLC: Shadow of the Erdtree (Enir-Ilim & Finale)",
        tasks: [
            { type: "action", description: "Burn the Sealing Tree with Messmer's Kindling to access Enir-Ilim.", checked: false },
            { type: "boss", description: "Defeat Leda and her allies in a massive NPC brawl. Summon your allies (Thiollier, Ansbach) to help.", checked: false },
            { type: "boss", description: "Defeat Promised Consort Radahn / Radahn, Consort of Miquella. Highly difficult boss; use strong shield builds or high mobility. Summoning Ansbach and Thiollier is recommended for quest completion.", imageUrl: "https://eldenring.wiki.fextralife.com/file/Elden-Ring/promised_consort_radahn_boss_shadow_of_the_erdtree_elden_ring_wiki_guide_300px.jpg", checked: false },
            { type: "checkpoint", description: "Interact with the memory in the center of the arena to view the final DLC cutscene.", checked: false }
        ]
    }
];
