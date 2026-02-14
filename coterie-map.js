import { showNotification } from "./ui-common.js";

// --- MERMAID INIT ---
let mermaidInitialized = false;

async function initMermaid() {
    if (mermaidInitialized) return;
    try {
        if (!window.mermaid) {
            const module = await import('https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs');
            window.mermaid = module.default;
        }
        window.mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
                primaryColor: '#2d2d2d',
                primaryTextColor: '#fff',
                primaryBorderColor: '#8a0303',
                lineColor: '#aaa',
                secondaryColor: '#000',
                tertiaryColor: '#fff',
                fontFamily: 'IM Fell English'
            },
            securityLevel: 'loose',
            flowchart: { curve: 'basis', htmlLabels: true }
        });
        mermaidInitialized = true;
    } catch (e) {
        console.error("Mermaid Init Failed:", e);
        showNotification("Failed to load Graph Engine");
    }
}

// --- STATE ---
let mapState = {
    currentMapId: 'main', 
    mapHistory: [],       
    availableMaps: [],    
    expandedGroups: new Set(), 
    zoom: 1.0,
    editingNodeId: null,
    filterCharId: null
};

// --- GLOBAL CLICK HANDLER ---
window.cmapNodeClick = (id) => {
    // console.log("Node Clicked:", id);
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId] || { characters: [], relationships: [] };
    const char = currentData.characters.find(c => c.id === id);
    
    if (!char) return;

    if (char.type === 'group') {
        window.cmapToggleGroup(id);
    } else {
        mapState.editingNodeId = id;
        const nameInput = document.getElementById('cmap-edit-name');
        const clanInput = document.getElementById('cmap-edit-clan');
        const typeInput = document.getElementById('cmap-edit-type');
        const modal = document.getElementById('cmap-edit-modal');
        
        if(nameInput) nameInput.value = char.name;
        if(clanInput) clanInput.value = char.clan || "";
        if(typeInput) typeInput.value = char.type;
        if(modal) modal.classList.remove('hidden');
    }
};

// --- DATA HELPERS (LOCAL STATE) ---
function getLocalMaps() {
    if (!window.state.coterieMaps) window.state.coterieMaps = {};
    if (!window.state.coterieMaps['main']) {
        window.state.coterieMaps['main'] = { characters: [], relationships: [] };
    }
    return window.state.coterieMaps;
}

function saveLocalMap() {
    if (window.updatePools) window.updatePools(); 
    if (window.performSave) {
        window.performSave(true); 
    } else if (window.handleSaveClick) {
        window.handleSaveClick(); 
    }
}

// --- MAIN RENDERER ---
export async function renderCoterieMap(container) {
    await initMermaid();

    container.innerHTML = `
        <div class="flex h-full bg-[#0a0a0a] text-[#e5e5e5] font-sans overflow-hidden relative border border-[#333]">
            <!-- LEFT COLUMN: Editor -->
            <aside class="w-1/3 min-w-[250px] max-w-[350px] flex flex-col gap-4 h-full border-r border-[#333] bg-[#111] p-4 overflow-y-auto custom-scrollbar">
                
                <!-- MAP CONTROLS -->
                <div class="bg-[#1a1a1a] border border-[#333] rounded p-4 shadow-lg shrink-0">
                    <h3 class="text-xs font-cinzel font-bold text-gold border-b border-[#333] pb-2 mb-3 uppercase flex justify-between items-center">
                        <span>Active Map</span>
                        <div class="flex gap-2">
                             <button id="cmap-cleanup-map" class="text-xs text-gray-500 hover:text-white" title="Fix Orphans / Cleanup"><i class="fas fa-broom"></i></button>
                             <button id="cmap-delete-map" class="text-xs text-red-500 hover:text-white" title="Delete current map"><i class="fas fa-trash"></i></button>
                        </div>
                    </h3>
                    
                    <div class="flex gap-2 mb-3 items-center">
                        <select id="cmap-select-map" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] w-full outline-none focus:border-gold"></select>
                        <button id="cmap-new-map-btn" class="bg-[#333] hover:bg-[#444] border border-[#444] text-white px-2 py-1 rounded text-xs transition-colors shrink-0" title="Create New Map"><i class="fas fa-plus"></i></button>
                    </div>

                    <!-- FILTER DROPDOWN -->
                    <div class="mb-3">
                        <label class="text-[9px] text-gray-500 uppercase font-bold block mb-1">Filter View (POV)</label>
                        <select id="cmap-filter-char" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] w-full outline-none focus:border-blue-500">
                            <option value="">-- Show All --</option>
                        </select>
                    </div>

                    <div id="cmap-breadcrumbs" class="text-[10px] text-gray-400 font-mono mb-1 hidden">
                        <button id="cmap-nav-up" class="text-blue-400 hover:text-white mr-2"><i class="fas fa-level-up-alt mr-1"></i> Back to Parent</button>
                        <span id="cmap-current-label" class="text-gold font-bold"></span>
                    </div>
                </div>

                <!-- 1. Add Character / Group -->
                <div class="bg-[#1a1a1a] border border-[#333] rounded p-4 shadow-lg shrink-0">
                    <h3 class="text-xs font-cinzel font-bold text-gray-300 border-l-4 border-[#8a0303] pl-2 mb-3 uppercase">Add Node</h3>
                    
                    <div class="grid grid-cols-2 gap-2 mb-3">
                        <input type="text" id="cmap-name" placeholder="Name" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] focus:border-[#8a0303] outline-none col-span-2">
                        <input type="text" id="cmap-clan" placeholder="Clan/Desc" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] focus:border-[#8a0303] outline-none">
                        <select id="cmap-type" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] focus:border-[#8a0303] outline-none">
                            <option value="pc">PC</option>
                            <option value="npc">NPC</option>
                            <option value="group">Group</option> 
                        </select>
                        <select id="cmap-parent-group" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] focus:border-[#8a0303] outline-none col-span-2 hidden">
                            <option value="">-- No Parent Group --</option>
                        </select>
                    </div>
                    <button id="cmap-add-char" class="w-full bg-[#8a0303] hover:bg-[#6d0202] text-white font-bold py-1.5 rounded text-[10px] uppercase tracking-wider transition-colors">
                        <i class="fas fa-plus mr-2"></i>ADD
                    </button>

                    <ul id="cmap-char-list" class="mt-4 space-y-1 max-h-60 overflow-y-auto custom-scrollbar"></ul>
                </div>

                <!-- 2. Add Relationship -->
                <div class="bg-[#1a1a1a] border border-[#333] rounded p-4 shadow-lg shrink-0">
                    <h3 class="text-xs font-cinzel font-bold text-gray-300 border-l-4 border-[#8a0303] pl-2 mb-3 uppercase">Connect</h3>
                    
                    <div class="space-y-3 mb-4">
                        <div class="flex gap-2 items-center">
                            <select id="cmap-source" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] w-full outline-none"></select>
                            <i class="fas fa-arrow-right text-gray-500 text-xs"></i>
                            <select id="cmap-target" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] w-full outline-none"></select>
                        </div>
                        
                        <select id="cmap-rel-type" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] w-full outline-none">
                            <option value="social">Social (Solid)</option>
                            <option value="boon">Boon/Debt (Dotted)</option>
                            <option value="blood">Blood Bond (Thick)</option>
                        </select>

                        <input type="text" id="cmap-label" placeholder="Label (e.g. Sire of)" class="bg-[#262626] border border-[#404040] text-white p-2 rounded text-[10px] w-full outline-none">
                    </div>

                    <button id="cmap-add-rel" class="w-full bg-[#334155] hover:bg-[#1e293b] text-white font-bold py-1.5 rounded text-[10px] uppercase tracking-wider transition-colors">
                        <i class="fas fa-link mr-2"></i>Connect
                    </button>

                    <ul id="cmap-rel-list" class="mt-4 space-y-1 max-h-40 overflow-y-auto custom-scrollbar"></ul>
                </div>
            </aside>

            <!-- RIGHT COLUMN: Visualization -->
            <section class="flex-1 bg-[#050505] relative flex flex-col overflow-hidden">
                
                <!-- Toolbar -->
                <div class="absolute top-4 right-4 z-10 flex gap-2 bg-black/50 p-1 rounded backdrop-blur border border-[#333]">
                    <button id="cmap-zoom-out" class="w-6 h-6 flex items-center justify-center bg-[#222] hover:bg-[#333] text-white rounded font-bold transition-colors text-xs">-</button>
                    <button id="cmap-reset-zoom" class="w-6 h-6 flex items-center justify-center bg-[#222] hover:bg-[#333] text-white rounded font-bold transition-colors text-xs"><i class="fas fa-compress"></i></button>
                    <button id="cmap-zoom-in" class="w-6 h-6 flex items-center justify-center bg-[#222] hover:bg-[#333] text-white rounded font-bold transition-colors text-xs">+</button>
                </div>

                <!-- Canvas -->
                <div class="flex-1 overflow-auto p-4 flex items-center justify-center bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:20px_20px]">
                    <div id="mermaid-wrapper" class="origin-center transition-transform duration-200">
                        <div id="mermaid-container" class="mermaid"></div>
                    </div>
                </div>

                <!-- Legend -->
                <div class="bg-[#111] text-gray-400 text-[9px] p-2 text-center border-t border-[#333] uppercase font-bold tracking-wider">
                    <span class="mr-4"><i class="fas fa-minus text-gray-500"></i> Social</span>
                    <span class="mr-4"><i class="fas fa-ellipsis-h text-gray-500"></i> Boon</span>
                    <span class="mr-4"><i class="fas fa-minus text-white font-black border-b-2 border-white"></i> Bond</span>
                    <span class="text-blue-400"><i class="fas fa-layer-group"></i> Group</span>
                </div>
            </section>

            <!-- MOVE MODAL -->
            <div id="cmap-move-modal" class="hidden absolute inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
                <div class="bg-[#1a1a1a] border border-blue-500 p-4 w-64 shadow-2xl rounded">
                    <h4 class="text-blue-400 font-cinzel font-bold text-sm mb-3 border-b border-[#333] pb-1 uppercase">Move To Group</h4>
                    <select id="cmap-move-select" class="w-full bg-[#111] border border-[#444] text-white p-2 rounded mb-4 text-xs outline-none focus:border-blue-500">
                        <option value="">-- Root (No Group) --</option>
                    </select>
                    <div class="flex justify-end gap-2">
                        <button onclick="document.getElementById('cmap-move-modal').classList.add('hidden')" class="px-3 py-1 text-[10px] uppercase font-bold text-gray-400 hover:text-white border border-[#444] rounded">Cancel</button>
                        <button id="cmap-move-save" class="px-3 py-1 text-[10px] uppercase font-bold bg-blue-600 text-white hover:bg-blue-500 rounded">Move</button>
                    </div>
                </div>
            </div>

            <!-- EDIT NODE MODAL -->
            <div id="cmap-edit-modal" class="hidden absolute inset-0 bg-black/80 flex items-center justify-center z-50 backdrop-blur-sm">
                <div class="bg-[#1a1a1a] border border-[#8a0303] p-4 w-64 shadow-2xl rounded">
                    <h4 class="text-[#8a0303] font-cinzel font-bold text-sm mb-3 border-b border-[#333] pb-1 uppercase">Edit Node</h4>
                    <div class="space-y-3 mb-4">
                        <input type="text" id="cmap-edit-name" class="w-full bg-[#111] border border-[#444] text-white p-2 rounded text-xs outline-none focus:border-[#8a0303]" placeholder="Name">
                        <input type="text" id="cmap-edit-clan" class="w-full bg-[#111] border border-[#444] text-white p-2 rounded text-xs outline-none focus:border-[#8a0303]" placeholder="Clan / Type / Desc">
                        <select id="cmap-edit-type" class="w-full bg-[#111] border border-[#444] text-white p-2 rounded text-xs outline-none focus:border-[#8a0303]">
                            <option value="pc">PC</option>
                            <option value="npc">NPC</option>
                            <option value="group">Group</option>
                        </select>
                    </div>
                    <div class="flex justify-end gap-2">
                        <button onclick="document.getElementById('cmap-edit-modal').classList.add('hidden')" class="px-3 py-1 text-[10px] uppercase font-bold text-gray-400 hover:text-white border border-[#444] rounded">Cancel</button>
                        <button id="cmap-edit-save" class="px-3 py-1 text-[10px] uppercase font-bold bg-[#8a0303] text-white hover:bg-[#6d0202] rounded">Save</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    setupMapListeners();
    loadMapList();
    refreshMapUI();
}

function setupMapListeners() {
    const safeBind = (id, event, fn) => {
        const el = document.getElementById(id);
        if (el) el.addEventListener(event.replace(/^on/, ''), fn);
    };

    safeBind('cmap-add-char', 'click', addCharacter);
    safeBind('cmap-add-rel', 'click', addRelationship);
    safeBind('cmap-new-map-btn', 'click', createNewMap);
    safeBind('cmap-delete-map', 'click', deleteCurrentMap);
    safeBind('cmap-cleanup-map', 'click', cleanupOrphans);
    
    const mapSelect = document.getElementById('cmap-select-map');
    if(mapSelect) mapSelect.onchange = (e) => switchMap(e.target.value);
    
    safeBind('cmap-nav-up', 'click', navigateUp);
    
    const filterSelect = document.getElementById('cmap-filter-char');
    if(filterSelect) filterSelect.onchange = (e) => {
        mapState.filterCharId = e.target.value;
        renderMermaidChart();
    };

    const typeEl = document.getElementById('cmap-type');
    if (typeEl) {
        typeEl.onchange = (e) => {
            const grp = document.getElementById('cmap-parent-group');
            if(grp) grp.classList.remove('hidden');
        };
    }

    const wrapper = document.getElementById('mermaid-wrapper');
    safeBind('cmap-zoom-in', 'click', () => { mapState.zoom = Math.min(mapState.zoom + 0.1, 3.0); if(wrapper) wrapper.style.transform = `scale(${mapState.zoom})`; });
    safeBind('cmap-zoom-out', 'click', () => { mapState.zoom = Math.max(mapState.zoom - 0.1, 0.5); if(wrapper) wrapper.style.transform = `scale(${mapState.zoom})`; });
    safeBind('cmap-reset-zoom', 'click', () => { mapState.zoom = 1.0; if(wrapper) wrapper.style.transform = `scale(1)`; });

    safeBind('cmap-move-save', 'click', () => {
        const charId = mapState.editingNodeId; 
        const newParent = document.getElementById('cmap-move-select').value || null;
        
        const maps = getLocalMaps();
        const currentData = maps[mapState.currentMapId];
        const char = currentData.characters.find(c => c.id === charId);
        
        if (char) {
            if (newParent === charId) { showNotification("Cannot put group inside itself."); return; }
            if (newParent) {
                const parent = currentData.characters.find(c => c.id === newParent);
                if (parent && parent.parent === charId) { showNotification("Loop detected."); return; }
            }
            
            char.parent = newParent;
            refreshMapUI();
            saveLocalMap();
            document.getElementById('cmap-move-modal').classList.add('hidden');
            showNotification("Node moved.");
        }
    });

    safeBind('cmap-edit-save', 'click', () => {
        const id = mapState.editingNodeId;
        const maps = getLocalMaps();
        const currentData = maps[mapState.currentMapId];
        const char = currentData.characters.find(c => c.id === id);
        
        if (char) {
            char.name = document.getElementById('cmap-edit-name').value.trim() || char.name;
            char.clan = document.getElementById('cmap-edit-clan').value.trim();
            char.type = document.getElementById('cmap-edit-type').value;
            
            document.getElementById('cmap-edit-modal').classList.add('hidden');
            refreshMapUI();
            saveLocalMap();
            showNotification("Node updated.");
        }
    });
}

// --- LOGIC ---

function loadMapList() {
    const maps = getLocalMaps();
    mapState.availableMaps = Object.keys(maps);
    updateMapSelect();
}

function updateMapSelect() {
    const sel = document.getElementById('cmap-select-map');
    if(!sel) return;
    
    sel.innerHTML = mapState.availableMaps.map(id => `<option value="${id}">${id}</option>`).join('');
    sel.value = mapState.currentMapId;
}

function createNewMap() {
    const name = prompt("New Map Name (ID):");
    if (!name) return;
    const id = name.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase();
    
    const maps = getLocalMaps();
    if (maps[id]) {
        showNotification("Map ID exists.");
        return;
    }
    
    maps[id] = { characters: [], relationships: [] };
    switchMap(id);
    saveLocalMap();
    
    mapState.availableMaps = Object.keys(maps);
    updateMapSelect();
}

function deleteCurrentMap() {
    if (mapState.currentMapId === 'main') {
        showNotification("Cannot delete 'main' map.");
        return;
    }
    if (!confirm(`Delete map '${mapState.currentMapId}' permanently?`)) return;
    
    const maps = getLocalMaps();
    delete maps[mapState.currentMapId];
    
    mapState.availableMaps = Object.keys(maps);
    switchMap('main');
    updateMapSelect();
    saveLocalMap();
    showNotification("Map Deleted.");
}

function cleanupOrphans() {
    if (!confirm("Remove invalid nodes?")) return;
    
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    const validIds = new Set(currentData.characters.map(c => c.id));
    
    currentData.characters.forEach(c => {
        if (c.parent && !validIds.has(c.parent)) {
            c.parent = null; 
        }
    });

    currentData.relationships = currentData.relationships.filter(r => {
        return validIds.has(r.source) && validIds.has(r.target);
    });
    
    refreshMapUI();
    saveLocalMap();
    showNotification("Cleanup Complete.");
}

function switchMap(mapId) {
    if (mapId === mapState.currentMapId) return;
    mapState.currentMapId = mapId;
    mapState.mapHistory = []; 
    
    const sel = document.getElementById('cmap-select-map');
    if(sel) sel.value = mapId;
    
    refreshMapUI();
}

window.cmapToggleGroup = (groupId) => {
    if (mapState.expandedGroups.has(groupId)) {
        mapState.expandedGroups.delete(groupId);
    } else {
        mapState.expandedGroups.add(groupId);
    }
    renderMermaidChart();
};

window.cmapOpenMoveModal = (id) => {
    mapState.editingNodeId = id; 
    const modal = document.getElementById('cmap-move-modal');
    const select = document.getElementById('cmap-move-select');
    
    if (!modal || !select) return;

    select.innerHTML = '<option value="">-- Root (No Group) --</option>';
    
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    const groups = currentData.characters.filter(c => c.type === 'group' && c.id !== id);
    
    groups.forEach(g => {
        select.innerHTML += `<option value="${g.id}">${g.name}</option>`;
    });

    const char = currentData.characters.find(c => c.id === id);
    if(char) select.value = char.parent || "";

    modal.classList.remove('hidden');
};

window.cmapOpenEditModal = (id) => {
    window.cmapNodeClick(id); 
};

// CODEX (Local)
window.cmapViewCodex = (id) => {
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    
    const char = currentData.characters.find(c => c.id === id);
    const rel = currentData.relationships[id]; 
    
    let codexId = "";
    let name = "";
    
    if (char) {
        codexId = char.codexId;
        name = char.name;
    } else if (rel) {
        codexId = rel.codexId;
        name = rel.label || "Relationship";
    }

    if (codexId) {
        if (window.viewCodex) window.viewCodex(codexId);
        else showNotification("Journal system not active.");
    } else {
        if (confirm(`Create Codex Entry for "${name}"?`)) {
            createLocalCodexEntry(id, char ? 'char' : 'rel', name);
        }
    }
};

function createLocalCodexEntry(mapId, type, name) {
    if (!window.state.codex) window.state.codex = [];
    
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    
    let entryType = 'Lore';
    if (type === 'char') {
        const char = currentData.characters.find(c => c.id === mapId);
        if (char && char.type === 'pc') entryType = 'PC';
        else entryType = 'NPC';
    }

    const newId = "cx_" + Date.now();
    const entry = {
        id: newId,
        name: name,
        type: entryType,
        tags: ['Map Auto-Gen'],
        desc: "", 
        image: null
    };
    
    window.state.codex.push(entry);
    
    if (type === 'char') {
        const char = currentData.characters.find(c => c.id === mapId);
        if(char) char.codexId = newId;
    } else {
        const rel = currentData.relationships[mapId];
        if(rel) rel.codexId = newId;
    }
    
    saveLocalMap();
    showNotification("Codex Entry Created.");
    if (window.viewCodex) window.viewCodex(newId);
}

// --- ADD/REMOVE ---

function addCharacter() {
    const nameInput = document.getElementById('cmap-name');
    const clanInput = document.getElementById('cmap-clan');
    const typeInput = document.getElementById('cmap-type');
    const parentSelect = document.getElementById('cmap-parent-group');
    
    const name = nameInput.value.trim();
    if (!name) return showNotification("Name required!");

    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];

    const id = name.replace(/[^a-zA-Z0-9_-]/g, '').toLowerCase() + '-' + Date.now().toString().slice(-4); 
    
    currentData.characters.push({ 
        id, 
        name, 
        clan: clanInput.value.trim(), 
        type: typeInput.value, 
        parent: parentSelect.value || null
    });
    
    nameInput.value = '';
    clanInput.value = '';
    parentSelect.value = '';
    
    refreshMapUI(); 
    saveLocalMap();
}

function addRelationship() {
    const source = document.getElementById('cmap-source').value;
    const target = document.getElementById('cmap-target').value;
    const type = document.getElementById('cmap-rel-type').value;
    const label = document.getElementById('cmap-label').value.trim();

    if (!source || !target) return showNotification("Select Nodes");
    if (source === target) return showNotification("Self-link invalid");

    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];

    currentData.relationships.push({ source, target, type, label });
    
    document.getElementById('cmap-label').value = '';
    refreshMapUI(); 
    saveLocalMap();
}

window.cmapRemoveChar = (id) => {
    if(!confirm("Remove node?")) return;
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    
    currentData.characters = currentData.characters.filter(c => c.id !== id);
    currentData.relationships = currentData.relationships.filter(r => r.source !== id && r.target !== id);
    
    refreshMapUI();
    saveLocalMap();
};

window.cmapRemoveRel = (idx) => {
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    currentData.relationships.splice(idx, 1);
    refreshMapUI();
    saveLocalMap();
};

// --- UI REFRESH ---

function refreshMapUI() {
    renderMermaidChart();
    updateDropdowns();
    updateLists();
}

function updateDropdowns() {
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];
    
    const sourceSelect = document.getElementById('cmap-source');
    const targetSelect = document.getElementById('cmap-target');
    const parentSelect = document.getElementById('cmap-parent-group');
    const filterSelect = document.getElementById('cmap-filter-char'); 

    if (!sourceSelect) return;

    let opts = '<option value="">-- Select --</option>';
    let groupOpts = '<option value="">-- No Parent Group --</option>';
    let filterOpts = '<option value="">-- Show All --</option>'; 

    currentData.characters.forEach(c => {
        opts += `<option value="${c.id}">${c.name}</option>`;
        if(c.type === 'group') groupOpts += `<option value="${c.id}">${c.name}</option>`;
        filterOpts += `<option value="${c.id}">${c.name}</option>`; 
    });

    sourceSelect.innerHTML = opts;
    targetSelect.innerHTML = opts;
    parentSelect.innerHTML = groupOpts;
    filterSelect.innerHTML = filterOpts;
}

function updateLists() {
    const charList = document.getElementById('cmap-char-list');
    const relList = document.getElementById('cmap-rel-list');
    
    if (!charList || !relList) return;
    
    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];

    // CHARACTERS
    const roots = currentData.characters.filter(c => !c.parent);
    let html = '';

    const renderItem = (c, level) => {
        const indent = level * 10;
        const icon = c.type === 'group' 
            ? (mapState.expandedGroups.has(c.id) ? 'fa-folder-open' : 'fa-folder') 
            : 'fa-user';
        
        return `
        <li class="flex justify-between items-center bg-[#222] p-1.5 rounded text-[10px] border border-[#333] mb-1" style="margin-left:${indent}px">
            <div class="flex items-center gap-2 cursor-pointer hover:text-white" onclick="window.cmapNodeClick('${c.id}')">
                <i class="fas ${icon} text-gray-500"></i>
                <span class="font-bold ${c.type === 'group' ? 'text-blue-400' : 'text-gray-300'}">${c.name}</span>
            </div>
            <div class="flex gap-1">
                <button onclick="window.cmapViewCodex('${c.id}')" class="text-purple-400 hover:text-white px-1"><i class="fas fa-book"></i></button>
                <button onclick="window.cmapOpenMoveModal('${c.id}')" class="text-gray-500 hover:text-white px-1"><i class="fas fa-arrows-alt"></i></button>
                <button onclick="window.cmapRemoveChar('${c.id}')" class="text-gray-600 hover:text-red-500 px-1"><i class="fas fa-trash"></i></button>
            </div>
        </li>`;
    };

    const renderTree = (parent, level) => {
         html += renderItem(parent, level);
         const children = currentData.characters.filter(c => c.parent === parent.id);
         children.forEach(child => renderTree(child, level + 1));
    };

    roots.forEach(root => renderTree(root, 0));
    charList.innerHTML = html;

    // RELATIONSHIPS
    relList.innerHTML = currentData.relationships.map((r, i) => {
        const sName = currentData.characters.find(c => c.id === r.source)?.name || r.source;
        const tName = currentData.characters.find(c => c.id === r.target)?.name || r.target;
        return `
        <li class="flex justify-between items-center bg-[#222] p-1.5 rounded text-[10px] border-b border-[#333]">
            <div class="flex gap-1 items-center flex-1 truncate">
                <span class="font-bold text-gray-400">${sName}</span>
                <i class="fas fa-arrow-right text-[8px] text-gray-600"></i>
                <span class="font-bold text-gray-400">${tName}</span>
                <span class="text-[9px] text-[#d4af37] italic ml-1">${r.label}</span>
            </div>
            <button onclick="window.cmapRemoveRel(${i})" class="text-gray-600 hover:text-red-500 px-1"><i class="fas fa-trash"></i></button>
        </li>`;
    }).join('');
}

async function renderMermaidChart() {
    const container = document.getElementById('mermaid-container');
    if (!container || !window.mermaid) return;

    const maps = getLocalMaps();
    const currentData = maps[mapState.currentMapId];

    if (!currentData || currentData.characters.length === 0) {
        container.innerHTML = `<div class="text-center text-gray-500 text-xs mt-10 italic">Add characters to begin mapping...</div>`;
        return;
    }

    let graph = 'graph TD\n';
    graph += 'classDef pc fill:#1e293b,stroke:#fff,stroke-width:2px,color:#fff;\n';
    graph += 'classDef npc fill:#000,stroke:#8a0303,stroke-width:3px,color:#8a0303,font-weight:bold;\n';
    graph += 'classDef groupNode fill:#1e3a8a,stroke:#60a5fa,stroke-width:2px,color:#fff;\n';
    graph += 'classDef groupRing fill:none,stroke:#1e3a8a,stroke-width:2px,stroke-dasharray: 5 5;\n';

    const renderedIds = new Set();

    const renderNode = (c) => {
        if(renderedIds.has(c.id)) return "";
        renderedIds.add(c.id);

        const safeName = c.name.replace(/"/g, "'");
        let label = c.clan ? `${safeName}<br/>(${c.clan})` : safeName;
        let cls = c.type === 'group' ? ':::groupNode' : (c.type === 'npc' ? ':::npc' : ':::pc');
        
        let line = `${c.id}("${label}")${cls}\n`;
        line += `click ${c.id} call cmapNodeClick("${c.id}") "Interact"\n`;
        return line;
    };

    const renderSubgraph = (group) => {
        if (!mapState.expandedGroups.has(group.id)) return renderNode(group);

        let output = `subgraph ${group.id}_sg [" "]\n direction TB\n`;
        output += renderNode(group);
        
        const children = currentData.characters.filter(c => c.parent === group.id);
        children.forEach(child => {
            output += (child.type === 'group') ? renderSubgraph(child) : renderNode(child);
        });
        output += `end\n class ${group.id}_sg groupRing\n`;
        return output;
    };

    // Filter Logic
    let visibleChars = currentData.characters;
    let visibleRels = currentData.relationships;

    if (mapState.filterCharId) {
        const connectedIds = new Set([mapState.filterCharId]);
        visibleRels.forEach(r => {
            if (r.source === mapState.filterCharId) connectedIds.add(r.target);
            if (r.target === mapState.filterCharId) connectedIds.add(r.source);
        });
        visibleChars = visibleChars.filter(c => connectedIds.has(c.id) || connectedIds.has(c.parent));
        visibleRels = visibleRels.filter(r => connectedIds.has(r.source) && connectedIds.has(r.target));
    }

    const validIds = new Set(visibleChars.map(c => c.id));
    const roots = visibleChars.filter(c => !c.parent || !validIds.has(c.parent));

    roots.forEach(root => {
        graph += (root.type === 'group') ? renderSubgraph(root) : renderNode(root);
    });

    visibleRels.forEach(r => {
        // PREVENT GHOST NODES: Only draw rels if both nodes are rendered
        if (!renderedIds.has(r.source) || !renderedIds.has(r.target)) return;

        let arrow = "-->";
        if (r.type === 'blood') arrow = "==>";
        if (r.type === 'boon') arrow = "-.->";
        
        const label = r.label ? `|${r.label}|` : "";
        graph += `${r.source} ${arrow} ${label} ${r.target}\n`;
    });

    try {
        const { svg, bindFunctions } = await window.mermaid.render('mermaid-svg-' + Date.now(), graph);
        container.innerHTML = svg;
        if (bindFunctions) bindFunctions(container);
        
        const nodes = container.querySelectorAll('g.node');
        
        // Sort characters by ID length descending to prevent substring false positives
        const sortedChars = [...visibleChars].sort((a,b) => b.id.length - a.id.length);

        nodes.forEach(node => {
            node.style.cursor = "pointer";
            const domId = node.id;
            const char = sortedChars.find(c => domId.includes(c.id));
            
            if (char) {
                const newNode = node.cloneNode(true);
                node.parentNode.replaceChild(newNode, node);
                
                newNode.addEventListener('click', (e) => {
                    e.stopPropagation(); 
                    e.preventDefault();
                    window.cmapNodeClick(char.id);
                });
            }
        });
        
    } catch (e) {
        console.warn("Graph Render Warning:", e);
    }
}

function navigateUp() {
    if (mapState.mapHistory.length === 0) return;
    const prevMap = mapState.mapHistory.pop();
    mapState.currentMapId = prevMap;
    
    // UI Updates
    const sel = document.getElementById('cmap-select-map');
    if(sel) sel.value = prevMap;
    
    refreshMapUI();
    
    // Breadcrumbs Logic
    const bc = document.getElementById('cmap-breadcrumbs');
    if(bc) {
        if (mapState.mapHistory.length > 0) {
            bc.classList.remove('hidden');
            document.getElementById('cmap-current-label').innerText = prevMap;
        } else {
            bc.classList.add('hidden');
        }
    }
}
