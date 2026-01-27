// DATA CONSTANTS - REVISED EDITION
// Source: Vampire: The Masquerade Revised Edition Core Rulebook

export const APP_VERSION = "Revised v1.0.0";

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
    // (Simplified rules based on Revised Core)
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
// Note: 'Dodge' replaces 'Athletics' for defense. 'Security' replaces 'Larceny'. 'Linguistics' is a Knowledge.
export const ABILITIES = {
    Talents: ["Alertness", "Athletics", "Brawl", "Dodge", "Empathy", "Expression", "Intimidation", "Leadership", "Streetwise", "Subterfuge"],
    Skills: ["Animal Ken", "Crafts", "Drive", "Etiquette", "Firearms", "Melee", "Performance", "Security", "Stealth", "Survival"],
    Knowledges: ["Academics", "Computer", "Finance", "Investigation", "Law", "Linguistics", "Medicine", "Occult", "Politics", "Science"]
};

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
    "Malkavian": ["Auspex", "Dementation", "Obfuscate"], // Revised restored Dementation to main clan
    "Nosferatu": ["Animalism", "Obfuscate", "Potence"],
    "Ravnos": ["Animalism", "Chimerstry", "Fortitude"],
    "Toreador": ["Auspex", "Celerity", "Presence"],
    "Tremere": ["Auspex", "Dominate", "Thaumaturgy"],
    "Tzimisce": ["Animalism", "Auspex", "Vicissitude"],
    "Ventrue": ["Dominate", "Fortitude", "Presence"],
    "Caitiff": [] 
};

// Revised Core Backgrounds (p. 121)
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

// Revised Derangements (p. 232)
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
    "Strength": ["Dead Lift", "Punch", "Jump", "Crush"],
    "Dexterity": ["Sprint", "Parry", "Sneak", "Throw"],
    "Stamina": ["Endurance", "Forced March", "Hold Breath"],
    "Charisma": ["Oratory", "Seduction", "Instruction"],
    "Manipulation": ["Persuasion", "Subterfuge", "Command"],
    "Appearance": ["Dignified", "Exotic", "Sexy", "Intimidating"],
    "Perception": ["Hearing", "Sight", "Insight", "Alertness"],
    "Intelligence": ["Research", "Memory", "Analysis"],
    "Wits": ["Reaction", "Ambush", "Repartee"],
    "Alertness": ["Noises", "Traps", "Ambushes"],
    "Athletics": ["Swimming", "Climbing", "Running"],
    "Brawl": ["Boxing", "Wrestling", "Karate"],
    "Dodge": ["Sidestep", "Duck", "Dive", "Cover"],
    "Empathy": ["Emotions", "Truths", "Motives"],
    "Expression": ["Poetry", "Acting", "Writing"],
    "Intimidation": ["Physical", "Veiled Threats", "Blackmail"],
    "Leadership": ["Military", "Political", "Oratory"],
    "Streetwise": ["Fencing", "Drugs", "Gangs", "Rumors"],
    "Subterfuge": ["Lying", "Seduction", "Impeccable Logic"],
    "Animal Ken": ["Dogs", "Horses", "Training"],
    "Crafts": ["Carpentry", "Mechanics", "Sewing"],
    "Drive": ["Race Car", "Motorcycle", "Evasion"],
    "Etiquette": ["High Society", "Business", "Street"],
    "Firearms": ["Pistols", "Rifles", "Shotguns"],
    "Melee": ["Knives", "Swords", "Clubs"],
    "Performance": ["Singing", "Dancing", "Acting"],
    "Security": ["Lockpicking", "Safe-cracking", "Hotwiring"],
    "Stealth": ["Hiding", "Moving Silently", "Shadowing"],
    "Survival": ["Tracking", "Foraging", "Shelter"],
    "Academics": ["History", "Literature", "Philosophy"],
    "Computer": ["Hacking", "Programming", "Research"],
    "Finance": ["Stock Market", "Money Laundering", "Appraisal"],
    "Investigation": ["Forensics", "Search", "Shadowing"],
    "Law": ["Criminal", "Civil", "Police Procedure"],
    "Linguistics": ["Spanish", "French", "Latin", "Mandarin"],
    "Medicine": ["First Aid", "Surgery", "Toxicology"],
    "Occult": ["Kindred Lore", "Rituals", "Ghosts"],
    "Politics": ["City", "National", "Camarilla"],
    "Science": ["Biology", "Chemistry", "Physics"]
};

// Revised Merits & Flaws (Core Book p. 296+)
export const V20_MERITS_LIST = [
    { n: "Acute Sense", v: 1 },
    { n: "Ambidextrous", v: 1 },
    { n: "Eat Food", v: 1 },
    { n: "Catlike Balance", v: 1 },
    { n: "Blush of Health", v: 2 },
    { n: "Enchanting Voice", v: 2 },
    { n: "Daredevil", v: 3 },
    { n: "Efficient Digestion", v: 3 },
    { n: "Huge Size", v: 4 },
    { n: "Common Sense", v: 1 },
    { n: "Concentration", v: 1 },
    { n: "Time Sense", v: 1 },
    { n: "Code of Honor", v: 2 },
    { n: "Eidetic Memory", v: 2 },
    { n: "Light Sleeper", v: 2 },
    { n: "Natural Linguist", v: 2 },
    { n: "Calm Heart", v: 3 },
    { n: "Iron Will", v: 3 },
    { n: "Prestigious Sire", v: 1 },
    { n: "Natural Leader", v: 1 },
    { n: "Debt of Gratitude", v: 1, variable: true, range: "1-3" },
    { n: "True Love", v: 4 },
    { n: "Medium", v: 2 },
    { n: "Magic Resistance", v: 2 },
    { n: "Oracular Ability", v: 3 },
    { n: "Spirit Mentor", v: 3 },
    { n: "Unbondable", v: 3 },
    { n: "Luck", v: 3 },
    { n: "True Faith", v: 7 }
].sort((a, b) => a.n.localeCompare(b.n));

export const V20_FLAWS_LIST = [
    { n: "Hard of Hearing", v: 1 },
    { n: "Short", v: 1 },
    { n: "Smell of the Grave", v: 1 },
    { n: "Bad Sight", v: 2 },
    { n: "One Eye", v: 2 },
    { n: "Disfigured", v: 2 },
    { n: "Deformity", v: 3 },
    { n: "Lame", v: 3 },
    { n: "Monstrous", v: 3 },
    { n: "Permanent Wound", v: 3 },
    { n: "Slow Healing", v: 3 },
    { n: "Deaf", v: 4 },
    { n: "Mute", v: 4 },
    { n: "Thin Blood", v: 4 },
    { n: "Flesh of the Corpse", v: 5 },
    { n: "Blind", v: 6 },
    { n: "Deep Sleeper", v: 1 },
    { n: "Nightmares", v: 1 },
    { n: "Phobia", v: 2 },
    { n: "Shy", v: 1 },
    { n: "Soft-Hearted", v: 1 },
    { n: "Speech Impediment", v: 1 },
    { n: "Short Fuse", v: 2 },
    { n: "Territorial", v: 2 },
    { n: "Vengeful", v: 2 },
    { n: "Amnesia", v: 2 },
    { n: "Lunacy", v: 2 },
    { n: "Weak-Willed", v: 3 },
    { n: "Conspicuous Consumption", v: 4 },
    { n: "Dark Secret", v: 1 },
    { n: "Infamous Sire", v: 1 },
    { n: "Mistaken Identity", v: 1 },
    { n: "Sire's Resentment", v: 1 },
    { n: "Enemy", v: 1, variable: true, range: "1-5" },
    { n: "Hunted", v: 4 },
    { n: "Probationary Sect Member", v: 4 },
    { n: "Cast No Reflection", v: 1 },
    { n: "Repulsed by Garlic", v: 1 },
    { n: "Touch of Frost", v: 1 },
    { n: "Cursed", v: 1, variable: true, range: "1-5" },
    { n: "Beacon of the Unholy", v: 2 },
    { n: "Eerie Presence", v: 2 },
    { n: "Haunted", v: 3 },
    { n: "Repelled by Crosses", v: 3 },
    { n: "Grip of the Damned", v: 4 },
    { n: "Dark Fate", v: 5 },
    { n: "Light-Sensitive", v: 5 }
].sort((a, b) => a.n.localeCompare(b.n));

export const V20_WEAPONS_LIST = [
    { name: "Sap/Blackjack", diff: 4, dmg: "Str+1(B)", range: "-", rate: "-", clip: "-", conc: "P" },
    { name: "Club", diff: 4, dmg: "Str+2(B)", range: "-", rate: "-", clip: "-", conc: "T" },
    { name: "Knife", diff: 4, dmg: "Str+1(L)", range: "-", rate: "-", clip: "-", conc: "J" },
    { name: "Sword", diff: 6, dmg: "Str+4(L)", range: "-", rate: "-", clip: "-", conc: "T" },
    { name: "Axe", diff: 7, dmg: "Str+5(L)", range: "-", rate: "-", clip: "-", conc: "N" },
    { name: "Stake", diff: 6, dmg: "Str+1(L)", range: "-", rate: "-", clip: "-", conc: "T" },
    { name: "Revolver, Lt.", diff: 6, dmg: "4(L)", range: "12", rate: "3", clip: "6", conc: "P" },
    { name: "Revolver, Hvy.", diff: 6, dmg: "6(L)", range: "35", rate: "2", clip: "6", conc: "J" },
    { name: "Pistol, Lt.", diff: 6, dmg: "4(L)", range: "20", rate: "4", clip: "17+1", conc: "P" },
    { name: "Pistol, Hvy.", diff: 6, dmg: "5(L)", range: "25", rate: "3", clip: "7+1", conc: "J" },
    { name: "Rifle", diff: 8, dmg: "8(L)", range: "200", rate: "1", clip: "5+1", conc: "N" },
    { name: "SMG, Small", diff: 6, dmg: "4(L)", range: "25", rate: "3", clip: "30+1", conc: "J" },
    { name: "SMG, Large", diff: 6, dmg: "4(L)", range: "50", rate: "3", clip: "32+1", conc: "T" },
    { name: "Shotgun", diff: 6, dmg: "8(L)", range: "20", rate: "1", clip: "5+1", conc: "T" },
    { name: "Crossbow", diff: 7, dmg: "5(L)", range: "20", rate: "1", clip: "1", conc: "T" }
];

export const V20_ARMOR_LIST = [
    { name: "Clothing (Heavy)", rating: 1, penalty: 0 },
    { name: "Armor T-Shirt", rating: 2, penalty: 1 },
    { name: "Kevlar Vest", rating: 3, penalty: 1 },
    { name: "Flak Jacket", rating: 4, penalty: 2 },
    { name: "Full Riot Gear", rating: 5, penalty: 3 }
];

export const V20_VEHICLES_LIST = [
    { name: "Motorcycle", safe: "70", max: "130", man: "8" },
    { name: "Compact Car", safe: "60", max: "100", man: "6" },
    { name: "Mid-size Car", safe: "65", max: "110", man: "6" },
    { name: "Sports Car", safe: "80", max: "150", man: "8" },
    { name: "Truck/SUV", safe: "60", max: "90", man: "5" },
    { name: "Van", safe: "55", max: "85", man: "4" }
];

export const CLAN_WEAKNESSES = {
    "Assamite": "Blood Curse: Cannot drink Kindred blood. If they do, they take 1 level of unsoakable lethal damage per blood point.",
    "Brujah": "+2 Difficulty to resist Frenzy.",
    "Followers of Set": "Extremely sensitive to sunlight. Double damage from sun. -1 die to all rolls in bright light.",
    "Gangrel": "Gains an animal feature after every frenzy. 5 features = Permanent loss of 1 Social Attribute point.",
    "Giovanni": "The Kiss causes excruciating pain, not pleasure. Often kills mortals from shock.",
    "Lasombra": "Cast no reflection.",
    "Malkavian": "Afflicted with a permanent, incurable Derangement. Cannot spend Willpower to ignore it.",
    "Nosferatu": "Appearance 0. Fails all Appearance rolls automatically.",
    "Ravnos": "Compelled to indulge in a specific vice. Willpower roll (Diff 6) to resist.",
    "Toreador": "Entranced by beauty. Willpower roll (Diff 6) to break fascination or be immobilized.",
    "Tremere": "Blood bond to the Council of Seven (start with 1 step towards Council). +1 difficulty to resist Dominate from elders.",
    "Tzimisce": "Must sleep in two handfuls of native soil. Halve dice pools every 24h without it.",
    "Ventrue": "Restricted feeding (specific prey type). Cannot feed from anything else.",
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
