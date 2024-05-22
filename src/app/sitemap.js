import {PathConfig} from "@components/PathConfig";

export default function sitemap() {
    const list = [
        {
            url: "https://chaosd2.com",
            lastModified: new Date(),
            changeFrequency: "yearly",
            priority: 1
        }
    ];

    list.push({
        url: "https://chaosd2.com/raids"
    });

    Object.entries(PathConfig.raids).forEach(([raid, raid_data]) => {
        list.push({
            url: `https://chaosd2.com/raids/${raid}`
        });
        Object.entries(raid_data.encounters).forEach(([encounter, encounter_data]) => {
            list.push({
                url: `https://chaosd2.com/raids/${raid}/${encounter}`
            });
        });
    });

    list.push({
        url: "https://chaosd2.com/dungeons"
    });

    Object.entries(PathConfig.dungeons).forEach(([dungeon, dungeon_data]) => {
        list.push({
            url: `https://chaosd2.com/dungeons/${dungeon}`
        });
        Object.entries(dungeon_data.encounters).forEach(([encounter, encounter_data]) => {
            list.push({
                url: `https://chaosd2.com/dungeons/${dungeon}/${encounter}`
            });
        });
    });

    list.push({
        url: "https://chaosd2.com/lost-sectors"
    });

    Object.entries(PathConfig.lost_sectors).forEach(([lost_sector, lost_sector_data]) => {
        list.push({
            url: `https://chaosd2.com/lost-sectors/${lost_sector}`
        });
    });

    return list;
}