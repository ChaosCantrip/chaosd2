const damage = {
    Kinetic: 3373582085,
    Arc: 2303181850,
    Solar: 1847026933,
    Void: 3454344768,
    Stasis: 151347233,
    Strand: 3949783978,
}

const static_definitions = {
    "1432682459": {
        "displayProperties": {
            "name": "Fang of Ir Yût",
            "icon": "https://chaosd2.com/images/temp/crotas_end/scout_rifle.png",
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
        "itemTypeAndTierDisplayName": "Legendary Scout Rifle",
    },
    "3163900678": {
        "displayProperties": {
            "name": "Swordbreaker",
            "icon": "https://chaosd2.com/images/temp/crotas_end/shotgun.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            damage.Strand
        ],
        "itemTypeAndTierDisplayName": "Legendary Scout Rifle",
    },
    "1034055198": {
        "displayProperties": {
            "name": "Necrochasm",
            "icon": "https://chaosd2.com/images/temp/crotas_end/exotic.png",
        },
        "inventory": {
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            damage.Kinetic
        ],
        "itemTypeAndTierDisplayName": "Exotic Auto Rifle",
    },
    "120706239": {
        "displayProperties": {
            "name": "Word of Crota",
            "icon": "https://chaosd2.com/images/temp/crotas_end/hand_cannon.png"
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 1
        },
        "damageTypeHashes": [
            damage.Void
        ],
        "itemTypeAndTierDisplayName": "Legendary Hand Cannon",
    },
    "833898322": {
        "displayProperties": {
            "name": "Abyss Defiant",
            "icon": "https://chaosd2.com/images/temp/crotas_end/auto_rifle.png",
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
        "itemTypeAndTierDisplayName": "Legendary Auto Rifle",
    },
    "1098171824": {
        "displayProperties": {
            "name": "Oversoul Edict",
            "icon": "https://chaosd2.com/images/temp/crotas_end/pulse_rifle.png",
        },
        "inventory": {
            "recipeItemHash": 1
        },
        "equippingBlock": {
            "ammoType": 2
        },
        "damageTypeHashes": [
            damage.Arc
        ],
        "itemTypeAndTierDisplayName": "Legendary Pulse Rifle",
    },
    "2828278545": {
        "displayProperties": {
            "name": "Song of Ir Yût",
            "icon": "https://chaosd2.com/images/temp/crotas_end/machine_gun.png",
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
        "itemTypeAndTierDisplayName": "Legendary Machine Gun",
    },
    "1328334240": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-1328334240.png",
        }
    },
    "859929450": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item_859929450.jpg",
        }
    },
    "1964816829": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-1964816829.png",
        }
    },
    "3189374833": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-3189374833.png",
        }
    },
    "441033139": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-441033139.png",
        }
    },
    "427348780": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-427348780.png",
        }
    },
    "1261894567": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-1261894567.png",
        }
    },
    "3714937821": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-3714937821.png",
        }
    },
    "1386180724": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-1386180724.png",
        }
    },
    "3020524483": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-3020524483.png",
        }
    },
    "175883909": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-175883909.png",
        }
    },
    "1497538390": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-1497538390.png",
        }
    },
    "2401746614": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-2401746614.png",
        }
    },
    "1306415888": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-1306415888.png",
        }
    },
    "2130010697": {
        "displayProperties": {
            "icon": "https://chaosd2.com/images/temp/crotas_end/item-2130010697.png",
        }
    },
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
        console.log(`Using static definition for ${item_hash}`);
        return static_definitions[item_hash];
    } else {
        console.log(`Fetching definition for ${item_hash}`);
        return await get_definition("DestinyInventoryItemDefinition", item_hash);
    }
}

export async function get_damage_definition(damage_hash) {
    return await get_definition("DestinyDamageTypeDefinition", damage_hash);
}