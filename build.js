#!/usr/bin/env node

/* I'm not a fan of writing this in JS,
* but I also don't want to have to have
* a compile step while running the build script!
*/

const ESBuild = require("esbuild");

function success() {
    console.log("Built!");
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
        loader: {
            [".html"]: "copy",
            [".ico"]: "copy",
        },
        entryPoints: [
            "src/ts/index.tsx",
            "src/html/index.html",
            "src/css/index.css",
            "misc/percent.ico",
        ],
        outdir: "build",
        minify: true,
    }).then(
        success,
        error
    );
}

main();