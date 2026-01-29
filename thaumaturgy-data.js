/**
 * REVISED EDITION THAUMATURGY DATA
 * Source: Vampire: The Masquerade Revised Edition Core Rulebook
 * Contains only the 5 core paths presented in the main rulebook.
 */

export const THAUMATURGY_DATA = {
    "Path of Blood": {
        1: {
            name: "A Taste for Blood",
            desc: "Determine how much vitae remains in subject, approximate generation, and if they have committed diablerie.",
            system: "Touch blood. Roll Perception + Occult (Diff 7). Successes reveal info.",
            roll: {
                pool: ["Perception", "Occult"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        2: {
            name: "Blood Rage",
            desc: "Force another Kindred to spend blood against their will.",
            system: "Roll Dexterity + Subterfuge (Diff 7) vs Target's Willpower (Diff 8). Each net success forces 1 BP spent.",
            roll: {
                pool: ["Dexterity", "Subterfuge"],
                diffLabel: "vs Target Willpower (8)",
                defaultDiff: 7
            }
        },
        3: {
            name: "Blood of Potency",
            desc: "Temporarily lower your own generation for one hour.",
            system: "Roll Manipulation + Survival (Diff 8). Successes lower generation (1 per success, max based on potence limits).",
            roll: {
                pool: ["Manipulation", "Survival"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        },
        4: {
            name: "Theft of Vitae",
            desc: "Siphon blood from a target at a distance.",
            system: "Roll Intelligence + Medicine (Diff 7) vs Victim's Willpower (Diff 7). Net successes = BP transferred.",
            roll: {
                pool: ["Intelligence", "Medicine"],
                diffLabel: "vs Target Willpower (7)",
                defaultDiff: 7
            }
        },
        5: {
            name: "Cauldron of Blood",
            desc: "Boil subject's blood in their veins.",
            system: "Roll Willpower (Diff 7) vs Victim's Stamina + Fortitude (Diff 7). Net successes = Aggravated damage.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "vs Stam + Fort (7)",
                defaultDiff: 7
            }
        }
    },
    "The Lure of Flames": {
        1: {
            name: "Candle",
            desc: "Conjure a small flame. 1 Health Level Aggravated Dmg/turn.",
            system: "Roll Willpower (Diff 4). Soak Difficulty 3.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 4",
                defaultDiff: 4
            }
        },
        2: {
            name: "Palm of Flame",
            desc: "Conjure a handful of fire. 1 Health Level Aggravated Dmg.",
            system: "Roll Willpower (Diff 5). Soak Difficulty 4.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 5",
                defaultDiff: 5
            }
        },
        3: {
            name: "Campfire",
            desc: "Conjure a campfire-sized flame. 2 Health Levels Aggravated Dmg.",
            system: "Roll Willpower (Diff 6). Soak Difficulty 5.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        4: {
            name: "Bonfire",
            desc: "Conjure a large bonfire. 2 Health Levels Aggravated Dmg.",
            system: "Roll Willpower (Diff 7). Soak Difficulty 7.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        5: {
            name: "Inferno",
            desc: "Conjure massive fire. 3 Health Levels Aggravated Dmg.",
            system: "Roll Willpower (Diff 8). Soak Difficulty 9.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        }
    },
    "Movement of the Mind": {
        1: {
            name: "One Pound",
            desc: "Levitate/manipulate up to 1 lb (0.5 kg).",
            system: "Roll Willpower (Diff 6). Duration/Control based on successes.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        2: {
            name: "Twenty Pounds",
            desc: "Levitate/manipulate up to 20 lbs (10 kg).",
            system: "Roll Willpower (Diff 6).",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        3: {
            name: "Two Hundred Pounds",
            desc: "Levitate up to 200 lbs (100 kg). Can fly at running speed.",
            system: "Roll Willpower (Diff 6).",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        4: {
            name: "Five Hundred Pounds",
            desc: "Manipulate heavy objects up to 500 lbs (250 kg). Can use as weapons.",
            system: "Roll Willpower (Diff 6). Damage = Thaumaturgy rating.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        5: {
            name: "One Thousand Pounds",
            desc: "Lift massive weights up to 1000 lbs. Manipulate living beings (Opposed WP).",
            system: "Roll Willpower (Diff 6). Living targets resist with Willpower (Diff 6).",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        }
    },
    "The Path of Conjuring": {
        1: {
            name: "Summon the Simple Form",
            desc: "Conjure simple, inanimate object (no moving parts).",
            system: "Spend 1 Willpower point. Object lasts based on concentration/successes.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        2: {
            name: "Permanency",
            desc: "Make a summoned object real and permanent.",
            system: "Spend 3 Blood Points. No maintenance required.",
            roll: null
        },
        3: {
            name: "Magic of the Smith",
            desc: "Conjure complex objects (guns, tools).",
            system: "Spend 5 BP. Roll Intelligence + Crafts/Science/Technology (Diff varies) to determine quality.",
            roll: {
                pool: ["Intelligence", "Crafts"],
                diffLabel: "Diff Varies",
                defaultDiff: 7
            }
        },
        4: {
            name: "Reverse Conjuration",
            desc: "Banish previously conjured object.",
            system: "Extended Willpower roll vs original successes.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Original Succ",
                defaultDiff: 6
            }
        },
        5: {
            name: "Power Over Life",
            desc: "Summon mindless simulacrum of person/animal.",
            system: "Spend 10 Blood Points. Lasts 1 week.",
            roll: null
        }
    },
    "Hands of Destruction": {
        1: {
            name: "Decay",
            desc: "Accelerate aging. Dead matter dusts; living targets age 10 years.",
            system: "Roll Intelligence + Medicine (Diff 8).",
            roll: {
                pool: ["Intelligence", "Medicine"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        },
        2: {
            name: "Gnarl Wood",
            desc: "Warp and bend wooden objects.",
            system: "Roll Intelligence + Occult (Diff 9).",
            roll: {
                pool: ["Intelligence", "Occult"],
                diffLabel: "Difficulty 9",
                defaultDiff: 9
            }
        },
        3: {
            name: "Acidic Touch",
            desc: "Secrete acidic fluid. Corrodes metal.",
            system: "Spend 1 BP. Touch attack. Aggravated Damage = Blood spent.",
            roll: null
        },
        4: {
            name: "Atrophy",
            desc: "Wither a victim's limb.",
            system: "Roll Willpower (Diff 8) vs Victim's Stamina + Athletics (Diff 8). Net wins = useless limb.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "vs Stam + Ath (8)",
                defaultDiff: 8
            }
        },
        5: {
            name: "Turn to Dust",
            desc: "Age target rapidly. Mortals dust; Vampires take 1 Agg per 10 years (1 success).",
            system: "Roll Intelligence + Medicine (Diff 8).",
            roll: {
                pool: ["Intelligence", "Medicine"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        }
    }
};
