/**
 * REVISED EDITION THAUMATURGY RITUALS DATA
 * Source: Vampire: The Masquerade Revised Edition Core Rulebook
 * Stores detailed information for Thaumaturgy Rituals by Level.
 */

export const THAUMATURGY_RITUALS = {
    1: {
        "Defense of the Sacred Haven": {
            name: "Defense of the Sacred Haven",
            desc: "Prevents sunlight from entering a 20-foot radius area as long as the caster remains inside. Requires one hour and one blood point to perform.",
            system: "Lasts as long as the caster stays within the 20-foot radius.",
            level: 1
        },
        "Wake with Evening's Freshness": {
            name: "Wake with Evening's Freshness",
            desc: "Performed before sleeping, allows the Tremere to awaken instantly during the day if danger threatens.",
            system: "Bypasses the usual Humanity limit on dice pools for the first two turns upon waking.",
            level: 1
        },
        "Communicate with Kindred Sire": {
            name: "Communicate with Kindred Sire",
            desc: "Establish a telepathic communication link with own sire over any distance.",
            system: "Requires an item once owned by the sire. Allows mental conversation.",
            level: 1
        },
        "Deflection of Wooden Doom": {
            name: "Deflection of Wooden Doom",
            desc: "Protects the vampire from staking. The first stake that would pierce her heart disintegrates.",
            system: "Lasts until the next dawn or dusk. Only works on one stake per casting.",
            level: 1
        },
        "Devil's Touch": {
            name: "Devil's Touch",
            desc: "Curses a mortal to be repulsive and loathed by everyone they meet for one night.",
            system: "Requires placing a specific coin on the victim (often via sleight of hand). Victim suffers social ostracization.",
            level: 1
        }
    },
    2: {
        "Ward Versus Ghouls": {
            name: "Ward Versus Ghouls",
            desc: "Inscribes a glyph on an object that inflicts pain on ghouls who touch it.",
            system: "Inflicts three dice of lethal damage on any ghoul who touches the warded object.",
            level: 2
        },
        "Principal Focus of Vitae Infusion": {
            name: "Principal Focus of Vitae Infusion",
            desc: "Infuses a small object (like a coin) with one blood point.",
            system: "Vampire can swallow the object later to regain the stored vitae. The object is destroyed in the process.",
            level: 2
        }
    },
    3: {
        "Incorporeal Passage": {
            name: "Incorporeal Passage",
            desc: "The caster becomes immaterial, allowing her to walk through walls but leaving her vulnerable to sunlight.",
            system: "Roll Wits + Survival (difficulty 6) to determine duration. Caster is ghost-like and cannot interact physically.",
            level: 3
        },
        "Pavis of Foul Presence": {
            name: "Pavis of Foul Presence",
            desc: "Reflects the effects of the Presence Discipline back upon an attacker.",
            system: "Preparatory ritual. If Presence is used against the Tremere before sunrise, the effect targets the attacker instead.",
            level: 3
        }
    },
    4: {
        "Bone of Lies": {
            name: "Bone of Lies",
            desc: "Enchants a mortal bone that compels the holder to tell the truth.",
            system: "The holder must answer truthfully. If they attempt to lie, the bone turns black and is consumed.",
            level: 4
        }
    },
    5: {
        "Blood Contract": {
            name: "Blood Contract",
            desc: "Creates an unbreakable agreement signed in blood.",
            system: "If violated, the breaker suffers unhealable damage and blood loss daily until the contract is fulfilled or the document is burned.",
            level: 5
        }
    }
};
