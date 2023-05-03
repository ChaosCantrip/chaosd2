import { test, expect } from "@playwright/test";
const fs = require('fs');

test("screenshot", async ({ page }) => {
    const list_of_paths = [];
    fs.readdirSync('app/image_sources/dungeons').forEach(dir => {
        fs.readdirSync(`app/image_sources/dungeons/${dir}`).forEach(file => {
            list_of_paths.push(`dungeons/${dir}/${file}`);
        });
    });
    fs.readdirSync('app/image_sources/raids').forEach(dir => {
        fs.readdirSync(`app/image_sources/raids/${dir}`).forEach(file => {
            list_of_paths.push(`raids/${dir}/${file}`);
        });
    });
    console.log(list_of_paths);
    await page.setViewportSize({width: 1920, height: 1080});

    for (let i = 0; i < list_of_paths.length; i++) {
        await page.goto(`http://localhost:3000/image_sources/${list_of_paths[i]}`);
        await page.screenshot({path: `public/images/${list_of_paths[i]}.png`, clip: {x: 0, y: 0, width: 1920, height: 1080}});
        console.log(`Screenshot taken for ${list_of_paths[i]}`)
    }
});
