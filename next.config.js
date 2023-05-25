/** @type {import('next').NextConfig} */

const activity_dictionary = {
    raids: {
        root_of_nightmares: [
            "ron",
            "rootofnightmares",
            "root",
        ],
        kings_fall: [
            "kf",
            "kingsfall",
            "kings",
            "king",
            "fall",
        ],
        vow_of_the_disciple: [
            "votd",
            "vowofthedisciple",
            "vow",
        ],
        vault_of_glass: [
            "vog",
            "vaultofglass",
            "vault",
        ],
        deep_stone_crypt: [
            "dsc",
            "deepstonecrypt",
            "crypt",
        ],
        garden_of_salvation: [
            "gos",
            "gardenofsalvation",
            "garden",
        ],
        last_wish: [
            "lw",
            "lastwish",
            "wish",
        ]
    },
    dungeons: {
        spire_of_the_watcher: [
            "sotw",
            "spireofthewatcher",
            "spire",
        ],
        duality: [
        ],
        grasp_of_avarice: [
            "goa",
            "graspofavarice",
            "grasp",
        ],
        prophecy: [
            "p",
            "proph",
        ],
        pit_of_heresy: [
            "poh",
            "pitofheresy",
            "pit",
        ],
        shattered_throne: [
            "st",
            "shatteredthrone",
            "throne",
        ]
    }
}

const encounter_dictionary = {
    raids: {
        root_of_nightmares: {
            "1": [
                "cataclysm",
            ],
            "2": [
                "scission",
            ],
            "3": [
                "macrocosm",
                "planets",
                "planet"
            ],
            "4": [
                "nez",
                "nezarec",
                "boss",
                "nezzy"
            ],
        },
        kings_fall: {
            "0": [
                "opening",
                "open",
                "door"
            ],
            "1": [
                "totems",
                "totem"
            ],
            "2": [
                "warpriest",
                "priest",
                "wp"
            ],
            "3": [
                "golgoroth",
                "golgy",
                "gol",
                "ogre"
            ],
            "4": [
                "daughters",
                "daughter",
                "sisters",
                "sister",
            ],
            "5": [
                "oryx",
                "boss",
                "final",
                "king"
            ],
        },
        vow_of_the_disciple: {
            "0": [
                "opening",
                "open",
                "door",
                "payload",
            ],
            "1": [
                "acquisition",
                "totems",
                "vault"
            ],
            "2": [
                "caretaker",
                "ogre",
                "care",
            ],
            "3": [
                "exhibition",
                "artifact",
                "artifacts",
                "corridor",
                "relics",
                "relic",
            ],
            "4": [
                "rhulk",
                "disciple",
                "boss",
                "final",
            ],
            "symbols": [
                "s",
                "symbol",
                "icon"
            ]
        },
        vault_of_glass: {
            "0": [
                "opening",
                "open",
                "door",
                "spire",
            ],
            "1": [
                "confluxes",
                "conflux",
            ],
            "2": [
                "oracles",
                "oracle",
            ],
            "3": [
                "templar",
                "templars",
            ],
            "4": [
                "gatekeeper",
                "gatekeepers",
                "gate",
            ],
            "5": [
                "atheon",
                "boss",
                "final",
            ],
            "maze": [
                "gorgons",
                "gorgon",
            ]
        },
        deep_stone_crypt: {
            "0": [
                "opening",
                "open",
                "sparrow",
                "snow",
                "frost",
                "frostbite",
                "snowstorm"
            ],
            "1": [
                "crypt",
                "sec",
                "security",
            ],
            "2": [
                "atraks-1",
                "atraks",
            ],
            "3": [
                "descent",
                "nuclear",
                "core",
                "cores",
            ],
            "4": [
                "taniks",
                "boss",
                "final",
            ],
        },
        garden_of_salvation: {
            "1": [
                "embrace",
                "egg",
                "eggs",
                "doors",
            ],
            "2": [
                "flags",
                "sacrifice",
                "sacrifices",
                "flag",
                "diamond",
            ],
            "3": [
                "consecrated",
                "harpy",
                "gambit",
                "eyes",
            ],
            "4": [
                "sanctified",
                "boss",
                "final",
                "portals",
            ]
        },
        last_wish: {
            "1": [
                "kalli",
            ],
            "2": [
                "shuro",
                "chi",
            ],
            "3": [
                "morgeth",
                "orge",
                "strength",
            ],
            "4": [
                "vault",
            ],
            "5": [
                "riven",
                "boss",
            ],
            "6": [
                "queenswalk",
                "heart",
            ],
        }
    },
    dungeons: {
        spire_of_the_watcher: {
            "0": [
                "opening",
                "open",
                "cables",
                "cable",
            ],
            "1": [
                "ascend",
                "spire",
                "tower",
            ],
            "2": [
                "harpy",
                "akelous",
                "top",
            ],
            "3": [
                "boss",
                "final",
                "persys",
                "wyvern",
            ],
        },
        duality: {
            "1": [
                "gahlran",
            ],
            "2": [
                "vault",
            ],
            "3": [
                "boss",
                "caiatl",
            ],
        },
        grasp_of_avarice: {
            "1": [
                "phyrzia",
                "ogre",
            ],
            "2": [
                "shield",
                "shields",
                "servitors",
                "servitor",
            ],
            "3": [
                "boss",
                "final",
                "kell",
                "captain",
                "avarokk",
                "avarok",
            ],
        },
        prophecy: {
            "1": [
                "phalanx",
                "platform",
            ],
            "2": [
                "hexahedron",
                "cube",
                "hex",
            ],
            "3": [
                "kell",
                "echo",
                "boss",
                "final",
            ],
        },
        pit_of_heresy: {
            "1": [
                "necropolis",
            ],
            "2": [
                "tunnels",
                "tunnel",
                "ogres",
                "ogre",
            ],
            "3": [
                "chamber",
                "suffering",
            ],
            "4": [
                "harrow",
                "maze",
            ],
            "5": [
                "zulmak",
                "boss",
                "final",
                "knight"
            ],
        },
        shattered_throne: {
            "1": [
                "opening",
                "open",
            ],
            "2": [
                "vorgeth",
                "ogre",
            ],
            "3": [
                "dul",
                "incaru",
                "boss",
                "final",
                "wizard",
            ],
        }
    }
}

function build_redirects() {
    let redirects = []
    for (const [type, activities] of Object.entries(activity_dictionary)) {
        for (const [activity, shortcuts] of Object.entries(activities)) {
            redirects.push({
                source: `/${activity}/:slug*`,
                destination: `/${type}/${activity}/:slug*`,
                permanent: true,
            })
            for (const shortcut of shortcuts) {
                redirects.push({
                    source: `/:before*/${shortcut}/:after*`,
                    destination: `/:before*/${activity}/:after*`,
                    permanent: true,
                })
            }
        }
    }
    for (const [type, activities] of Object.entries(encounter_dictionary)) {
        for (const [activity, encounters] of Object.entries(activities)) {
            for (const [encounter, shortcuts] of Object.entries(encounters)) {
                for (const shortcut of shortcuts) {
                    redirects.push({
                        source: `/:before*/${activity}/${shortcut}/:after*`,
                        destination: `/:before*/${activity}/${encounter}/:after*`,
                        permanent: true,
                    })
                }
            }
        }
    }
    return redirects
}

const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.bungie.net",
                pathname: "/common/destiny2_content/**",
            }
        ]
    },
    async redirects() {
        return [
            {
                source: "/:before*/r/:after*",
                destination: "/:before*/raids/:after*",
                permanent: true,
            },
            {
                source: "/:before*/d/:after*",
                destination: "/:before*/dungeons/:after*",
                permanent: true,
            },
            {
                source: "/:before*/raid/:after*",
                destination: "/:before*/raids/:after*",
                permanent: true,
            },
            {
                source: "/:before*/dungeon/:after*",
                destination: "/:before/dungeons/:after*",
                permanent: true,
            },
            {
                source: "/:path*/red_border",
                destination: "/:path*/rb",
                permanent: true,
            },
            {
                source: "/:path*/chest",
                destination: "/:path*/rb",
                permanent: true,
            },
            {
                source: "/:path*/red",
                destination: "/:path*/rb",
                permanent: true,
            },
            {
                source: "/:path*/deepsight",
                destination: "/:path*/rb",
                permanent: true,
            },
            {
                source: "/:path*/s",
                destination: "/:path*/symbols",
                permanent: true,
            },
            {
                source: "/:path*/symbol",
                destination: "/:path*/symbols",
                permanent: true,
            },
            {
                source: "/:path*/m",
                destination: "/:path*/maze",
                permanent: true,
            },
            ...build_redirects(),
            {
                source: "/:path*/img",
                destination: "/images/:path*.png",
                permanent: true,
            },
            {
                source: "/:path*/i",
                destination: "/images/:path*.png",
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
