const damage = {
    Kinetic: 3373582085,
    Arc: 2303181850,
    Solar: 1847026933,
    Void: 3454344768,
    Stasis: 151347233,
    Strand: 3949783978,
}

const static_definitions = {
    "edge_pulse_rifle": {
        "displayProperties": {
            "name": "Nullify",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            damage.Solar
        ],
        "itemTypeAndTierDisplayName": "Legendary Pulse Rifle",
    },
    "edge_smg": {
        "displayProperties": {
            "name": "Imminence",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            damage.Strand
        ],
        "itemTypeAndTierDisplayName": "Legendary Submachine Gun",
    },
    "edge_bow": {
        "displayProperties": {
            "name": "Non-Denouement",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            damage.Arc
        ],
        "itemTypeAndTierDisplayName": "Legendary Bow",
    },
    "edge_sword": {
        "displayProperties": {
            "name": "Summum Bonum",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 3
        },
        "damageTypeHashes": [
            damage.Arc
        ],
        "itemTypeAndTierDisplayName": "Legendary Sword",
    },
    "edge_glaive": {
        "displayProperties": {
            "name": "Forthcoming Deviance",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            damage.Void
        ],
        "itemTypeAndTierDisplayName": "Legendary Glaive",
    },
    "edge_sniper_rifle": {
        "displayProperties": {
            "name": "Critical Anomaly",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            damage.Stasis
        ],
        "itemTypeAndTierDisplayName": "Legendary Sniper Rifle",
    },
    "edge_lfr": {
        "displayProperties": {
            "name": "Euphony",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 3
        },
        "damageTypeHashes": [
            damage.Strand
        ],
        "itemTypeAndTierDisplayName": "Exotic Linear Fusion Rifle",
    }
}

function generate_unknown_item(item_hash) {
    return {
        "displayProperties": {
            "name": "Unknown Item",
            "icon": "https://www.bungie.net/common/destiny2_content/icons/ef1a8374c931321694d6d3d0d3e96247.png",
        },
        "inventory": {
            "recipeItemHash": 0
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            damage.Strand
        ],
        "itemTypeAndTierDisplayName": `Unknown Item (${item_hash})`,
    }
}

export async function get_definition(definition_type, definition_hash) {
    const response = await fetch(`https://www.bungie.net/Platform/Destiny2/Manifest/${definition_type}/${definition_hash}`, {
        headers: {
            "X-API-Key": process.env.BUNGIE_API_KEY
        }
    });
    if (response.status !== 200) {
        console.log(`Error fetching definition for ${definition_hash}`);
        return undefined;
    }
    const data = await response.json();
    return data["Response"];
}

export async function get_item_definition(item_hash) {
    if (item_hash in static_definitions) {
        console.log(`Using static definition for ${item_hash}`);
        return static_definitions[item_hash];
    } else {
        console.log(`Fetching definition for ${item_hash}`);
        const definition = await get_definition("DestinyInventoryItemDefinition", item_hash);
        if (definition === undefined) {
            return generate_unknown_item(item_hash);
        } else {
            return definition;
        }
    }
}

export async function get_damage_definition(damage_hash) {
    return await get_definition("DestinyDamageTypeDefinition", damage_hash);
}

const static_modifiers = {
    "Legend Modifiers": {
        "displayProperties": {
            "name": "Legend Modifiers",
            "description": "Locked Loadout, Extra Shields, Limited Revives",
            "icon": "/common/destiny2_content/icons/91abb126d5f923d92d30e2bd2e11dce2.png"
        }
    },
    "Master Modifiers": {
        "displayProperties": {
            "name": "Master Modifiers",
            "description": "Locked Loadout, Extra Shields, Extra Champions, Limited Revives",
            "icon": "/common/destiny2_content/icons/2aec83801423335c14d6fd54d7b57c1d.png"
        }
    }
}

export async function get_modifier_definition(modifier_hash) {
    if (modifier_hash in static_modifiers) {
        console.log(`Using static definition for ${modifier_hash}`);
        return static_modifiers[modifier_hash];
    }
    return await get_definition("DestinyActivityModifierDefinition", modifier_hash);
}

export const string_variables = {
    4005007457: 25,
    1027206613: 25
}