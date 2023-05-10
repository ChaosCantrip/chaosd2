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
    }
    console.log(list_of_paths);

    for (let i = 0; i < list_of_paths.length; i++) {
        await page.goto(`http://localhost:3000/image_sources/${list_of_paths[i]}`);
        const metaWidth = await page.evaluate(() => {
            return parseInt(document.querySelector("meta[name=width]").content);
        });
        const metaHeight = await page.evaluate(() => {
            return parseInt(document.querySelector("meta[name=height]").content);
        });
        await page.setViewportSize({width: metaWidth, height: metaHeight});
        await page.screenshot({path: `public/images/${list_of_paths[i]}.png`, clip: {x: 0, y: 0, width: metaWidth, height: metaHeight}});
        console.log(`Screenshot taken for '${list_of_paths[i]}' (${metaWidth}x${metaHeight}) [${i+1}/${list_of_paths.length}]`)
    }
});
