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

export async function get_definition(definition_type, definition_hash) {
    const response = await fetch(`https://www.bungie.net/Platform/Destiny2/Manifest/${definition_type}/${definition_hash}`, {
        headers: {
            "X-API-Key": process.env.BUNGIE_API_KEY
        }
    });
    const data = await response.json();
    return data["Response"];
}

export async function get_item_definition(item_hash) {
    if (item_hash in static_definitions) {
        return static_definitions[item_hash];
    } else {
        return await get_definition("DestinyInventoryItemDefinition", item_hash);
    }
}

export async function get_damage_definition(damage_hash) {
    return await get_definition("DestinyDamageTypeDefinition", damage_hash);
}