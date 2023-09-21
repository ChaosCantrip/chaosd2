const damage = {
    Kinetic: 3373582085,
    Arc: 2303181850,
    Solar: 1847026933,
    Void: 3454344768,
    Stasis: 151347233,
    Strand: 3949783978,
}

const static_definitions = {

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