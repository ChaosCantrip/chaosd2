/** @type {import('next').NextConfig} */

const dictionary = {
  "raids": {
    "root_of_nightmares": [
      "RoN",
      "ron",
      "rootofnightmares",
      "root",
      "Root"
    ],
    "kings_fall": [
      "KF",
      "kf",
      "kingsfall",
      "kings",
      "Kings",
    ],
    "vow_of_the_disciple": [
      "VotD",
      "votd",
      "vowofthedisciple",
      "vow",
      "Vow"
    ],
    "vault_of_glass": [
      "VoG",
      "vog",
      "vaultofglass",
      "vault",
      "Vault"
    ],
    "deep_stone_crypt": [
      "DSC",
      "dsc",
      "deepstonecrypt",
      "crypt",
      "Crypt"
    ],
    "garden_of_salvation": [
      "GoS",
      "gos",
      "gardenofsalvation",
      "garden",
      "Garden"
    ],
    "last_wish": [
      "LW",
      "lw",
      "lastwish",
      "wish",
      "Wish"
    ]
  },
  "dungeons": {
    "spire_of_the_watcher": [
      "SotW",
      "sotw",
      "spireofthewatcher",
      "spire",
      "Spire"
    ],
    "duality": [
      "D",
      "d",
      "Duality",
      "dual",
      "Dual"
    ],
    "grasp_of_avarice": [
      "GoA",
      "goa",
      "graspofavarice",
      "grasp",
      "Grasp"
    ],
    "prophecy": [
      "P",
      "p",
      "Prophecy",
      "proph",
      "Proph"
    ],
    "pit_of_heresy": [
      "PoH",
      "poh",
      "pitofheresy",
      "pit",
      "Pit"
    ],
    "shattered_throne": [
      "ST",
      "st",
      "shatteredthrone",
      "throne",
      "Throne"
    ]
  }
}

function get_redirects() {
  let redirects = []
  for (const [type, activities] of Object.entries(dictionary)) {
    for (const [activity, shortcuts] of Object.entries(activities)) {
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
        ...get_redirects(),
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
