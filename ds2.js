const ds2Data = [
    {
        area: "Things Betwixt & Majula",
        tasks: [
            { type: "checkpoint", description: "Arrive in Things Betwixt, create your character, and light the bonfire.", checked: false },
            { type: "item", description: "Find the Stone Ring behind the waterfall (dropped by the Ogre). Highly useful for poise breaking enemies throughout the game.", checked: false },
            { type: "checkpoint", description: "Light the Far Fire in Majula. This will be your main hub for the entire game.", checked: false },
            { type: "npc", description: "Exhaust Emerald Herald's dialogue to receive the Estus Flask and unlock leveling up.", checked: false },
            { type: "npc", description: "Speak to Saulden sitting by the monument. Exhaust his dialogue to join the Way of Blue covenant. (Trophy: Covenant of the Meek).", checked: false },
            { type: "npc", description: "Speak to Sweet Shalquoir (the cat), Blacksmith Lenigrast, and Maughlin the Armourer. Buy the Lenigrast Key from Melentia when you reach the Forest of Fallen Giants.", checked: false },
            { type: "covenant", description: "Join the Company of Champions via the Victor's Stone on the cliff path. (Trophy: Covenant of the Fittest). Warning: this makes the game significantly harder. You can abandon it immediately by talking to Shalquoir.", checked: false }
        ]
    },
    {
        area: "Forest of Fallen Giants",
        tasks: [
            { type: "checkpoint", description: "Light the Crestfallen's Retreat and Cardinal Tower bonfires.", checked: false },
            { type: "npc", description: "Meet Merchant Hag Melentia at the Cardinal Tower. Buy the Lenigrast's Key and a Pharros' Lockstone. Exhaust ALL her dialogue so she relocates to Majula.", missable: true, checked: false },
            { type: "npc", description: "Talk to Cale the Cartographer in the cave with the rolling boulder. He gives you the House Key for the mansion in Majula — opens the path to The Gutter later.", missable: true, checked: false },
            { type: "boss", description: "Defeat The Last Giant. Weak to lightning and striking damage. Attack his ankles.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/the_last_giant.jpg", checked: false },
            { type: "item", description: "Obtain the Soldier Key from The Last Giant. Use it to unlock doors in the area.", checked: false },
            { type: "boss", description: "Defeat The Pursuer on the upper platform. Use the ballistae in the arena for an easy kill, or parry his attacks.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/the_pursuer.jpg", checked: false },
            { type: "item", description: "Loot the Ring of Blades after The Pursuer. It increases physical damage.", checked: false }
        ]
    },
    {
        area: "Heide's Tower of Flame & Cathedral of Blue",
        tasks: [
            { type: "checkpoint", description: "Light Heide's Ruin bonfire.", checked: false },
            { type: "action", description: "Optionally pull the three levers to raise the platforms in the Dragonrider boss room — prevents falling off the edge easily.", checked: false },
            { type: "npc", description: "Defeat the Dragonrider, then exhaust Licia of Lindeldt's dialogue so she moves to Majula and opens the windmill path to Huntsman's Copse.", missable: true, checked: false },
            { type: "boss", description: "Defeat Dragonrider. Alternatively, lure him off the edge (6 steps forward then dodge) without raising the platforms.", checked: false },
            { type: "boss", description: "Defeat Old Dragonslayer in the Cathedral of Blue. Essentially Ornstein from DS1 with dark magic.", checked: false },
            { type: "covenant", description: "Speak to Blue Sentinel Targray to join the Blue Sentinels (requires a Token of Fidelity — found in Huntsman's Copse or earned by helping players online).", checked: false }
        ]
    },
    {
        area: "No-Man's Wharf",
        tasks: [
            { type: "npc", description: "⚠️ Speak to Lucatiel of Mirrah at the bonfire. Her questline is CRITICAL for Platinum — you must summon her and keep her alive in 3 boss fights across the game. Start here.", missable: true, checked: false },
            { type: "item", description: "Ring the bell at the highest point of the Wharf to summon the ghost ship to the docks.", checked: false },
            { type: "npc", description: "Speak to Carhillion of the Fold on the docks (requires 8 Intelligence). He sells sorceries.", checked: false },
            { type: "npc", description: "Speak to Lonesome Gavlan in the house with the darkstalkers. He is one of the few vendors you can sell items to.", checked: false },
            { type: "boss", description: "Defeat the Flexile Sentry inside the ghost ship. Summon Lucatiel here — this counts as her first required boss survival.", checked: false }
        ]
    },
    {
        area: "The Lost Bastille & Belfry Luna",
        tasks: [
            { type: "checkpoint", description: "Arrive via the ship from No-Man's Wharf or the eagle nest from the Forest of Fallen Giants.", checked: false },
            { type: "npc", description: "Find Lucatiel of Mirrah in the tower past the Antiquated Key door. Exhaust ALL her dialogue.", missable: true, checked: false },
            { type: "npc", description: "Speak to Steady Hand McDuff. Light the torch in his room to get him off the chest — grants access to his reinforcement services and an Estus Flask Shard.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Ruin Sentinels. Take out the first one on the upper ledge before dropping down to fight the other two.", checked: false },
            { type: "covenant", description: "Use a Pharros Lockstone near the Servants' Quarters bonfire to access Belfry Luna. Speak to the Bell Keeper to join the Bell Keepers covenant.", checked: false },
            { type: "boss", description: "Defeat the Belfry Gargoyles at the top of Belfry Luna.", checked: false }
        ]
    },
    {
        area: "Sinner's Rise",
        tasks: [
            { type: "checkpoint", description: "Light the Saltfort bonfire.", checked: false },
            { type: "item", description: "Unlock the side doors using the Bastille Key to ignite the oil troughs — illuminates the boss arena and stops the Lost Sinner from breaking your lock-on.", checked: false },
            { type: "boss", description: "Defeat the Lost Sinner. Summon Lucatiel here — this is her second required boss survival. (Trophy: Sinner's Bonfire).", checked: false },
            { type: "item", description: "Loot the Fragrant Branch of Yore in the primal bonfire room — needed to unpetrify Rosabeth in Shaded Woods.", checked: false }
        ]
    },
    {
        area: "Huntsman's Copse",
        tasks: [
            { type: "npc", description: "Pay Licia 2,000 souls in Majula to shift the windmill and open the path to Huntsman's Copse.", checked: false },
            { type: "npc", description: "Speak to Felkin the Outcast at the start of the area (requires 8 INT and 8 FTH). He sells hexes.", checked: false },
            { type: "boss", description: "Defeat the Skeleton Lords. Kill them one by one and clear the skeleton minions before killing the next to avoid being overwhelmed.", checked: false },
            { type: "boss", description: "Defeat the Executioner's Chariot. Hide in the alcoves while the chariot passes, kill the necromancers, then pull the lever to crash it.", checked: false }
        ]
    },
    {
        area: "Harvest Valley & Earthen Peak",
        tasks: [
            { type: "npc", description: "Speak to Stone Trader Chloanne at the start of Harvest Valley. Exhaust her dialogue so she relocates to Majula and eventually sells infinite Titanite.", missable: true, checked: false },
            { type: "covenant", description: "Join the Heirs of the Sun covenant at the Altar of Sunlight. You'll need 30 Sunlight Medals for Rank 3 (Sunlight Spear miracle) — farm this throughout the game.", checked: false },
            { type: "boss", description: "Defeat the Covetous Demon.", checked: false },
            { type: "npc", description: "Speak to Laddersmith Gilligan on the ledge near the Central Earthen Peak bonfire. Buy his ladders and exhaust his dialogue so he relocates to Majula.", missable: true, checked: false },
            { type: "action", description: "Burn the windmill shaft with a torch near the Central Earthen Peak bonfire. This drains the poison pool in Mytha's arena.", checked: false },
            { type: "boss", description: "Defeat Mytha, the Baneful Queen. Summon Jester Thomas for an incredibly easy fight.", checked: false }
        ]
    },
    {
        area: "Iron Keep & Belfry Sol",
        tasks: [
            { type: "npc", description: "Speak to Magerold of Lanafir near the entrance. He offers the Dragon Remnants covenant items.", checked: false },
            { type: "boss", description: "Defeat the Smelter Demon. High fire resistance recommended. Summon Lucatiel here — this is her THIRD and final required boss survival.", missable: true, imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/smelter_demon.jpg", checked: false },
            { type: "boss", description: "Defeat the Old Iron King. Watch out for the lava pool hole in the back of the arena where many players accidentally fall. (Trophy: Iron Keep Bonfire).", checked: false }
        ]
    },
    {
        area: "Shaded Woods",
        tasks: [
            { type: "action", description: "Unpetrify Rosabeth of Melfia near Majula using the Fragrant Branch of Yore. Give her some clothes and pull the lever to open the Shaded Woods gate.", checked: false },
            { type: "npc", description: "Speak to the Head of Vengarl in the misty woods area to learn his gesture and buy items.", checked: false },
            { type: "npc", description: "Speak to Creighton the Wanderer at the Ruined Fork Road bonfire.", checked: false },
            { type: "npc", description: "Speak to Manscorpion Tark using the Ring of Whispers (bought from Shalquoir).", checked: false },
            { type: "boss", description: "Defeat Scorpioness Najka. Don't stand in front of her when she burrows — stand on the stone slabs.", checked: false }
        ]
    },
    {
        area: "Doors of Pharros & Brightstone Cove Tseldora",
        tasks: [
            { type: "boss", description: "Defeat the Royal Rat Authority (optional but gives a boss soul for spells).", checked: false },
            { type: "covenant", description: "Speak to the Rat King after the Royal Rat Authority to join the Rat King Covenant.", checked: false },
            { type: "npc", description: "Pardon your sins with Cromwell the Pardoner if needed.", checked: false },
            { type: "boss", description: "Defeat Prowling Magus and Congregation. An easy mob boss.", checked: false },
            { type: "npc", description: "Complete Pate and Creighton's questline in Tseldora — find them fighting each other. Assist one to receive the Tseldora Den Key.", missable: true, checked: false },
            { type: "boss", description: "Defeat The Duke's Dear Freja. Attack her heads — her body is armored. (Trophy: Brightstone Bonfire). Collect the Great Soul after.", checked: false }
        ]
    },
    {
        area: "The Gutter & Black Gulch",
        tasks: [
            { type: "action", description: "Descend the pit in Majula using Gilligan's ladder (12,000 souls option is safest).", checked: false },
            { type: "boss", description: "Defeat the Royal Rat Vanguard in the Grave of Saints. Attack the rat with the mohawk.", checked: false },
            { type: "item", description: "Navigate The Gutter, lighting sconces to improve visibility. Watch your step on the narrow platforms.", checked: false },
            { type: "npc", description: "Find Lucatiel of Mirrah in Black Gulch — drop down a hidden ledge near the first giant worm. Exhaust ALL her dialogue to complete her questline and receive her armor.", missable: true, checked: false },
            { type: "boss", description: "Defeat The Rotten. Destroy the poison statues before fighting. Summon Lucatiel — this is her final boss. Talk to her afterward in Majula for her armor. (Trophy: Gulch Bonfire).", missable: true, checked: false }
        ]
    },
    {
        area: "Drangleic Castle",
        tasks: [
            { type: "action", description: "Pass through the Shrine of Winter — requires owning the 4 Great Souls (Sinner, Freja, Old Iron King, The Rotten).", checked: false },
            { type: "npc", description: "Speak to Chancellor Wellager at the entrance. In NG++, he sells the final 3 spells needed for Platinum.", checked: false },
            { type: "boss", description: "Defeat the Twin Dragonriders.", checked: false },
            { type: "boss", description: "Defeat the Looking Glass Knight. Summon Benhart of Jugo to progress his questline — he must survive.", missable: true, imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/looking_glass_knight.jpg", checked: false }
        ]
    },
    {
        area: "Shrine of Amana & Undead Crypt",
        tasks: [
            { type: "boss", description: "Defeat the Demon of Song in Shrine of Amana. Use a bow or ranged attacks to clear the spellcasting enemies in the water first.", checked: false },
            { type: "npc", description: "Speak to Grave Warden Agdayne in the Undead Crypt. Do NOT bring a torch near him or his guards will permanently aggro.", missable: true, checked: false },
            { type: "boss", description: "Defeat Velstadt, the Royal Aegis. His dark magic hits very hard — high dark resistance is helpful.", checked: false },
            { type: "item", description: "Obtain the King's Ring from Vendrick's chamber. (Trophy: King's Ring). Do NOT fight Vendrick here — you need 4-5 Giant Souls first to reduce his 32x defense multiplier.", checked: false }
        ]
    },
    {
        area: "Aldia's Keep & Dragon Shrine",
        tasks: [
            { type: "action", description: "Open the King's Door in the Ruined Fork Road using the King's Ring.", checked: false },
            { type: "npc", description: "Speak to Navlaan while HOLLOW to start his assassination quests. Do NOT pull the lever — releasing him causes him to invade you constantly.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Guardian Dragon.", checked: false },
            { type: "npc", description: "Speak to the Ancient Dragon at the top of the Dragon Shrine to receive the Ashen Mist Heart. (Trophy: Ancient Dragon). You do not need to fight him.", checked: false }
        ]
    },
    {
        area: "Memories of the Ancients",
        tasks: [
            { type: "action", description: "Enter the Memory of Vammar, Memory of Orro, and Memory of Jeigh using the Ashen Mist Heart on the giant tree statues in Forest of Fallen Giants.", checked: false },
            { type: "npc", description: "Speak to Captain Drummond and Benhart of Jugo in the memories. Ensure Benhart survives the Giant Lord fight to complete his quest.", missable: true, checked: false },
            { type: "boss", description: "Defeat the Giant Lord in the Memory of Jeigh. Collect the Giant's Kinship — required to access the final boss.", checked: false }
        ]
    },
    {
        area: "DLC: Crown of the Sunken King, Old Iron King & Ivory King",
        tasks: [
            { type: "boss", description: "Crown of the Sunken King: Defeat Elana, Squalid Queen. She summons Velstadt as backup — prioritize her.", checked: false },
            { type: "boss", description: "Crown of the Sunken King: Defeat Sinh, the Slumbering Dragon.", checked: false },
            { type: "item", description: "Crown of the Sunken King: Collect all Spells, Hexes, Pyromancies, and Miracles added in this DLC.", checked: false },
            { type: "boss", description: "Crown of the Old Iron King: Defeat the Fume Knight. Widely considered the hardest boss in the game. Patience and stamina management are key.", checked: false },
            { type: "boss", description: "Crown of the Old Iron King: Defeat Sir Alonne. Fight him alone (no summons) for the best ending of this DLC.", checked: false },
            { type: "item", description: "Crown of the Old Iron King: Collect all Spells, Hexes, Pyromancies, and Miracles added in this DLC.", checked: false },
            { type: "boss", description: "Crown of the Ivory King: Defeat Aava, the King's Pet. Use a Reindeer Greatshield or high stability shield.", checked: false },
            { type: "boss", description: "Crown of the Ivory King: Defeat the Burnt Ivory King.", checked: false },
            { type: "item", description: "Crown of the Ivory King: Collect all Spells, Hexes, Pyromancies, and Miracles added in this DLC.", checked: false }
        ]
    },
    {
        area: "Endgame & NG+ Preparation",
        tasks: [
            { type: "boss", description: "Optional: Defeat King Vendrick for his soul and armor. Needs at least 4 (preferably 5) Giant Souls in your inventory to reduce his 32x defense buff.", checked: false },
            { type: "boss", description: "Defeat Throne Watcher and Throne Defender in the Throne of Want.", checked: false },
            { type: "boss", description: "Defeat Nashandra.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/nashandra.jpg", checked: false },
            { type: "boss", description: "Defeat Aldia, Scholar of the First Sin (only appears if you defeated Vendrick before Nashandra and spoke to Aldia's flames 3 times across the game).", missable: true, checked: false },
            { type: "checkpoint", description: "Choose to link the fire or walk away. (Trophy: The Heir).", checked: false },
            { type: "action", description: "Clean up covenant ranks: Heirs of the Sun rank 3 (Sunlight Spear), Pilgrims of Dark rank 3 (Darklurker boss + hexes). Farm Sunlight Medals co-op or in NG+.", ng_plus: "NG+", checked: false },
            { type: "action", description: "Run NG+ to reach Chancellor Wellager in NG++ — he sells the final 3 spells needed for Platinum: Great Chaos Fireball, Bountiful Sunlight, and Wrath of the Gods.", ng_plus: "NG++", checked: false }
        ]
    }
];
