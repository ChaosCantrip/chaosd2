const static_definitions = {
    "no_survivors": {
        "displayProperties": {
            "name": "No Survivors",
            "icon": `${process.env.VERCEL_URL}/images/temp/no_survivors.png`,
        },
        "itemTypeAndTierDisplayName": "Legendary Submachine Gun",
        "inventory": {
            "recipeItemHash": 0
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            1847026933
        ],
    },
    "cold_comfort": {
        "displayProperties": {
            "name": "Cold Comfort",
            "icon": `${process.env.VERCEL_URL}/images/temp/cold_comfort.png`,
        },
        "itemTypeAndTierDisplayName": "Legendary Rocket Launcher",
        "inventory": {
            "recipeItemHash": 0
        },
        "equippingBlock": {
            "ammoType": 3
        },
        "damageTypeHashes": [
            151347233
        ],
    },
    "new_pacific_epitaph": {
        "displayProperties": {
            "name": "New Pacific Epitaph",
            "icon": `${process.env.VERCEL_URL}/images/temp/new_pacific_epitaph.png`,
        },
        "itemTypeAndTierDisplayName": "Legendary Grenade Launcher",
        "inventory": {
            "recipeItemHash": 0
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            151347233
        ],
    },
    "greasy_luck": {
        "displayProperties": {
            "name": "Greasy Luck",
            "icon": `${process.env.VERCEL_URL}/images/temp/greasy_luck.png`,
        },
        "itemTypeAndTierDisplayName": "Legendary Glaive",
        "inventory": {
            "recipeItemHash": 0
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            1847026933
        ],
    },
    "the_navigator": {
        "displayProperties": {
            "name": "The Navigator",
            "icon": `${process.env.VERCEL_URL}/images/temp/the_navigator.png`,
        },
        "itemTypeAndTierDisplayName": "Exotic Trace Rifle",
        "inventory": {
            "recipeItemHash": 0
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            3949783978
        ],
    },
    "tk_helm": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_helm.png`,
        }
    },
    "tk_hood": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_hood.png`,
        }
    },
    "tk_mask": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_mask.png`,
        }
    },
    "tk_gauntlets": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_gauntlets.png`,
        }
    },
    "tk_gloves": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_gloves.png`,
        }
    },
    "tk_grasps": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_grasps.png`,
        }
    },
    "tk_plate": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_plate.png`,
        }
    },
    "tk_vestement": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_vestement.png`,
        }
    },
    "tk_vest": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_vest.png`,
        }
    },
    "tk_greaves": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_greaves.png`,
        }
    },
    "tk_boots": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_boots.png`,
        }
    },
    "tk_strides": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_strides.png`,
        }
    },
    "tk_mark": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_mark.png`,
        }
    },
    "tk_bond": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_bond.png`,
        }
    },
    "tk_cloak": {
        "displayProperties": {
            "icon": `${process.env.VERCEL_URL}/images/temp/tk_cloak.png`,
        }
    }
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