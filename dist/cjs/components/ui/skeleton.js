"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skeleton = Skeleton;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const utils_1 = require("@/lib/utils");
function Skeleton(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)("div", Object.assign({ "data-slot": "skeleton", className: (0, utils_1.cn)("bg-accent animate-pulse rounded-md", className) }, props)));
}
//# sourceMappingURL=skeleton.js.map