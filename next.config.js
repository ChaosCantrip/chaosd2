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
                    source: `/${shortcut}/:slug*`,
                    destination: `/${type}/${activity}/:slug*`,
                    permanent: true,
                })
                redirects.push({
                    source: `/${type}/${shortcut}/:slug*`,
                    destination: `/${type}/${activity}/:slug*`,
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
                        source: `/${type}/${activity}/${shortcut}/:slug*`,
                        destination: `/${type}/${activity}/${encounter}/:slug*`,
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
    async redirects() {
        return [
            {
                source: "/r/:slug*",
                destination: "/raids/:slug*",
                permanent: true,
            },
            {
                source: "/d/:slug*",
                destination: "/dungeons/:slug*",
                permanent: true,
            },
            {
                source: "/raid/:slug*",
                destination: "/raids/:slug*",
                permanent: true,
            },
            {
                source: "/dungeon/:slug*",
                destination: "/dungeons/:slug*",
                permanent: true,
            },
            ...build_redirects(),
            {
                source: "/:path*/img",
                destination: "/images/:path*.jpg",
                permanent: true,
            },
            {
                source: "/:path*/i",
                destination: "/images/:path*.jpg",
                permanent: true,
            }
        ]
    }
}

module.exports = nextConfig
