/**
 * REVISED EDITION DISCIPLINES DATA
 * Source: Vampire: The Masquerade Revised Edition Core Rulebook
 * Note: Levels capped at 5 per Revised Core Rules.
 * Thaumaturgy and Necromancy are stored in separate files.
 */

export const DISCIPLINES_DATA = {
    "Animalism": {
        1: {
            name: "Feral Whispers",
            desc: "Communicate with animals via eye contact. Can issue commands.",
            system: "Eye contact required. Roll Manipulation + Animal Ken (Diff 6 for mammals, 7 for birds/reptiles, 8 for bugs).",
            roll: {
                pool: ["Manipulation", "Animal Ken"],
                diffLabel: "Diff 6-8",
                defaultDiff: 6
            }
        },
        2: {
            name: "Beckoning",
            desc: "Summon animals of a specific type. They arrive as fast as they can.",
            system: "Roll Charisma + Survival (Diff 6). Successes determine number/response of animals.",
            roll: {
                pool: ["Charisma", "Survival"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        3: {
            name: "Quell the Beast",
            desc: "Cow a mortal or beast into apathy, or soothe a frenzying vampire.",
            system: "Roll Manipulation + Intimidation (Diff 7) for mortals. Roll Manipulation + Empathy (Diff 8) for vampires.",
            roll: {
                pool: ["Manipulation", "Intimidation"],
                diffLabel: "Diff 7 / 8",
                defaultDiff: 7
            }
        },
        4: {
            name: "Subsume the Spirit",
            desc: "Possess an animal's body.",
            system: "Look into eyes. Roll Manipulation + Animal Ken (Diff 8). Successes determine control. Body stays in torpor.",
            roll: {
                pool: ["Manipulation", "Animal Ken"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        },
        5: {
            name: "Drawing Out the Beast",
            desc: "Transfer your Beast (and Frenzy) into another.",
            system: "Roll Manipulation + Self-Control (Diff 8). Target enters frenzy if successful.",
            roll: {
                pool: ["Manipulation", "Self-Control"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        }
    },
    "Auspex": {
        1: {
            name: "Heightened Senses",
            desc: "Doubles sensory clarity/range. See in dark.",
            system: "No roll. Reflexive. Sudden loud noises/lights can blind/deafen (soak with Willpower, Diff 4).",
            roll: null
        },
        2: {
            name: "Aura Perception",
            desc: "Read the colors of a subject's aura to determine emotion and nature.",
            system: "Roll Perception + Empathy (Diff 8). 1 success: Shade (pale/bright). 3 successes: Patterns. 5: Full detail.",
            roll: {
                pool: ["Perception", "Empathy"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        },
        3: {
            name: "The Spirit's Touch",
            desc: "Read psychic impressions from an object.",
            system: "Roll Perception + Empathy (Diff varies 6-9 based on age of impression).",
            roll: {
                pool: ["Perception", "Empathy"],
                diffLabel: "Diff Varies (6-9)",
                defaultDiff: 6
            }
        },
        4: {
            name: "Telepathy",
            desc: "Read minds or project thoughts.",
            system: "Roll Intelligence + Subterfuge (Diff = Target Willpower). 1 succ: Surface thoughts. 5 succ: Deep subconscious.",
            roll: {
                pool: ["Intelligence", "Subterfuge"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        5: {
            name: "Psychic Projection",
            desc: "Astral travel.",
            system: "Spend 1 Willpower. Roll Perception + Occult (Diff varies). Travel speed = 1000mph. Silver Cord connects to body.",
            roll: {
                pool: ["Perception", "Occult"],
                diffLabel: "Diff Varies",
                defaultDiff: 7
            }
        }
    },
    "Celerity": {
        1: {
            name: "Celerity",
            desc: "Move with supernatural speed.",
            system: "Spend 1 Blood Point to gain 1 extra full action next turn.",
            roll: null
        },
        2: {
            name: "Celerity",
            desc: "Move with supernatural speed.",
            system: "Spend 1 Blood Point to gain 2 extra full actions next turn.",
            roll: null
        },
        3: {
            name: "Celerity",
            desc: "Move with supernatural speed.",
            system: "Spend 1 Blood Point to gain 3 extra full actions next turn.",
            roll: null
        },
        4: {
            name: "Celerity",
            desc: "Move with supernatural speed.",
            system: "Spend 1 Blood Point to gain 4 extra full actions next turn.",
            roll: null
        },
        5: {
            name: "Celerity",
            desc: "Move with supernatural speed.",
            system: "Spend 1 Blood Point to gain 5 extra full actions next turn.",
            roll: null
        }
    },
    "Chimerstry": {
        1: {
            name: "Ignis Fatuus",
            desc: "Create minor, static illusion (one sense, usually sight/sound).",
            system: "Spend 1 Willpower. No roll. Lasts until user leaves area.",
            roll: null
        },
        2: {
            name: "Fata Morgana",
            desc: "Create static illusion appealing to all senses.",
            system: "Spend 1 Willpower + 1 Blood Point. No roll.",
            roll: null
        },
        3: {
            name: "Apparition",
            desc: "Give motion to an illusion.",
            system: "Spend 1 Blood Point per turn of movement.",
            roll: null
        },
        4: {
            name: "Permanency",
            desc: "Make an illusion last indefinitely.",
            system: "Spend 1 Blood Point (consumes a dot of temporary Willpower).",
            roll: null
        },
        5: {
            name: "Horrid Reality",
            desc: "Inflict damage via illusion.",
            system: "Spend 2 Willpower. Roll Manipulation + Subterfuge (Diff = Target Perception + Self-Control). Successes = Lethal Damage (can be healed if victim is convinced it wasn't real).",
            roll: {
                pool: ["Manipulation", "Subterfuge"],
                diffLabel: "Target Percep+SC",
                defaultDiff: 6
            }
        }
    },
    "Dementation": {
        1: {
            name: "Passion",
            desc: "Inflame or deaden emotions.",
            system: "Roll Charisma + Empathy (Diff = Target Humanity/Path). Success alters mood for one scene.",
            roll: {
                pool: ["Charisma", "Empathy"],
                diffLabel: "Target Humanity",
                defaultDiff: 6
            }
        },
        2: {
            name: "The Haunting",
            desc: "Sensory hallucinations.",
            system: "Roll Manipulation + Subterfuge (Diff = Target Perception + Self-Control). Effects last 1 night/success.",
            roll: {
                pool: ["Manipulation", "Subterfuge"],
                diffLabel: "Target Percep+SC",
                defaultDiff: 6
            }
        },
        3: {
            name: "Eyes of Chaos",
            desc: "Gain insight through madness.",
            system: "Roll Perception + Occult (Diff varies). Can decipher codes, see patterns, or pierce Obfuscate.",
            roll: {
                pool: ["Perception", "Occult"],
                diffLabel: "Diff Varies",
                defaultDiff: 6
            }
        },
        4: {
            name: "Voice of Madness",
            desc: "Trigger frenzy in victim.",
            system: "Spend 1 BP. Roll Manipulation + Empathy (Diff 7). Target drives into frenzy or flight.",
            roll: {
                pool: ["Manipulation", "Empathy"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        5: {
            name: "Total Insanity",
            desc: "Inflict 5 derangements on target.",
            system: "Roll Manipulation + Intimidation (Diff = Target Willpower). Lasts 1 scene.",
            roll: {
                pool: ["Manipulation", "Intimidation"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        }
    },
    "Dominate": {
        1: {
            name: "Command",
            desc: "One word command obeyed instantly.",
            system: "Roll Manipulation + Intimidation (Diff = Target Willpower).",
            roll: {
                pool: ["Manipulation", "Intimidation"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        2: {
            name: "Mesmerize",
            desc: "Implant hypnotic suggestion.",
            system: "Roll Manipulation + Leadership (Diff = Target Willpower).",
            roll: {
                pool: ["Manipulation", "Leadership"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        3: {
            name: "The Forgetful Mind",
            desc: "Rewrite memories.",
            system: "Roll Wits + Subterfuge (Diff = Target Willpower).",
            roll: {
                pool: ["Wits", "Subterfuge"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        4: {
            name: "Conditioning",
            desc: "Rewire mind for loyalty.",
            system: "Extended Roll: Charisma + Leadership (Diff = Target Willpower). Need 5-10x Self-Control successes.",
            roll: {
                pool: ["Charisma", "Leadership"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        5: {
            name: "Possession",
            desc: "Take over a mortal body.",
            system: "Strip WP first. Then roll Charisma + Intimidation (Diff 7).",
            roll: {
                pool: ["Charisma", "Intimidation"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        }
    },
    "Fortitude": {
        1: {
            name: "Fortitude",
            desc: "Supernatural toughness.",
            system: "Add rating to all soak rolls. Can soak Aggravated damage with Fortitude dice.",
            roll: null
        },
        2: {
            name: "Fortitude",
            desc: "Supernatural toughness.",
            system: "Add rating to all soak rolls. Can soak Aggravated damage with Fortitude dice.",
            roll: null
        },
        3: {
            name: "Fortitude",
            desc: "Supernatural toughness.",
            system: "Add rating to all soak rolls. Can soak Aggravated damage with Fortitude dice.",
            roll: null
        },
        4: {
            name: "Fortitude",
            desc: "Supernatural toughness.",
            system: "Add rating to all soak rolls. Can soak Aggravated damage with Fortitude dice.",
            roll: null
        },
        5: {
            name: "Fortitude",
            desc: "Supernatural toughness.",
            system: "Add rating to all soak rolls. Can soak Aggravated damage with Fortitude dice.",
            roll: null
        }
    },
    "Obfuscate": {
        1: {
            name: "Cloak of Shadows",
            desc: "Hide in shadows. Must remain still.",
            system: "No roll usually. Diff 6 Wits+Stealth if moving slightly.",
            roll: {
                pool: ["Wits", "Stealth"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        2: {
            name: "Unseen Presence",
            desc: "Move invisibly.",
            system: "No roll usually. Wits+Stealth if risky.",
            roll: {
                pool: ["Wits", "Stealth"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        3: {
            name: "Mask of a Thousand Faces",
            desc: "Change appearance.",
            system: "Roll Manipulation + Performance (Diff 7).",
            roll: {
                pool: ["Manipulation", "Performance"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        4: {
            name: "Vanish from Mind's Eye",
            desc: "Disappear while being watched.",
            system: "Roll Charisma + Stealth (Diff = Target Wits + Alertness).",
            roll: {
                pool: ["Charisma", "Stealth"],
                diffLabel: "Target Wits+Alert",
                defaultDiff: 6
            }
        },
        5: {
            name: "Cloak the Gathering",
            desc: "Hide a group.",
            system: "Use base power rules. Can hide 1 person per dot of Stealth.",
            roll: null
        }
    },
    "Obtenebration": {
        1: {
            name: "Shadow Play",
            desc: "Manipulate shadows. +1 Intimidation/Stealth.",
            system: "Spend 1 BP. No roll.",
            roll: null
        },
        2: {
            name: "Shroud of Night",
            desc: "Create zone of darkness.",
            system: "Roll Manipulation + Occult (Diff 7).",
            roll: {
                pool: ["Manipulation", "Occult"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        3: {
            name: "Arms of the Abyss",
            desc: "Summon shadow tentacles.",
            system: "Spend 1 BP. Roll Manipulation + Occult (Diff 7). Str/Dex = Rating.",
            roll: {
                pool: ["Manipulation", "Occult"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        4: {
            name: "Black Metamorphosis",
            desc: "Become a shadow-hybrid.",
            system: "Spend 2 BP. Roll Manipulation + Courage (Diff 7). +3 Brawl dice.",
            roll: {
                pool: ["Manipulation", "Courage"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        5: {
            name: "Tenebrous Form",
            desc: "Become shadow.",
            system: "Spend 3 BP. 3 turns to transform. Immune to physical damage.",
            roll: null
        }
    },
    "Potence": {
        1: {
            name: "Potence",
            desc: "Supernatural strength.",
            system: "Passive: +1 Auto Success to Strength rolls. Active: Spend 1 BP to add Potence dice to Damage.",
            roll: null
        },
        2: {
            name: "Potence",
            desc: "Supernatural strength.",
            system: "Passive: +2 Auto Successes to Strength rolls. Active: Spend 1 BP to add Potence dice to Damage.",
            roll: null
        },
        3: {
            name: "Potence",
            desc: "Supernatural strength.",
            system: "Passive: +3 Auto Successes to Strength rolls. Active: Spend 1 BP to add Potence dice to Damage.",
            roll: null
        },
        4: {
            name: "Potence",
            desc: "Supernatural strength.",
            system: "Passive: +4 Auto Successes to Strength rolls. Active: Spend 1 BP to add Potence dice to Damage.",
            roll: null
        },
        5: {
            name: "Potence",
            desc: "Supernatural strength.",
            system: "Passive: +5 Auto Successes to Strength rolls. Active: Spend 1 BP to add Potence dice to Damage.",
            roll: null
        }
    },
    "Presence": {
        1: {
            name: "Awe",
            desc: "Attract attention.",
            system: "Roll Charisma + Performance (Diff 7).",
            roll: {
                pool: ["Charisma", "Performance"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        2: {
            name: "Dread Gaze",
            desc: "Terrify victim.",
            system: "Roll Charisma + Intimidation (Diff = Target Wits + Courage).",
            roll: {
                pool: ["Charisma", "Intimidation"],
                diffLabel: "Target Wits+Courage",
                defaultDiff: 6
            }
        },
        3: {
            name: "Entrancement",
            desc: "Make victim serve you.",
            system: "Roll Appearance + Empathy (Diff = Target Willpower).",
            roll: {
                pool: ["Appearance", "Empathy"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        4: {
            name: "Summon",
            desc: "Call person to you.",
            system: "Spend 1 BP. Roll Charisma + Subterfuge (Diff 5-7).",
            roll: {
                pool: ["Charisma", "Subterfuge"],
                diffLabel: "Difficulty 5",
                defaultDiff: 5
            }
        },
        5: {
            name: "Majesty",
            desc: "Assume godlike aura.",
            system: "Spend 1 Willpower. No roll. Attackers must roll Courage (Diff 8).",
            roll: {
                pool: ["Courage"],
                diffLabel: "Attacker's Diff (8)",
                defaultDiff: 8
            }
        }
    },
    "Protean": {
        1: {
            name: "Eyes of the Beast",
            desc: "See in dark.",
            system: "One turn. Glowing red eyes.",
            roll: null
        },
        2: {
            name: "Feral Claws",
            desc: "Grow claws (Str+1 Aggravated).",
            system: "Spend 1 BP. 1 turn.",
            roll: null
        },
        3: {
            name: "Earth Meld",
            desc: "Sink into ground.",
            system: "Spend 1 BP. 1 turn.",
            roll: null
        },
        4: {
            name: "Shape of the Beast",
            desc: "Transform into wolf or bat.",
            system: "Spend 1 BP. 3 turns.",
            roll: null
        },
        5: {
            name: "Mist Form",
            desc: "Become mist.",
            system: "Spend 1 BP. 3 turns.",
            roll: null
        }
    },
    "Quietus": {
        1: {
            name: "Silence of Death",
            desc: "20ft zone of silence.",
            system: "Spend 1 BP. Lasts 1 hour.",
            roll: null
        },
        2: {
            name: "Scorpion's Touch",
            desc: "Reduce target Stamina.",
            system: "Spend Blood (to coat weapon). Roll Willpower (Diff 6). Target loses Stamina = successes.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        3: {
            name: "Dagon's Call",
            desc: "Rupture internal organs.",
            system: "Spend 1 Willpower. Contested Stamina vs Stamina. Net successes = Lethal damage.",
            roll: {
                pool: ["Stamina"],
                diffLabel: "Target Stamina",
                defaultDiff: 6
            }
        },
        4: {
            name: "Baal's Caress",
            desc: "Blade deals Aggravated damage.",
            system: "Spend 1 BP per hit. No roll.",
            roll: null
        },
        5: {
            name: "Taste of Death",
            desc: "Spit blood for Aggravated damage.",
            system: "Spend BP. Roll Dexterity + Athletics (Diff 6). Dmg = 2 Agg per BP spent.",
            roll: {
                pool: ["Dexterity", "Athletics"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        }
    },
    "Serpentis": {
        1: {
            name: "Eyes of the Serpent",
            desc: "Paralyze victim with gaze.",
            system: "Roll Willpower (Diff = Target Willpower). Victim needs Diff 9 to break.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Target Willpower",
                defaultDiff: 6
            }
        },
        2: {
            name: "The Tongue of the Asp",
            desc: "Aggravated tongue attack (Str+1).",
            system: "Spend 1 BP.",
            roll: null
        },
        3: {
            name: "The Skin of the Adder",
            desc: "Scaly skin. Soak Aggravated with Stamina. Diff -1.",
            system: "Spend 1 BP + 1 WP. App drops to 1.",
            roll: null
        },
        4: {
            name: "The Form of the Cobra",
            desc: "Become giant cobra. Poisonous bite.",
            system: "Spend 1 BP. 3 turns. Bite = Fatal to mortals.",
            roll: null
        },
        5: {
            name: "The Heart of Darkness",
            desc: "Remove heart.",
            system: "No roll. Immune to staking.",
            roll: null
        }
    },
    "Vicissitude": {
        1: {
            name: "Malleable Visage",
            desc: "Alter own appearance.",
            system: "Spend 1 BP. Roll Intelligence + Body Crafts (Diff 6).",
            roll: {
                pool: ["Intelligence", "Body Crafts"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        2: {
            name: "Fleshcraft",
            desc: "Alter others' flesh.",
            system: "Spend 1 BP. Roll Dexterity + Body Crafts (Diff variable).",
            roll: {
                pool: ["Dexterity", "Body Crafts"],
                diffLabel: "Diff Varies",
                defaultDiff: 6
            }
        },
        3: {
            name: "Bonecraft",
            desc: "Alter others' bone.",
            system: "Spend 1 BP. Roll Strength + Body Crafts (Diff 7).",
            roll: {
                pool: ["Strength", "Body Crafts"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        4: {
            name: "Horrid Form",
            desc: "Battle form (+3 Phys stats).",
            system: "Spend 2 BP. 1 turn. Social traits = 0.",
            roll: null
        },
        5: {
            name: "Bloodform",
            desc: "Turn into liquid blood.",
            system: "Spend 1 BP/limb.",
            roll: null
        }
    }
};
