'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var utils = require('../../lib/utils.js');

function Skeleton(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "skeleton", className: utils.cn("bg-accent animate-pulse rounded-md", className) }, props)));
}

exports.Skeleton = Skeleton;
//# sourceMappingURL=skeleton.js.map
