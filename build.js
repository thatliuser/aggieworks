#!/usr/bin/env node

/* I'm not a fan of writing this in JS,
* but I also don't want to have to have
* a compile step while running the build script!
*/

const ESBuild = require("esbuild");
const Files = require("fs");

function copyHTML() {
    Files.copyFile("src/html/index.html", "build/index.html", () => { });
    Files.copyFile("src/css/index.css", "build/index.css", () => { });
}

function success() {
    console.log("Built!");
    copyHTML();
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
        sourcemap: "linked",
        entryPoints: ["src/ts/index.tsx"],
        outfile: "build/index.js",
    }).then(
        success,
        error
    );
}

main();