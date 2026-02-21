// DATA CONSTANTS - REVISED EDITION
// Source: Vampire: The Masquerade Revised Edition Core Rulebook

export const APP_VERSION = "Revised v1.0.5";

export const CLANS = [
    "Assamite", "Brujah", "Followers of Set", "Gangrel", "Giovanni", 
    "Lasombra", "Malkavian", "Nosferatu", "Ravnos", "Toreador", 
    "Tremere", "Tzimisce", "Ventrue", "Caitiff"
];

// Revised Archetypes (Core Book p. 104)
export const ARCHETYPES = [
    "Architect", "Autocrat", "Bon Vivant", "Bravo", "Caregiver", 
    "Celebrant", "Child", "Competitor", "Conformist", "Conniver", 
    "Curmudgeon", "Deviant", "Director", "Fanatic", "Gallant", 
    "Judge", "Loner", "Martyr", "Masochist", "Monster", 
    "Pedagogue", "Penitent", "Perfectionist", "Rebel", "Rogue", 
    "Survivor", "Thrill-Seeker", "Traditionalist", "Trickster", 
    "Visionary"
];

export const ARCHETYPE_RULES = {
    "Architect": "Regain Willpower when you establish something of importance or lasting value.",
    "Autocrat": "Regain Willpower when you achieve control over a group or organization.",
    "Bon Vivant": "Regain Willpower when you truly enjoy yourself.",
    "Bravo": "Regain Willpower when you intimidate or physically force someone to do your bidding.",
    "Caregiver": "Regain Willpower when you successfully protect or nurture someone.",
    "Celebrant": "Regain Willpower when your cause succeeds or you convert another.",
    "Child": "Regain Willpower when someone helps you or nurtures you.",
    "Competitor": "Regain Willpower when you win a contest.",
    "Conformist": "Regain Willpower when your group succeeds due to your support.",
    "Conniver": "Regain Willpower when you trick someone into doing something for you.",
    "Curmudgeon": "Regain Willpower when someone fails or bad news is confirmed.",
    "Deviant": "Regain Willpower when you flaunt social norms without retribution.",
    "Director": "Regain Willpower when you lead a group to success.",
    "Fanatic": "Regain Willpower when you accomplish a task for your cause.",
    "Gallant": "Regain Willpower when you impress another person.",
    "Judge": "Regain Willpower when you correctly solve a problem or pass judgment.",
    "Loner": "Regain Willpower when you accomplish something significant by yourself.",
    "Martyr": "Regain Willpower when you sacrifice for your ideals or another.",
    "Masochist": "Regain Willpower when you suffer pain for a purpose.",
    "Monster": "Regain Willpower when you indulge in a specific atrocity.",
    "Pedagogue": "Regain Willpower when someone benefits from your instruction.",
    "Penitent": "Regain Willpower when you feel you have achieved absolution.",
    "Perfectionist": "Regain Willpower when you accomplish a goal without flaw.",
    "Rebel": "Regain Willpower when you actively oppose the status quo.",
    "Rogue": "Regain Willpower when you profit at someone else's expense.",
    "Survivor": "Regain Willpower when you survive a threatening situation.",
    "Thrill-Seeker": "Regain Willpower when you succeed at a dangerous task.",
    "Traditionalist": "Regain Willpower when traditional methods prove superior.",
    "Trickster": "Regain Willpower when you lift spirits or trick someone.",
    "Visionary": "Regain Willpower when you convince others to follow your dream."
};

export const PATHS = [
    "Humanity", "Path of Blood", "Path of Caine", "Path of Cathari", 
    "Path of Death and the Soul", "Path of Ecstasy", "Path of Entelechy", 
    "Path of Feral Heart", "Path of Harmony", "Path of Honorable Accord", 
    "Path of Lilith", "Path of Metamorphosis", "Path of Night", 
    "Path of Paradox", "Path of Power and the Inner Voice", 
    "Path of the Scorched Heart", "Path of Self-Focus", "Path of Typhon"
];

export const ATTRIBUTES = {
    Physical: ["Strength", "Dexterity", "Stamina"],
    Social: ["Charisma", "Manipulation", "Appearance"],
    Mental: ["Perception", "Intelligence", "Wits"]
};

// REVISED EDITION ABILITIES (p. 119)
export const ABILITIES = {
    Talents: ["Alertness", "Athletics", "Brawl", "Dodge", "Empathy", "Expression", "Intimidation", "Leadership", "Streetwise", "Subterfuge"],
    Skills: ["Animal Ken", "Crafts", "Drive", "Etiquette", "Firearms", "Melee", "Performance", "Security", "Stealth", "Survival"],
    Knowledges: ["Academics", "Computer", "Finance", "Investigation", "Law", "Linguistics", "Medicine", "Occult", "Politics", "Science"]
};

export const BROAD_ABILITIES = ["Crafts", "Performance", "Science", "Academics"];

export const DISCIPLINES = [
    "Animalism", "Auspex", "Celerity", "Chimerstry", "Dementation", 
    "Dominate", "Fortitude", "Necromancy", "Obfuscate", "Obtenebration", 
    "Potence", "Presence", "Protean", "Quietus", "Serpentis", 
    "Thaumaturgy", "Vicissitude"
];

export const CLAN_DISCIPLINES = {
    "Assamite": ["Celerity", "Obfuscate", "Quietus"],
    "Brujah": ["Celerity", "Potence", "Presence"],
    "Followers of Set": ["Obfuscate", "Presence", "Serpentis"],
    "Gangrel": ["Animalism", "Fortitude", "Protean"],
    "Giovanni": ["Dominate", "Necromancy", "Potence"],
    "Lasombra": ["Dominate", "Obtenebration", "Potence"],
    "Malkavian": ["Auspex", "Dementation", "Obfuscate"],
    "Nosferatu": ["Animalism", "Obfuscate", "Potence"],
    "Ravnos": ["Animalism", "Chimerstry", "Fortitude"],
    "Toreador": ["Auspex", "Celerity", "Presence"],
    "Tremere": ["Auspex", "Dominate", "Thaumaturgy"],
    "Tzimisce": ["Animalism", "Auspex", "Vicissitude"],
    "Ventrue": ["Dominate", "Fortitude", "Presence"],
    "Caitiff": [] 
};

export const BACKGROUNDS = [
    "Allies", "Contacts", "Fame", "Generation", "Herd", 
    "Influence", "Mentor", "Resources", "Retainers", "Status"
];

export const VIRTUES = ["Conscience", "Self-Control", "Courage"];

export const VIT = [
    "Age", "Apparent Age", "Date of Birth", "R.I.P.", 
    "Hair", "Eyes", "Race", "Nationality", 
    "Height", "Weight", "Sex"
];

export const DERANGEMENTS = [
    "Multiple Personalities", "Schizophrenia", "Paranoia", 
    "Megalomania", "Bulimia", "Hysteria", "Manic-Depression", 
    "Fugue", "Sanguinary Animism", "Obsessive-Compulsive"
];

export const STEPS_CONFIG = [
    { id: 1, label: "Concept", icon: "fa-user", msg: "Define Name & Clan" },
    { id: 2, label: "Attributes", icon: "fa-child", msg: "Assign Attributes (7/5/3)" },
    { id: 3, label: "Abilities", icon: "fa-fist-raised", msg: "Assign Abilities (13/9/5)" },
    { id: 4, label: "Advantages", icon: "fa-star", msg: "Discs (3), Backs (5), Virt (7)" },
    { id: 5, label: "Supernatural", icon: "fa-magic", msg: "Merits, Flaws, Rituals, Bonds" },
    { id: 6, label: "Gear & Assets", icon: "fa-shield-alt", msg: "Inventory, Combat, Havens" },
    { id: 7, label: "Biography", icon: "fa-address-card", msg: "History, Appearance, Goals" },
    { id: 8, label: "Finalize", icon: "fa-check-circle", msg: "Review & Confirm" }
];

export const GEN_LIMITS = {
    15: { m: 10, pt: 1 },
    14: { m: 10, pt: 1 },
    13: { m: 10, pt: 1 },
    12: { m: 11, pt: 1 },
    11: { m: 12, pt: 1 },
    10: { m: 13, pt: 1 },
    9: { m: 14, pt: 2 },
    8: { m: 15, pt: 3 },
    7: { m: 20, pt: 4 },
    6: { m: 30, pt: 6 },
    5: { m: 40, pt: 8 },
    4: { m: 50, pt: 10 }
};

export const HEALTH_STATES = [
    { l: "Bruised", p: 0 },
    { l: "Hurt", p: -1 },
    { l: "Injured", p: -1 },
    { l: "Wounded", p: -2 },
    { l: "Mauled", p: -2 },
    { l: "Crippled", p: -5 },
    { l: "Incapacitated", p: 0 }
];

export const SPECIALTY_EXAMPLES = {
    "Strength": ["Iron Grip", "Powerful Arms", "Reserves of Strength", "Fists Like Anvils"],
    "Dexterity": ["Lithe", "Swift", "Feline Grace", "Lightning Reflexes"],
    "Stamina": ["Tireless", "Determined", "Tough as Nails", "Resolute"],
    "Charisma": ["Smooth Talker", "Genteel", "Urbane", "Witty", "Eloquent Speaker", "Graceful"],
    "Manipulation": ["Persuasive", "Damn I'm Smooth", "Seductive", "Well-Reasoned"],
    "Appearance": ["Boldness", "Dignity", "Pleasant Expression", "Sex Appeal", "Intimidating"], 
    "Perception": ["Attentive", "Insightful", "Careful", "Discerning", "Experienced"],
    "Intelligence": ["Book Knowledge", "Creative", "Analytical", "Problem Solver", "Subject Authority"],
    "Wits": ["Getting the Jump on Others", "Snappy Patter", "Changes in Strategy", "Ambushes"],
    "Alertness": ["Noises", "Eavesdropping", "Ambushes", "Hidden Weapons", "Crowds", "Forests", "Animals"],
    "Athletics": ["Swimming", "Rock Climbing", "Acrobatics", "Dancing", "Endurance Running", "Sports"],
    "Brawl": ["Boxing", "Wrestling", "Dirty Fighting", "Kicks", "Karate", "Judo", "Muay Thai", "Throws", "Submission Holds"],
    "Dodge": ["Cover", "Sidestep", "Footwork", "Leap"],
    "Empathy": ["Emotions", "Personalities", "Motives", "Gaining Trust"],
    "Expression": ["Acting", "Poetry", "Fiction", "Impromptu", "Conversation"],
    "Intimidation": ["Veiled Threats", "Pulling Rank", "Physical Coercion", "Blackmail"],
    "Leadership": ["Oratory", "Compelling", "Friendly", "Open", "Noble", "Military", "Commands"],
    "Streetwise": ["Fencing", "Illegal Drugs", "Illegal Weapons", "Rumors", "Gangs", "Pickpocketing", "Local Slang"],
    "Subterfuge": ["Seduction", "Impeccable Lies", "Feigning Mortality"],
    "Animal Ken": ["Dogs", "Attack Training", "Big Cats", "Horses", "Farm Animals", "Falconry"],
    "Crafts": ["Pottery", "Sewing", "Home Repair", "Carpentry", "Appraisal", "Carburetors"],
    "Drive": ["Off-road", "Wheelies", "Curves", "Stick Shift", "Sudden Stops", "Heavy Traffic"],
    "Etiquette": ["Formal Dinners", "Business", "Street Culture", "Kindred Society"],
    "Firearms": ["Fast-Draw", "Gunsmithing", "Pistols", "Sniping", "Revolvers", "Shotguns"],
    "Melee": ["Knives", "Swords", "Improvised Clubs", "Stakes", "Disarms", "Axes"],
    "Performance": ["Dancing", "Singing", "Rock and Roll", "Acting", "Guitar Solos", "Drunken Karaoke"],
    "Security": ["Safe-cracking", "Hot-wiring", "Electrical Alarms", "Pressure Plates", "Deadbolts", "Cars"],
    "Stealth": ["Hiding", "Silent Movement", "Shadowing", "Crowds"],
    "Survival": ["Tracking", "Woodlands", "Jungle", "Trapping", "Hunting"],
    "Academics": ["Poststructuralism", "Impressionist Painting", "Imperial Rome", "American Realism"],
    "Computer": ["Computer Languages", "Internet", "Codebreaking", "Viruses", "Data Retrieval"],
    "Finance": ["Stock Market", "Laundering", "Appraisal", "Foreign Currencies", "Accounting", "Fencing", "Corporations"],
    "Investigation": ["Forensics", "Shadowing", "Search", "Discolorations"],
    "Law": ["Criminal", "Suits", "Courts", "Contracts", "Police Procedure"],
    "Linguistics": ["Romance Languages", "Kanji", "Idioms", "Hieroglyphics", "Written Expression", "Ciphers"],
    "Medicine": ["Organ Transplants", "Emergency Care", "Poison Treatments", "Pathology", "Pharmaceuticals"],
    "Occult": ["Kindred Lore", "Rituals", "Infernalism", "Witches"],
    "Politics": ["City", "State", "Federal", "Bribery", "Dogma", "Radical"],
    "Science": ["Chemistry", "Biology", "Geology", "Physics", "Astronomy"]
};

// --- REVISED MERITS (Core Book p. 296+) ---
export const V20_MERITS_LIST = [
    { n: "Acute Sense", v: 1 },
    { n: "Ambidextrous", v: 1 },
    { n: "Blush of Health", v: 2 },
    { n: "Calm Heart", v: 3 },
    { n: "Catlike Balance", v: 1 },
    { n: "Code of Honor", v: 2 },
    { n: "Common Sense", v: 1 },
    { n: "Concentration", v: 1 },
    { n: "Daredevil", v: 3 },
    { n: "Debt of Gratitude", v: 1, variable: true, range: "1-3" },
    { n: "Eat Food", v: 1 },
    { n: "Efficient Digestion", v: 3 },
    { n: "Eidetic Memory", v: 2 },
    { n: "Enchanting Voice", v: 2 },
    { n: "Huge Size", v: 4 },
    { n: "Iron Will", v: 3 },
    { n: "Light Sleeper", v: 2 },
    { n: "Lucky", v: 3 },
    { n: "Magic Resistance", v: 2 },
    { n: "Medium", v: 2 },
    { n: "Natural Leader", v: 1 },
    { n: "Natural Linguist", v: 2 },
    { n: "Nine Lives", v: 6 },
    { n: "Oracular Ability", v: 3 },
    { n: "Prestigious Sire", v: 1 },
    { n: "Spirit Mentor", v: 3 },
    { n: "Time Sense", v: 1 },
    { n: "True Faith", v: 7 },
    { n: "True Love", v: 4 },
    { n: "Unbondable", v: 3 }
].sort((a, b) => a.n.localeCompare(b.n));

// --- REVISED FLAWS (Core Book p. 296+) ---
export const V20_FLAWS_LIST = [
    { n: "14th Generation", v: 2 },
    { n: "Addiction", v: 3 },
    { n: "Amnesia", v: 2 },
    { n: "Bad Sight", v: 1, variable: true, range: "1 or 3" },
    { n: "Blind", v: 6 },
    { n: "Can't Cross Running Water", v: 3 },
    { n: "Cast No Reflection", v: 1 },
    { n: "Child", v: 3 },
    { n: "Conspicuous Consumption", v: 4 },
    { n: "Cursed", v: 1, variable: true, range: "1-5" },
    { n: "Dark Fate", v: 5 },
    { n: "Dark Secret", v: 1 },
    { n: "Deaf", v: 4 },
    { n: "Deep Sleeper", v: 1 },
    { n: "Deformity", v: 3 },
    { n: "Disease Carrier", v: 4 },
    { n: "Disfigured", v: 2 },
    { n: "Eerie Presence", v: 2 },
    { n: "Enemy", v: 1, variable: true, range: "1-5" },
    { n: "Flesh of the Corpse", v: 5 },
    { n: "Grip of the Damned", v: 4 },
    { n: "Hard of Hearing", v: 1 },
    { n: "Haunted", v: 3 },
    { n: "Hunted", v: 4 },
    { n: "Infectious Bite", v: 2 },
    { n: "Infamous Sire", v: 1 },
    { n: "Lame", v: 3 },
    { n: "Light-Sensitive", v: 5 },
    { n: "Lunacy", v: 2 },
    { n: "Mistaken Identity", v: 1 },
    { n: "Monstrous", v: 3 },
    { n: "Mute", v: 4 },
    { n: "Nightmares", v: 1 },
    { n: "One Eye", v: 2 },
    { n: "Permanent Wound", v: 3 },
    { n: "Phobia", v: 2 },
    { n: "Prey Exclusion", v: 1 },
    { n: "Probationary Sect Member", v: 4 },
    { n: "Repelled by Crosses", v: 3 },
    { n: "Repulsed by Garlic", v: 1 },
    { n: "Short", v: 1 },
    { n: "Short Fuse", v: 2 },
    { n: "Shy", v: 1 },
    { n: "Sire's Resentment", v: 1 },
    { n: "Smell of the Grave", v: 1 },
    { n: "Soft-Hearted", v: 1 },
    { n: "Speech Impediment", v: 1 },
    { n: "Territorial", v: 2 },
    { n: "Thin Blood", v: 4 },
    { n: "Touch of Frost", v: 1 },
    { n: "Vengeful", v: 2 },
    { n: "Weak-Willed", v: 3 }
].sort((a, b) => a.n.localeCompare(b.n));

// --- REVISED EDITION VEHICLES ---
export const V20_VEHICLES_LIST = [
    { name: "6-Wheel Truck", safe: "60", max: "90", man: "3" },
    { name: "Small Motorcycle", safe: "75", max: "130", man: "8" },
    { name: "Medium Motorcycle", safe: "85", max: "130-170", man: "7" },
    { name: "Large Motorcycle", safe: "90", max: "170", man: "5" },
    { name: "Tank (modern)", safe: "60", max: "100", man: "4" },
    { name: "Tank (WWII)", safe: "30", max: "40", man: "3" },
    { name: "Bus", safe: "60", max: "100", man: "3" },
    { name: "18-Wheeler", safe: "70", max: "110", man: "4" },
    { name: "Sedan", safe: "70", max: "120", man: "5" },
    { name: "Minivan", safe: "70", max: "120", man: "6" },
    { name: "Compact", safe: "70", max: "130", man: "6" },
    { name: "Sporty Compact", safe: "100", max: "140", man: "7" },
    { name: "Sport Coupe", safe: "110", max: "150", man: "8" },
    { name: "Sports Car", safe: "110", max: "160", man: "8" },
    { name: "Exotic Car", safe: "130", max: "190+", man: "9" },
    { name: "Luxury Sedan", safe: "85", max: "155", man: "7" },
    { name: "Midsize", safe: "75", max: "125", man: "6" },
    { name: "SUV", safe: "70", max: "115", man: "6" },
    { name: "Formula One Racer", safe: "140", max: "240", man: "10" }
];

// --- REVISED EDITION MELEE WEAPONS ---
export const V20_WEAPONS_LIST = [
    { name: "Sap/Blackjack", diff: 4, dmg: "Str+1(B)", range: "-", rate: "-", clip: "-", conc: "P" },
    { name: "Club", diff: 4, dmg: "Str+2(B)", range: "-", rate: "-", clip: "-", conc: "T" },
    { name: "Knife", diff: 4, dmg: "Str+1(L)", range: "-", rate: "-", clip: "-", conc: "J" },
    { name: "Sword", diff: 6, dmg: "Str+2(L)", range: "-", rate: "-", clip: "-", conc: "T" },
    { name: "Axe", diff: 7, dmg: "Str+3(L)", range: "-", rate: "-", clip: "-", conc: "N" },
    { name: "Stake", diff: 6, dmg: "Str+1(L)", range: "-", rate: "-", clip: "-", conc: "T" },
    // Ranged Weapons
    { name: "Revolver, Lt. (.38)", diff: 6, dmg: "4(L)", range: "12", rate: "3", clip: "6", conc: "P" },
    { name: "Revolver, Hvy. (.44)", diff: 6, dmg: "6(L)", range: "35", rate: "2", clip: "6", conc: "J" },
    { name: "Pistol, Lt. (9mm)", diff: 6, dmg: "4(L)", range: "20", rate: "4", clip: "17+1", conc: "P" },
    { name: "Pistol, Hvy. (.45 ACP)", diff: 6, dmg: "5(L)", range: "30", rate: "3", clip: "7+1", conc: "J" },
    { name: "Rifle (30.06)", diff: 8, dmg: "8(L)", range: "200", rate: "1", clip: "5+1", conc: "N" },
    { name: "SMG, Small (9mm)", diff: 6, dmg: "4(L)", range: "25", rate: "3", clip: "30+1", conc: "J" },
    { name: "SMG, Large (9mm)", diff: 6, dmg: "4(L)", range: "50", rate: "3", clip: "32+1", conc: "T" },
    { name: "Assault Rifle (5.56mm)", diff: 7, dmg: "7(L)", range: "150", rate: "3", clip: "42+1", conc: "N" },
    { name: "Shotgun (12-Gauge)", diff: 6, dmg: "8(L)", range: "20", rate: "1", clip: "5+1", conc: "T" },
    { name: "Shotgun, Semi-auto (12-Gauge)", diff: 6, dmg: "8(L)", range: "20", rate: "3", clip: "8+1", conc: "T" },
    { name: "Crossbow", diff: 7, dmg: "5(L)", range: "20", rate: "1", clip: "1", conc: "T" }
];

// --- REVISED EDITION ARMOR ---
export const V20_ARMOR_LIST = [
    { name: "Class One (Reinforced Clothing)", rating: 1, penalty: 0 },
    { name: "Class Two (Armor T-Shirt)", rating: 2, penalty: 1 },
    { name: "Class Three (Kevlar Vest)", rating: 3, penalty: 1 },
    { name: "Class Four (Flak Jacket)", rating: 4, penalty: 2 },
    { name: "Class Five (Full Riot Gear)", rating: 5, penalty: 3 }
];

export const CLAN_WEAKNESSES = {
    "Assamite": "Clan Flaw: Blood Addiction. Whenever tasting Kindred blood, make a Self-Control roll (Diff 3 + Blood Points ingested). Failure = Addiction.",
    "Brujah": "Prone to anger. The difficulty of rolls to resist frenzy are two higher than normal.",
    "Followers of Set": "Severe allergy to bright lights and sunlight. Take 2 levels of aggravated damage from sunlight per turn. Subtract 1 die from all pools in bright light.",
    "Gangrel": "Very close to the Beast. Every time they frenzy, they gain an animalistic feature. For every 5 features, 1 Social Attribute is permanently reduced by 1.",
    "Giovanni": "The Kiss causes excruciating pain rather than pleasure. Often kills the victim from shock before death by blood loss.",
    "Lasombra": "Cast no reflection. Cannot be seen in mirrors, water, or cameras. Take an extra level of aggravated damage from sunlight.",
    "Malkavian": "Irredeemably insane. Must choose at least one derangement at creation. Can be temporarily fought with Willpower, but never permanently overcome.",
    "Nosferatu": "Twisted into hideous monsters. Appearance rating is zero and cannot be increased. Most Social actions based on first impressions fail automatically.",
    "Ravnos": "Addicted to a specific vice or crime. Must make a Self-Control roll (Diff 6) to resist indulging when the opportunity presents itself.",
    "Toreador": "Attuned to the aesthetic. When viewing something beautiful, must make a Self-Control roll (Diff 6) or stand in rapt fascination until the scene ends.",
    "Tremere": "Must drink the blood of the clan's seven elders when created. Starts with at least one step toward being blood bound to the Council.",
    "Tzimisce": "Tied to their domains. Must sleep with at least two handfuls of native earth. Failure halves dice pools every 24 hours until condition is met.",
    "Ventrue": "Rarefied tastes. May only feed on a specific type of mortal blood chosen at creation. Will not feed on any other type, even if starving.",
    "Caitiff": "No clan advantages. Purchase all Disciplines at 6x current rating (no in-clan discount)."
};

// Exports for NPC Creator
export const ARMOR = V20_ARMOR_LIST;
export const WEAPONS = V20_WEAPONS_LIST.filter(w => w.range === '-');
export const RANGED_WEAPONS = V20_WEAPONS_LIST.filter(w => w.range !== '-');
export const GEAR = [
    "Cell Phone", "Flashlight", "Rope", "Lockpicks", "Handcuffs",
    "Laptop", "First Aid Kit", "Crowbar", "Duct Tape"
];
