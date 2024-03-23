import { test } from "@playwright/test";
const fs = require('fs');

const list_of_paths = [
];

test("screenshot", async ({ page }) => {
    test.setTimeout(1200000);
    if (list_of_paths.length === 0) {
        fs.readdirSync('src/app/image_sources/dungeons').forEach(dir => {
            fs.readdirSync(`src/app/image_sources/dungeons/${dir}`).forEach(file => {
                list_of_paths.push(`dungeons/${dir}/${file}`);
            });
        });
        fs.readdirSync('src/app/image_sources/raids').forEach(dir => {
            fs.readdirSync(`src/app/image_sources/raids/${dir}`).forEach(file => {
                list_of_paths.push(`raids/${dir}/${file}`);
            });
        });
        fs.readdirSync('src/app/image_sources/lost_sectors').forEach(dir => {
            list_of_paths.push(`lost_sectors/${dir}`);
        });
    }
    console.log(list_of_paths);

    const to_add = [];
    const to_remove = [];

    for (let i = 0; i < list_of_paths.length; i++) {
        const given_path = list_of_paths[i];
        if (given_path.endsWith("*")) {
            const path = given_path.split("*")[0];
            const files = fs.readdirSync(`src/app/image_sources/${path}`);
            for (let j = 0; j < files.length; j++) {
                to_add.push(`${path}${files[j]}`);
            }
            to_remove.push(given_path);
        }
    }

    for (let i = 0; i < to_remove.length; i++) {
        list_of_paths.splice(list_of_paths.indexOf(to_remove[i]), 1);
    }

    for (let i = 0; i < to_add.length; i++) {
        list_of_paths.push(to_add[i]);
    }

    if (to_add.length > 0) {
        console.log(list_of_paths);
    }

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
