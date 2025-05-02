"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Label = Label;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const LabelPrimitive = tslib_1.__importStar(require("@radix-ui/react-label"));
const utils_1 = require("@/lib/utils");
function Label(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(LabelPrimitive.Root, Object.assign({ "data-slot": "label", className: (0, utils_1.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className) }, props)));
}
//# sourceMappingURL=label.js.map