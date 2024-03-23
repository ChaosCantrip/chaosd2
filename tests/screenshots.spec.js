import { test } from "@playwright/test";
const fs = require('fs');

const regexes = [
    ".*/.*/loot"
];

test("screenshot", async ({ page }) => {
    test.setTimeout(1200000);
    const possible_paths = []
    fs.readdirSync('src/app/image_sources/dungeons').forEach(dir => {
        fs.readdirSync(`src/app/image_sources/dungeons/${dir}`).forEach(file => {
            possible_paths.push(`dungeons/${dir}/${file}`);
        });
    });
    fs.readdirSync('src/app/image_sources/raids').forEach(dir => {
        fs.readdirSync(`src/app/image_sources/raids/${dir}`).forEach(file => {
            possible_paths.push(`raids/${dir}/${file}`);
        });
    });
    fs.readdirSync('src/app/image_sources/lost_sectors').forEach(dir => {
        possible_paths.push(`lost_sectors/${dir}`);
    });

    const list_of_paths = [];

    for (let i = 0; i < possible_paths.length; i++) {
        // check against regex in regexes
        let add = false;
        for (let j = 0; j < regexes.length; j++) {
            if (possible_paths[i].match(regexes[j])) {
                add = true;
                break;
            }
        }
        if (add) {
            list_of_paths.push(possible_paths[i]);
        }
    }

    console.log(list_of_paths);

    for (let i = 0; i < list_of_paths.length; i++) {
        const given_path = list_of_paths[i];
        await page.goto(`http://localhost:3000/image_sources/${given_path}`);
        const url = page.url();
        const path = url.split("http://localhost:3000/image_sources/")[1];
        const metaWidth = await page.evaluate(() => {
            return parseInt(document.querySelector("meta[name=width]").content);
        });
        const metaHeight = await page.evaluate(() => {
            return parseInt(document.querySelector("meta[name=height]").content);
        });
        await page.setViewportSize({width: metaWidth, height: metaHeight});
        await page.screenshot({path: `public/images/${path}.png`, clip: {x: 0, y: 0, width: metaWidth, height: metaHeight}});
        console.log(`Screenshot taken for '${list_of_paths[i]}' (${metaWidth}x${metaHeight}) [${i+1}/${list_of_paths.length}]`)
    }
});
