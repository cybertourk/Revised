/**
 * npc-animal.js
 * Template definition for Revised Edition Animals (Bestiary)
 */

import { ATTRIBUTES, ABILITIES } from "./data.js";

// --- REVISED EDITION BESTIARY DATABASE ---
const ANIMAL_SPECIES = {
    "Alligator": {
        attr: { Strength: 4, Dexterity: 2, Stamina: 4, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 2, Athletics: 2, Brawl: 2, Stealth: 3 },
        willpower: 3,
        bloodPool: 5,
        health: [
            { l: 'OK', p: 0 }, { l: 'OK', p: 0 }, { l: 'OK', p: 0 },
            { l: '-1', p: -1 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-5', p: -5 }, { l: 'Incapacitated', p: 0 }
        ],
        notes: "Armor: 1 Soak die (Bash/Lethal). Attacks: Bite (7), Tail (6)."
    },
    "Bat": {
        attr: { Strength: 1, Dexterity: 3, Stamina: 2, Perception: 3, Intelligence: 1, Wits: 2 },
        abil: { Alertness: 3, Dodge: 3, Stealth: 2 },
        willpower: 2,
        bloodPool: 1, // 1/4 point technically
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-3', p: -3 }
        ],
        notes: "Fly at 25 mph. 4 bats = 1 blood point. Attack: Bite (1)."
    },
    "Bear": {
        attr: { Strength: 5, Dexterity: 2, Stamina: 5, Perception: 3, Intelligence: 2, Wits: 2 },
        abil: { Alertness: 3, Brawl: 3, Intimidation: 2, Stealth: 1 },
        willpower: 4,
        bloodPool: 5,
        health: [
            { l: 'OK', p: 0 }, { l: 'OK', p: 0 }, { l: 'OK', p: 0 },
            { l: '-1', p: -1 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-3', p: -3 }, { l: '-3', p: -3 }, { l: '-5', p: -5 },
            { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Claw (7), Bite (5)."
    },
    "Big Cat (Leopard/Jaguar)": {
        attr: { Strength: 4, Dexterity: 3, Stamina: 3, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 3, Intimidation: 4, Stealth: 3 },
        willpower: 5,
        bloodPool: 5,
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-2', p: -2 }, { l: '-5', p: -5 },
            { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Claw (4), Bite (5)."
    },
    "Big Cat (Tiger/Lion)": {
        attr: { Strength: 5, Dexterity: 3, Stamina: 4, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 3, Intimidation: 4, Stealth: 3 },
        willpower: 5,
        bloodPool: 5,
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-2', p: -2 }, { l: '-5', p: -5 },
            { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Claw (5), Bite (6)."
    },
    "Bird (Large)": {
        attr: { Strength: 2, Dexterity: 3, Stamina: 3, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 1, Dodge: 2, Intimidation: 2, Empathy: 4 },
        willpower: 3,
        bloodPool: 1, // 1/2 point
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-5', p: -5 }
        ],
        notes: "Hawks, Crows, Owls. Fly 25-50mph. Attacks: Claw (2), Bite (1 - desperation)."
    },
    "Cat (House)": {
        attr: { Strength: 1, Dexterity: 3, Stamina: 3, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 2, Dodge: 3, Intimidation: 2, Stealth: 4, Empathy: 2, Subterfuge: 2 },
        willpower: 3,
        bloodPool: 1,
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-2', p: -2 },
            { l: '-5', p: -5 }, { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Claw/Bite (1)."
    },
    "Dog (Large)": {
        attr: { Strength: 4, Dexterity: 3, Stamina: 3, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 3, Dodge: 3, Empathy: 2, Intimidation: 3, Stealth: 2 },
        willpower: 5,
        bloodPool: 2,
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-2', p: -2 }, { l: '-5', p: -5 }
        ],
        notes: "Mastiff/Hound. Attacks: Bite (5), Claw (4)."
    },
    "Horse": {
        attr: { Strength: 4, Dexterity: 2, Stamina: 3, Perception: 3, Intelligence: 2, Wits: 2 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 1, Empathy: 2, Intimidation: 2 },
        willpower: 2,
        bloodPool: 3,
        health: [
            { l: 'OK', p: 0 }, { l: 'OK', p: 0 },
            { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-2', p: -2 },
            { l: '-5', p: -5 }, { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Trample/Kick (6), Bite (3)."
    },
    "Horse (Large Stallion)": {
        attr: { Strength: 6, Dexterity: 2, Stamina: 5, Perception: 3, Intelligence: 2, Wits: 2 },
        abil: { Alertness: 3, Athletics: 2, Brawl: 3, Empathy: 2, Intimidation: 2 },
        willpower: 4,
        bloodPool: 4,
        health: [
            { l: 'OK', p: 0 }, { l: 'OK', p: 0 },
            { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-2', p: -2 },
            { l: '-5', p: -5 }, { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Trample/Kick (7), Bite (3)."
    },
    "Pig": {
        attr: { Strength: 2, Dexterity: 2, Stamina: 4, Perception: 3, Intelligence: 2, Wits: 2 },
        abil: { Alertness: 2, Athletics: 2, Brawl: 2, Intimidation: 2 },
        willpower: 3,
        bloodPool: 3,
        health: [
            { l: 'OK', p: 0 }, { l: 'OK', p: 0 },
            { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-4', p: -4 },
            { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Bite (2)."
    },
    "Boar": {
        attr: { Strength: 4, Dexterity: 2, Stamina: 5, Perception: 3, Intelligence: 2, Wits: 2 },
        abil: { Alertness: 2, Athletics: 2, Brawl: 2, Intimidation: 2 },
        willpower: 3,
        bloodPool: 4,
        health: [
            { l: 'OK', p: 0 }, { l: 'OK', p: 0 },
            { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-2', p: -2 }, { l: '-4', p: -4 },
            { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Bite (4), Gore (5)."
    },
    "Rat": {
        attr: { Strength: 1, Dexterity: 2, Stamina: 3, Perception: 2, Intelligence: 1, Wits: 2 },
        abil: { Alertness: 2, Brawl: 1, Dodge: 3, Stealth: 3 },
        willpower: 4,
        bloodPool: 1, // 1/4 point
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-5', p: -5 }
        ],
        notes: "Attack: Bite (1)."
    },
    "Wolf": {
        attr: { Strength: 3, Dexterity: 3, Stamina: 3, Perception: 3, Intelligence: 2, Wits: 3 },
        abil: { Alertness: 2, Athletics: 1, Brawl: 3, Dodge: 1, Stealth: 2 },
        willpower: 3,
        bloodPool: 2,
        health: [
            { l: 'OK', p: 0 }, { l: '-1', p: -1 }, { l: '-1', p: -1 },
            { l: '-3', p: -3 }, { l: '-5', p: -5 }, { l: 'Incapacitated', p: 0 }
        ],
        notes: "Attacks: Bite (4), Claw (4)."
    },
    
    // --- PACKS & SWARMS (Treated as Single Entity) ---
    "Swarm: Small Bugs": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 }, // Abstracted
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(5).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 1. Init: 2. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Large Bugs": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(7).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 2. Init: 3. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Flying Bugs": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(5).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 2. Init: 4. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Birds/Bats": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(9).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 4. Init: 5. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Rats": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(7).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 2. Init: 3. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Large Rats": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(9).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 4. Init: 3. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Feral Cats": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(6).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 4. Init: 6. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    },
    "Swarm: Wild Dogs": {
        attr: { Strength: 0, Dexterity: 0, Stamina: 0, Perception: 0, Intelligence: 0, Wits: 0 },
        abil: {},
        willpower: 0,
        bloodPool: 0,
        health: Array(15).fill({ l: 'Health', p: 0 }),
        notes: "Damage: 6. Init: 4. Immune to pistols/small melee (1 dmg only). Dispersed at 0 Health."
    }
};

// --- COSTS FOR EDITING ---
const XP_COSTS = {
    attribute: 5,        
    ability: 3,          
    willpower: 2,        
    discipline_phys: 15,
    newDiscipline: 20
};

const FB_COSTS = {
    attribute: 5,
    ability: 2,
    willpower: 1,
    discipline: 10
};

// --- TEMPLATE DEFINITION ---
export const AnimalTemplate = {
    type: "Animal",
    label: "Animal / Beast",
    
    features: {
        disciplines: true, // Needed in DOM so we can toggle visibility
        bloodPool: true,
        virtues: false,      
        backgrounds: false,
        humanity: false      
    },

    defaults: {
        template: "animal",
        species: "",
        ghouled: false,
        domitor: "",
        attributes: { 
            Strength: 1, Dexterity: 1, Stamina: 1, 
            Charisma: 1, Manipulation: 1, Appearance: 1, 
            Perception: 1, Intelligence: 1, Wits: 1 
        },
        abilities: {},
        disciplines: {}, // Only if ghouled
        healthConfig: [], // Custom health tracks
        willpower: 1,
        bloodPool: 1,
        bio: { Description: "", Notes: "" },
        merits: {},
        flaws: {}
    },

    getPriorities: () => ({ attr: null, abil: null }), // No prioritization for animals, direct stats

    getVirtueLimit: () => 10,

    // RESTORED: Strict Stat Locking
    validateChange: (type, key, newVal, currentVal) => {
        // STRICT LOCK: Animal stats are fixed by species preset in Creation Mode
        // Return a string error message to block the change.
        return "Animal stats are fixed by species preset. Use XP/Freebie Mode to modify.";
    },

    // RESTORED: Cost Calculation Logic
    getCost: (mode, type, key, current, target, data) => {
        const delta = target - current;
        if (delta <= 0) return 0;

        if (mode === 'xp') {
            if (delta > 1) return -1;
            if (type === 'attributes') return target * XP_COSTS.attribute;
            if (type === 'abilities') return (current === 0) ? XP_COSTS.newAbility : target * XP_COSTS.ability;
            if (type === 'willpower') return current * XP_COSTS.willpower;
            if (type === 'disciplines') return current * XP_COSTS.discipline_phys;
        } 
        else if (mode === 'freebie') {
            let mult = 0;
            if (type === 'attributes') mult = FB_COSTS.attribute;
            else if (type === 'abilities') mult = FB_COSTS.ability;
            else if (type === 'willpower') mult = FB_COSTS.willpower;
            else if (type === 'disciplines') mult = FB_COSTS.discipline;
            
            return delta * mult;
        }
        return 0;
    },

    renderIdentityExtras: (data) => {
        const speciesOpts = Object.keys(ANIMAL_SPECIES).sort().map(s => 
            `<option value="${s}" ${data.species === s ? 'selected' : ''}>${s}</option>`
        ).join('');

        return `
            <div class="space-y-6 border-t border-[#333] pt-4 mt-2">
                <div>
                    <label class="label-text text-[#d4af37]">Species / Swarm</label>
                    <select id="npc-species" class="w-full bg-transparent border-b border-[#444] text-white p-1 text-sm font-bold focus:border-[#d4af37] focus:outline-none transition-colors">
                        <option value="" class="bg-black">-- Select Species --</option>
                        ${speciesOpts}
                    </select>
                </div>

                <div class="flex items-center gap-3 bg-[#111] p-2 border border-[#333]">
                    <input type="checkbox" id="npc-ghoul-toggle" ${data.ghouled ? 'checked' : ''} class="accent-[#8b0000] w-4 h-4">
                    <div>
                        <label for="npc-ghoul-toggle" class="text-[#d4af37] font-bold text-xs uppercase cursor-pointer">Ghouled Animal</label>
                        <div class="text-[9px] text-gray-500">Gains +1 Potence, Min 2 Blood, Trained Abilities. (Not for Swarms)</div>
                    </div>
                </div>
                
                ${data.ghouled ? `
                <div>
                    <label class="label-text text-[#d4af37]">Domitor</label>
                    <input type="text" id="npc-domitor" value="${data.domitor || ''}" class="w-full bg-transparent border-b border-[#444] text-white p-1 text-sm focus:border-[#d4af37] focus:outline-none">
                </div>
                ` : ''}
                
                <div>
                    <label class="label-text text-[#d4af37]">Natural Weapons / Notes</label>
                    <textarea id="npc-nat-weapons" class="npc-input w-full h-20 bg-transparent border-b border-[#444] text-white p-1 text-xs focus:border-[#d4af37] outline-none transition-colors" placeholder="Stats will appear here...">${data.naturalWeapons || ''}</textarea>
                </div>
            </div>
        `;
    },

    renderBio: (data) => {
        const getVal = (field) => (data.bio && data.bio[field]) ? data.bio[field] : '';

        return `
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-4">
                    <div class="flex justify-between items-center border-b border-[#333] pb-1">
                        <label class="label-text text-[#d4af37] w-1/3">Scales / Fur / Skin</label>
                        <input type="text" class="npc-bio w-2/3 bg-transparent text-white text-xs text-right focus:outline-none" data-field="Skin" value="${getVal('Skin')}">
                    </div>
                    <div class="flex justify-between items-center border-b border-[#333] pb-1">
                        <label class="label-text text-[#d4af37] w-1/3">Eye Color</label>
                        <input type="text" class="npc-bio w-2/3 bg-transparent text-white text-xs text-right focus:outline-none" data-field="Eyes" value="${getVal('Eyes')}">
                    </div>
                    <div class="flex justify-between items-center border-b border-[#333] pb-1">
                        <label class="label-text text-[#d4af37] w-1/3">Height / Length</label>
                        <input type="text" class="npc-bio w-2/3 bg-transparent text-white text-xs text-right focus:outline-none" data-field="Height" value="${getVal('Height')}">
                    </div>
                    <div class="flex justify-between items-center border-b border-[#333] pb-1">
                        <label class="label-text text-[#d4af37] w-1/3">Weight</label>
                        <input type="text" class="npc-bio w-2/3 bg-transparent text-white text-xs text-right focus:outline-none" data-field="Weight" value="${getVal('Weight')}">
                    </div>
                      <div class="flex justify-between items-center border-b border-[#333] pb-1">
                        <label class="label-text text-[#d4af37] w-1/3">Sex</label>
                        <input type="text" class="npc-bio w-2/3 bg-transparent text-white text-xs text-right focus:outline-none" data-field="Sex" value="${getVal('Sex')}">
                    </div>
                </div>
                <div class="space-y-4">
                    <div>
                        <label class="label-text text-[#d4af37] mb-2">Description / Markings</label>
                        <textarea id="npc-desc" class="w-full h-32 bg-transparent border border-[#444] text-white p-2 text-xs focus:border-[#d4af37] outline-none resize-none">${data.bio.Description||''}</textarea>
                    </div>
                    <div>
                        <label class="label-text text-[#d4af37] mb-2">Behavior Notes</label>
                        <textarea id="npc-notes" class="w-full h-32 bg-transparent border border-[#444] text-white p-2 text-xs focus:border-[#d4af37] outline-none resize-none">${data.bio.Notes||''}</textarea>
                    </div>
                </div>
            </div>
        `;
    },

    setupListeners: (parent, data, updateCallback) => {
        const spEl = parent.querySelector('#npc-species');
        const ghoulEl = parent.querySelector('#npc-ghoul-toggle');
        const domEl = parent.querySelector('#npc-domitor');
        const weapEl = parent.querySelector('#npc-nat-weapons');

        // Helper to toggle Discipline UI visibility
        const toggleDiscUI = (show) => {
            const listEl = parent.querySelector('#npc-disc-list');
            const selectEl = parent.querySelector('#npc-disc-select');
            
            if (listEl) {
                listEl.style.display = show ? 'block' : 'none';
                const header = listEl.previousElementSibling;
                if (header && header.tagName === 'H3') header.style.display = show ? 'block' : 'none';
            }
            if (selectEl) {
                if (selectEl.parentNode) selectEl.parentNode.style.display = show ? 'block' : 'none';
            }
        };

        // Initialize visibility
        toggleDiscUI(data.ghouled);

        if (spEl) {
            spEl.onchange = (e) => {
                const species = e.target.value;
                data.species = species;
                
                const stats = ANIMAL_SPECIES[species];
                if (stats) {
                    // Apply Defaults
                    data.attributes = JSON.parse(JSON.stringify(stats.attr));
                    data.abilities = JSON.parse(JSON.stringify(stats.abil));
                    data.willpower = stats.willpower;
                    data.bloodPool = stats.bloodPool;
                    data.healthConfig = JSON.parse(JSON.stringify(stats.health));
                    
                    if (stats.notes) {
                        data.naturalWeapons = stats.notes;
                        if(weapEl) weapEl.value = stats.notes;
                    }
                }
                
                // Re-apply ghoul bonuses if checked
                if (data.ghouled) applyGhoulBonuses(data);

                updateCallback();
            };
        }

        if (ghoulEl) {
            ghoulEl.onchange = (e) => {
                data.ghouled = e.target.checked;
                toggleDiscUI(data.ghouled);
                
                if (data.ghouled) applyGhoulBonuses(data);
                else {
                    // Revert to species default if possible
                    if (data.species && ANIMAL_SPECIES[data.species]) {
                        data.bloodPool = ANIMAL_SPECIES[data.species].bloodPool;
                        if (data.disciplines) delete data.disciplines.Potence;
                        // Revert Willpower? Hard to say if they spent XP. 
                        // Simplified: Reset to species base
                        data.willpower = ANIMAL_SPECIES[data.species].willpower;
                    }
                }
                updateCallback(); // Triggers re-render to show/hide domitor field
            };
        }

        if (domEl) {
            domEl.onchange = (e) => data.domitor = e.target.value;
        }
        
        if (weapEl) {
            weapEl.onchange = (e) => data.naturalWeapons = e.target.value;
        }
    }
};

function applyGhoulBonuses(data) {
    // Revised Core p. 273 (Ghouls):
    // "Ghouls gain one dot of Potence."
    // "Ghouls... possess a small Blood Pool... maximum of 2 Blood Points." (Often interpreted as 2 over species base or min 2)
    // "Ghouls can also soak lethal damage."
    
    // NOTE: Swarms shouldn't be ghouled mechanically in the same way, but we allow it for weirdness.
    if (data.bloodPool < 2) data.bloodPool = 2;
    if (!data.disciplines) data.disciplines = {};
    if (!data.disciplines.Potence) data.disciplines.Potence = 1;
}
