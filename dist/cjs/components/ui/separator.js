"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Separator = Separator;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const SeparatorPrimitive = tslib_1.__importStar(require("@radix-ui/react-separator"));
const utils_1 = require("@/lib/utils");
function Separator(_a) {
    var { className, orientation = "horizontal", decorative = true } = _a, props = tslib_1.__rest(_a, ["className", "orientation", "decorative"]);
    return ((0, jsx_runtime_1.jsx)(SeparatorPrimitive.Root, Object.assign({ "data-slot": "separator-root", decorative: decorative, orientation: orientation, className: (0, utils_1.cn)("bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px", className) }, props)));
}
//# sourceMappingURL=separator.js.map