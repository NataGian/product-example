"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avatar = Avatar;
exports.AvatarImage = AvatarImage;
exports.AvatarFallback = AvatarFallback;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const AvatarPrimitive = tslib_1.__importStar(require("@radix-ui/react-avatar"));
const utils_1 = require("@/lib/utils");
function Avatar(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Root, Object.assign({ "data-slot": "avatar", className: (0, utils_1.cn)("relative flex size-8 shrink-0 overflow-hidden rounded-full", className) }, props)));
}
function AvatarImage(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Image, Object.assign({ "data-slot": "avatar-image", className: (0, utils_1.cn)("aspect-square size-full", className) }, props)));
}
function AvatarFallback(_a) {
    var { className } = _a, props = tslib_1.__rest(_a, ["className"]);
    return ((0, jsx_runtime_1.jsx)(AvatarPrimitive.Fallback, Object.assign({ "data-slot": "avatar-fallback", className: (0, utils_1.cn)("bg-muted flex size-full items-center justify-center rounded-full", className) }, props)));
}
//# sourceMappingURL=avatar.js.map