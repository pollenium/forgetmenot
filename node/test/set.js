"use strict";
exports.__esModule = true;
var __1 = require("../");
var pollenium_uvaursi_1 = require("pollenium-uvaursi");
var forgetmenot = new __1.Forgetmenot(__dirname + "/../../ts/test/db");
forgetmenot.set({
    key: 'x',
    value: pollenium_uvaursi_1.Uu.genRandom(4)
});
