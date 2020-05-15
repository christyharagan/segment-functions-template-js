#!/usr/bin/env node
"use strict";
const debug = require("segment-functions-debugger/out/cli/debug")
const deploy = require("segment-functions-debugger/out/cli/deploy")
const proxy = require("segment-functions-debugger/out/cli/proxy")
const src_fn = require("./src_fn")
const dest_fn = require("./dest_fn")

let kind = process.argv[2];
if (!kind || kind == 'debug') {
    debug.default(src_fn.onRequest, {
        onAlias: dest_fn.onAlias,
        onIdentify: dest_fn.onIdentify,
        onPage: dest_fn.onPage,
        onScreen: dest_fn.onScreen,
        onTrack: dest_fn.onTrack,
        onGroup: dest_fn.onGroup
    })
} else if (kind == 'proxy') {
    proxy.default()
} else if (kind == 'deploy') {
    deploy.default()
}