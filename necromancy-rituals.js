/**
 * REVISED EDITION NECROMANCY RITUALS DATA
 * Source: Vampire: The Masquerade Revised Edition Core Rulebook
 * Stores detailed information for Necromancy Rituals by Level.
 * Standard Roll: Intelligence + Occult (Difficulty 3 + Level, Max 9).
 */

export const NECROMANCY_RITUALS = {
    1: {
        "Call of the Hungry Dead": {
            name: "Call of the Hungry Dead",
            desc: "Surrounds the victim with maddening sounds from across the Shroud, rendering them unable to hear intelligible speech and potentially driving them briefly mad.",
            system: "Requires burning a hair from the target's head. Victim hears howling/screaming from the Underworld.",
            level: 1
        }
    },
    2: {
        "Eyes of the Grave": {
            name: "Eyes of the Grave",
            desc: "Causes the victim to experience blinding visions of her own death for a week.",
            system: "Victim must make a Courage roll (Difficulty 7) to avoid being reduced to quivering panic due to the visions.",
            level: 2
        }
    },
    3: {
        "Ritual of the Unearthed Fetter": {
            name: "Ritual of the Unearthed Fetter",
            desc: "Attunes a fingerbone from a specific wraith's skeleton to become a supernatural fetter.",
            system: "Allows the necromancer to track the spirit and use Sepulchre Path powers more easily against it.",
            level: 3
        }
    },
    4: {
        "Cadaver's Touch": {
            name: "Cadaver's Touch",
            desc: "Transforms the victim into a cold, clammy corpse-like figure by chanting over a melting wax effigy.",
            system: "Increases the difficulty of all Social rolls for the victim by two.",
            level: 4
        }
    },
    5: {
        "Grasp the Ghostly": {
            name: "Grasp the Ghostly",
            desc: "Allows the vampire to withdraw an object from the Underworld into the real world for one year.",
            system: "The object must be replaced with a material item of roughly equal mass.",
            level: 5
        }
    }
};
