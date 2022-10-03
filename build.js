#!/usr/bin/env node

/* I'm not a fan of writing this in JS,
* but I also don't want to have to have
* a compile step while running the build script!
*/

const ESBuild = require("esbuild");
const Files = require("fs");

function copyFiles() {
    Files.copyFile("src/html/index.html", "build/index.html", () => { });
    for (const file of Files.readdirSync("src/css/")) {
        Files.copyFile(`src/css/${file}`, `build/${file}`, () => { });
    }
    for (const file of Files.readdirSync("misc/")) {
        Files.copyFile(`misc/${file}`, `build/${file}`, () => { });
    }
}

function success() {
    console.log("Built!");
    copyFiles();
}

function error() {
    console.log("Build failed!");
}

function main() {
    ESBuild.build({
        bundle: true,
        watch: {
            onRebuild: (err, result) => {
                err ? error() : success();
            }
        },
        entryPoints: ["src/ts/index.tsx"],
        outfile: "build/index.js",
        minify: true,
    }).then(
        success,
        error
    );
}

main();