const ds2Data = [
    {
        area: "Things Betwixt & Majula",
        tasks: [
            { type: "checkpoint", description: "Arrive in Things Betwixt, create your character, and light the bonfire. Take your time to get familiar with the controls.", checked: false },
            { type: "item", description: "Find the Stone Ring behind the waterfall (dropped by the Ogre). This is highly useful for poise breaking enemies.", checked: false },
            { type: "checkpoint", description: "Light the Far Fire in Majula. This will be your main hub for the game.", checked: false },
            { type: "npc", description: "Exhaust Emerald Herald's dialogue to receive the Estus Flask and unlock leveling up.", checked: false },
            { type: "npc", description: "Speak to Saulden sitting by the monument to join the Way of Blue covenant (Trophy: Covenant of the Meek).", checked: false },
            { type: "npc", description: "Speak to Sweet Shalquoir (the cat), Blacksmith Lenigrast, and Maughlin the Armourer. Buy the Lenigrast Key later to unlock the blacksmith.", checked: false },
            { type: "covenant", description: "Join the Company of Champions via the Victor's Stone on the cliff path (Trophy: Covenant of the Fittest). Warning: this makes the game harder. You can abandon it immediately by talking to Shalquoir.", checked: false }
        ]
    },
    {
        area: "Forest of Fallen Giants",
        tasks: [
            { type: "checkpoint", description: "Light the Crestfallen's Retreat and Cardinal Tower bonfires.", checked: false },
            { type: "npc", description: "Meet Merchant Hag Melentia at the Cardinal Tower. Buy the Lenigrast's Key and Pharros' Lockstone. Exhaust her dialogue so she moves to Majula.", checked: false },
            { type: "npc", description: "Talk to Cale the Cartographer in the cave with the rolling boulder to receive the House Key for the mansion in Majula.", checked: false },
            { type: "boss", description: "Defeat The Last Giant. He is weak to lightning and striking damage. Attack his ankles.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/the_last_giant.jpg", checked: false },
            { type: "item", description: "Obtain the Soldier Key from The Last Giant. Use it to open the locked doors in the area.", checked: false },
            { type: "boss", description: "Defeat The Pursuer on the upper platform. You can use the ballistae for an easy kill, or parry his attacks.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/the_pursuer.jpg", checked: false },
            { type: "item", description: "Loot the Ring of Blades after defeating The Pursuer. It increases physical damage.", checked: false }
        ]
    },
    {
        area: "Heide's Tower of Flame & Cathedral of Blue",
        tasks: [
            { type: "checkpoint", description: "Light Heide's Ruin bonfire.", checked: false },
            { type: "action", description: "Pull the three levers in the area to raise the platforms in the Dragonrider boss room, preventing you from falling off easily.", checked: false },
            { type: "npc", description: "Speak to Licia of Lindeldt after defeating the Dragonrider. Exhaust dialogue to move her to Majula so she can open the path to Huntsman's Copse.", checked: false },
            { type: "boss", description: "Defeat Dragonrider. Alternatively, you can make him fall off the edge by counting 6 steps and dodging past him right as you enter the fog gate without raising the platforms.", checked: false },
            { type: "boss", description: "Defeat Old Dragonslayer in the Cathedral of Blue. He is essentially Ornstein from DS1 but uses dark magic.", checked: false },
            { type: "covenant", description: "Speak to Blue Sentinel Targray (requires a Token of Fidelity which can be found in Huntsman's Copse or by helping another player) to join the Blue Sentinels.", checked: false }
        ]
    },
    {
        area: "No-Man's Wharf",
        tasks: [
            { type: "npc", description: "Speak to Lucatiel of Mirrah at the bonfire. Her questline is crucial for the Platinum and requires her to survive 3 boss fights.", checked: false },
            { type: "item", description: "Ring the bell at the highest point to summon the ghost ship to the docks.", checked: false },
            { type: "npc", description: "Speak to Carhillion of the Fold on the docks (requires 8 Intelligence). He sells sorceries.", checked: false },
            { type: "npc", description: "Speak to Lonesome Gavlan in the house with the darkstalkers. You can sell items to him.", checked: false },
            { type: "boss", description: "Defeat the Flexile Sentry inside the ship. Be sure to summon Lucatiel to progress her questline.", checked: false }
        ]
    },
    {
        area: "The Lost Bastille & Belfry Luna",
        tasks: [
            { type: "checkpoint", description: "Arrive via the ship from No-Man's Wharf or the eagle nest from Forest of Fallen Giants.", checked: false },
            { type: "npc", description: "Find Lucatiel of Mirrah in the tower straight ahead from the Antiquated Key door. Exhaust her dialogue.", checked: false },
            { type: "npc", description: "Speak to Steady Hand McDuff. Light the torch in his room to get him to move off the chest, granting access to his services and an Estus Flask Shard.", checked: false },
            { type: "boss", description: "Defeat the Ruin Sentinels. Take out the first one on the upper ledge before dropping down to fight the other two.", checked: false },
            { type: "covenant", description: "Use a Pharros Lockstone near the Servants' Quarters bonfire to access Belfry Luna. Speak to the Bell Keeper to join the Bell Keepers covenant.", checked: false },
            { type: "boss", description: "Defeat the Belfry Gargoyles at the top of Belfry Luna.", checked: false }
        ]
    },
    {
        area: "Sinner's Rise",
        tasks: [
            { type: "checkpoint", description: "Light the Saltfort bonfire.", checked: false },
            { type: "item", description: "Unlock the side doors using the Bastille Key to light the oil troughs, illuminating the boss arena and preventing the boss from breaking your lock-on.", checked: false },
            { type: "boss", description: "Defeat the Lost Sinner. Summon Lucatiel to progress her quest. (Trophy: Sinner's Bonfire).", checked: false },
            { type: "item", description: "Loot the Fragrant Branch of Yore in the primal bonfire room.", checked: false }
        ]
    },
    {
        area: "Huntsman's Copse",
        tasks: [
            { type: "npc", description: "Pay Licia 2,000 souls in Majula to shift the path to Huntsman's Copse.", checked: false },
            { type: "npc", description: "Speak to Felkin the Outcast sitting in the chair at the start of the area (requires 8 INT and 8 FTH). He sells hexes.", checked: false },
            { type: "boss", description: "Defeat the Skeleton Lords. Kill the lords one by one and clear the spawned skeleton minions before killing the next lord to avoid being overwhelmed.", checked: false },
            { type: "boss", description: "Defeat the Executioner's Chariot. Hide in the alcoves while the chariot passes, kill the necromancers, then pull the lever to crash the chariot.", checked: false }
        ]
    },
    {
        area: "Harvest Valley & Earthen Peak",
        tasks: [
            { type: "npc", description: "Speak to Stone Trader Chloanne at the start of Harvest Valley. Exhaust her dialogue so she moves to Majula.", checked: false },
            { type: "covenant", description: "Join the Heirs of the Sun covenant at the Altar of Sunlight (past the dual sickle guys). You will need 30 Sunlight Medals for the Sunlight Spear miracle.", checked: false },
            { type: "boss", description: "Defeat the Covetous Demon.", checked: false },
            { type: "npc", description: "Speak to Laddersmith Gilligan on the ledge outside the Central Earthen Peak bonfire. Buy his ladders and exhaust his dialogue.", checked: false },
            { type: "action", description: "Burn the windmill shaft with a torch near the Central Earthen Peak bonfire. This drains the poison pool in the upcoming boss arena.", checked: false },
            { type: "boss", description: "Defeat Mytha, the Baneful Queen. Summon Jester Thomas for an incredibly easy fight.", checked: false }
        ]
    },
    {
        area: "Iron Keep & Belfry Sol",
        tasks: [
            { type: "npc", description: "Speak to Magerold of Lanafir near the entrance. He offers the Dragon Remnants covenant.", checked: false },
            { type: "boss", description: "Defeat the Smelter Demon. This is a tough fight, use high fire resistance. Summon Lucatiel to progress her quest.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/smelter_demon.jpg", checked: false },
            { type: "boss", description: "Defeat the Old Iron King. Watch out for the small lava pool hole in the back of the arena where many players accidentally fall. (Trophy: Iron Keep Bonfire).", checked: false }
        ]
    },
    {
        area: "Shaded Woods",
        tasks: [
            { type: "action", description: "Unpetrify Rosabeth of Melfia near Majula using a Fragrant Branch of Yore. Give her some clothes and pull the lever.", checked: false },
            { type: "npc", description: "Speak to the Head of Vengarl in the misty woods area to learn his gesture and buy items.", checked: false },
            { type: "npc", description: "Speak to Creighton the Wanderer at the Ruined Fork Road bonfire.", checked: false },
            { type: "npc", description: "Speak to Manscorpion Tark using the Ring of Whispers (bought from Shalquoir).", checked: false },
            { type: "boss", description: "Defeat Scorpioness Najka. Do not stand in front of her when she burrows; stand on the stone slabs.", checked: false }
        ]
    },
    {
        area: "Doors of Pharros & Brightstone Cove Tseldora",
        tasks: [
            { type: "boss", description: "Defeat the Royal Rat Authority (Optional, but gives a boss soul).", checked: false },
            { type: "covenant", description: "Speak to the Rat King after the Royal Rat Authority to join the Rat King Covenant.", checked: false },
            { type: "npc", description: "Pardon your sins with Cromwell the Pardoner after the Prowling Magus fight if needed.", checked: false },
            { type: "boss", description: "Defeat Prowling Magus and Congregation. A very easy mob boss.", checked: false },
            { type: "npc", description: "Complete Pate and Creighton's questline. Find them fighting in Tseldora. Assist one of them to get the Tseldora Den Key.", checked: false },
            { type: "boss", description: "Defeat The Duke's Dear Freja. You must attack her heads, as her body is armored. (Trophy: Brightstone Bonfire). Collect the Great Soul from the red glowing object after.", checked: false }
        ]
    },
    {
        area: "The Gutter & Black Gulch",
        tasks: [
            { type: "action", description: "Descend the pit in Majula using Gilligan's ladder (12,000 souls option is safest).", checked: false },
            { type: "boss", description: "Defeat the Royal Rat Vanguard in the Grave of Saints. Attack the rat with the mohawk.", checked: false },
            { type: "item", description: "Navigate The Gutter, lighting sconces to improve visibility. Watch your step.", checked: false },
            { type: "npc", description: "Find Lucatiel of Mirrah in Black Gulch by dropping down a hidden ledge near the first giant worm. Exhaust dialogue.", checked: false },
            { type: "boss", description: "Defeat The Rotten. Keep the poison statues broken before fighting him. Summon Lucatiel for her final required fight. (Trophy: Gulch Bonfire).", checked: false }
        ]
    },
    {
        area: "Drangleic Castle",
        tasks: [
            { type: "action", description: "Pass through the Shrine of Winter with the 4 Great Souls (Sinner, Freja, Old Iron King, The Rotten).", checked: false },
            { type: "npc", description: "Speak to Chancellor Wellager at the entrance. In NG++, he sells the final miracles/pyromancies needed for Platinum.", checked: false },
            { type: "boss", description: "Defeat the Twin Dragonriders.", checked: false },
            { type: "boss", description: "Defeat the Looking Glass Knight. Summon Benhart of Jugo to progress his questline.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/looking_glass_knight.jpg", checked: false }
        ]
    },
    {
        area: "Shrine of Amana & Undead Crypt",
        tasks: [
            { type: "boss", description: "Defeat the Demon of Song in Shrine of Amana. Use a bow or ranged attacks for the annoying mages in the area beforehand.", checked: false },
            { type: "npc", description: "Speak to Grave Warden Agdayne in the Undead Crypt. Do NOT bring a torch near him or his guards will aggro.", checked: false },
            { type: "boss", description: "Defeat Velstadt, the Royal Aegis. His dark magic hits very hard.", checked: false },
            { type: "item", description: "Obtain the King's Ring from Vendrick's chamber. (Trophy: King's Ring). Do NOT fight Vendrick yet, you deal no damage without Giant Souls.", checked: false }
        ]
    },
    {
        area: "Aldia's Keep & Dragon Shrine",
        tasks: [
            { type: "action", description: "Open the King's Door in the Ruined Fork Road using the King's Ring.", checked: false },
            { type: "npc", description: "Speak to Navlaan while HOLLOW to start his assassination quests. Do not release him by pulling the lever, or he will invade you constantly.", checked: false },
            { type: "boss", description: "Defeat the Guardian Dragon.", checked: false },
            { type: "npc", description: "Speak to the Ancient Dragon at the top of the Dragon Shrine to receive the Ashen Mist Heart. (Trophy: Ancient Dragon). You do not need to fight him.", checked: false }
        ]
    },
    {
        area: "Memories of the Ancients",
        tasks: [
            { type: "action", description: "Enter the Memory of Vammar, Memory of Orro, and Memory of Jeigh using the Ashen Mist Heart on the giant tree statues.", checked: false },
            { type: "npc", description: "Speak to Captain Drummond and Benhart of Jugo in the memories. Ensure Benhart survives the Giant Lord fight.", checked: false },
            { type: "boss", description: "Defeat the Giant Lord in the Memory of Jeigh. Collect the Giant's Kinship.", checked: false }
        ]
    },
    {
        area: "DLC Areas (Required for Scholar of the First Sin Platinum)",
        tasks: [
            { type: "boss", description: "Crown of the Sunken King: Defeat Elana, Squalid Queen, and Sinh, the Slumbering Dragon.", checked: false },
            { type: "item", description: "Collect all Spells, Hexes, Pyromancies, and Miracles added in the Sunken King DLC.", checked: false },
            { type: "boss", description: "Crown of the Old Iron King: Defeat the Fume Knight and Sir Alonne.", checked: false },
            { type: "item", description: "Collect all Spells, Hexes, Pyromancies, and Miracles added in the Old Iron King DLC.", checked: false },
            { type: "boss", description: "Crown of the Ivory King: Defeat Aava, the King's Pet, and the Burnt Ivory King.", checked: false },
            { type: "item", description: "Collect all Spells, Hexes, Pyromancies, and Miracles added in the Ivory King DLC.", checked: false }
        ]
    },
    {
        area: "Endgame & NG+ Preparation",
        tasks: [
            { type: "boss", description: "Optional: Defeat King Vendrick for his soul and armor. You need at least 4 (preferably 5) Giant Souls in your inventory to reduce his massive defense buff.", checked: false },
            { type: "boss", description: "Defeat Throne Watcher and Throne Defender in the Throne of Want.", checked: false },
            { type: "boss", description: "Defeat Nashandra.", imageUrl: "https://darksouls2.wiki.fextralife.com/file/Dark-Souls-2/nashandra.jpg", checked: false },
            { type: "boss", description: "Defeat Aldia, Scholar of the First Sin (if you defeated Vendrick before Nashandra).", checked: false },
            { type: "checkpoint", description: "Choose to link the fire or walk away. (Trophy: The Heir).", checked: false },
            { type: "action", description: "Clean up all remaining covenant ranks (e.g., Heirs of the Sun level 3 for Sunlight Spear, Pilgrims of Dark level 3 for Darklurker boss and hexes).", checked: false },
            { type: "action", description: "Proceed to NG+ and run through until you reach Chancellor Wellager in NG++ to buy the final 3 spells needed for the Platinum: Great Chaos Fireball, Bountiful Sunlight, and Wrath of the Gods.", checked: false }
        ]
    }
];
