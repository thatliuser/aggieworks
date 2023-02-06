#!/usr/bin/env node

/* I'm not a fan of writing this in JS,
* but I also don't want to have to have
* a compile step while running the build script!
*/

import * as esbuild from "esbuild";

function success() {
    console.log("Built!");
}

function error() {
    console.error("Build failed!");
}

function main() {
    const arg = process.argv[2];
    let watch = {
        onRebuild: (err, result) => {
            err ? error() : success();
        }
    };
    if (arg == "once") {
        watch = false;
    }

    esbuild.build({
        bundle: true,
        watch: watch,
        loader: {
            [".html"]: "copy",
            [".ico"]: "copy",
        },
        entryPoints: [
            "src/ts/index.tsx",
            "src/html/index.html",
            "index.html",
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
