/** @type {import('next').NextConfig} */

const activity_dictionary = {
    "raids": {
        "root_of_nightmares": [
            "ron",
            "rootofnightmares",
            "root",
        ],
        "kings_fall": [
            "kf",
            "kingsfall",
            "kings",
            "king",
            "fall",
        ],
        "vow_of_the_disciple": [
            "votd",
            "vowofthedisciple",
            "vow",
        ],
        "vault_of_glass": [
            "vog",
            "vaultofglass",
            "vault",
        ],
        "deep_stone_crypt": [
            "dsc",
            "deepstonecrypt",
            "crypt",
        ],
        "garden_of_salvation": [
            "gos",
            "gardenofsalvation",
            "garden",
        ],
        "last_wish": [
            "lw",
            "lastwish",
            "wish",
        ]
    },
    "dungeons": {
        "spire_of_the_watcher": [
            "sotw",
            "spireofthewatcher",
            "spire",
        ],
        "duality": [
        ],
        "grasp_of_avarice": [
            "goa",
            "graspofavarice",
            "grasp",
        ],
        "prophecy": [
            "p",
            "proph",
        ],
        "pit_of_heresy": [
            "poh",
            "pitofheresy",
            "pit",
        ],
        "shattered_throne": [
            "st",
            "shatteredthrone",
            "throne",
        ]
    }
}

const encounter_dictionary = {
    "raids": {
        "root_of_nightmares": {
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
                "boss"
            ],
        },
        "vow_of_the_disciple": {
            "symbols": [
                "s",
                "symbol",
                "icon"
            ]
        }
    },
    "dungeons": {
        "duality": {
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
