/**
 * REVISED EDITION NECROMANCY DATA
 * Source: Vampire: The Masquerade Revised Edition Core Rulebook
 * Contains the 3 core Necromancy paths: Sepulchre, Bone, and Ash.
 */

export const NECROMANCY_DATA = {
    "The Sepulchre Path": {
        1: {
            name: "Insight",
            desc: "Stare into a corpse's eyes to see the last thing the individual witnessed before death.",
            system: "Roll Perception + Occult. Difficulty 8 for mortals, 10 for supernatural creatures.",
            roll: {
                pool: ["Perception", "Occult"],
                diffLabel: "Diff 8 (Mortal) / 10 (Super)",
                defaultDiff: 8
            }
        },
        2: {
            name: "Summon Soul",
            desc: "Call a specific ghost from the Underworld to converse.",
            system: "Roll Perception + Occult (Difficulty 7). If unwilling, roll against Ghost's Willpower.",
            roll: {
                pool: ["Perception", "Occult"],
                diffLabel: "Diff 7 or vs Ghost WP",
                defaultDiff: 7
            }
        },
        3: {
            name: "Compel Soul",
            desc: "Force a summoned ghost to obey orders.",
            system: "Roll Manipulation + Occult (Difficulty = Ghost's Willpower). Duration depends on successes.",
            roll: {
                pool: ["Manipulation", "Occult"],
                diffLabel: "Target's Willpower",
                defaultDiff: 6
            }
        },
        4: {
            name: "Haunting",
            desc: "Bind a summoned ghost to a specific location or object, preventing it from leaving.",
            system: "Roll Manipulation + Occult (Difficulty = Ghost's Willpower).",
            roll: {
                pool: ["Manipulation", "Occult"],
                diffLabel: "Target's Willpower",
                defaultDiff: 6
            }
        },
        5: {
            name: "Torment",
            desc: "Inflict lethal damage on a ghost as if hitting them physically.",
            system: "Roll Stamina + Empathy (Difficulty = Ghost's Willpower). Each success deals 1 lethal damage.",
            roll: {
                pool: ["Stamina", "Empathy"],
                diffLabel: "Target's Willpower",
                defaultDiff: 6
            }
        }
    },
    "The Bone Path": {
        1: {
            name: "Tremens",
            desc: "Cause a corpse to twitch, sit up, or open its eyes to shock observers.",
            system: "Spend 1 BP. Roll Dexterity + Occult (Difficulty 6).",
            roll: {
                pool: ["Dexterity", "Occult"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        2: {
            name: "Apprentice's Brooms",
            desc: "Animate a dead body to perform a simple, repetitive task (like digging).",
            system: "Spend 1 BP + 1 WP. Roll Wits + Occult (Difficulty 7).",
            roll: {
                pool: ["Wits", "Occult"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        3: {
            name: "Shambling Hordes",
            desc: "Raise a group of zombies to fight or guard a location.",
            system: "Spend 1 WP (to activate) + 1 BP per corpse. Zombies wait/guard indefinitely.",
            roll: null
        },
        4: {
            name: "Soul Stealing",
            desc: "Rip the soul out of a living victim's body, leaving it catatonic.",
            system: "Roll Willpower (Difficulty 6). Successes determine duration (hours).",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        5: {
            name: "Daemonic Possession",
            desc: "Insert a soul (ghost or free-floating) into a fresh corpse (<30 mins dead) to inhabit it permanently.",
            system: "Requires fresh corpse. Soul inhabits body permanently.",
            roll: null
        }
    },
    "The Ash Path": {
        1: {
            name: "Shroudsight",
            desc: "See ghosts and the landscape of the Underworld.",
            system: "Roll Perception + Alertness (Difficulty 7).",
            roll: {
                pool: ["Perception", "Alertness"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        2: {
            name: "Lifeless Tongues",
            desc: "Converse effortlessly with denizens of the Underworld.",
            system: "Spend 1 WP. Roll Perception + Occult (Difficulty 6).",
            roll: {
                pool: ["Perception", "Occult"],
                diffLabel: "Difficulty 6",
                defaultDiff: 6
            }
        },
        3: {
            name: "Dead Hand",
            desc: "Physically grasp, strike, or manipulate objects/entities within the Underworld.",
            system: "Spend 1 WP. Roll Wits + Occult (Difficulty 7).",
            roll: {
                pool: ["Wits", "Occult"],
                diffLabel: "Difficulty 7",
                defaultDiff: 7
            }
        },
        4: {
            name: "Ex Nihilo",
            desc: "Physically enter the Underworld.",
            system: "Draw doorway. Spend 1 BP + 1 WP. Roll Stamina + Occult (Difficulty 8).",
            roll: {
                pool: ["Stamina", "Occult"],
                diffLabel: "Difficulty 8",
                defaultDiff: 8
            }
        },
        5: {
            name: "Shroud Mastery",
            desc: "Thin or thicken the barrier between living and dead to facilitate/hinder travel.",
            system: "Spend 2 WP. Roll Willpower (Difficulty 9). Successes modify Shroud rating.",
            roll: {
                pool: ["Willpower"],
                diffLabel: "Difficulty 9",
                defaultDiff: 9
            }
        }
    }
};
