"use strict";
"use client";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tooltip = Tooltip;
exports.TooltipTrigger = TooltipTrigger;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
const tslib_1 = require("tslib");
const jsx_runtime_1 = require("react/jsx-runtime");
const TooltipPrimitive = tslib_1.__importStar(require("@radix-ui/react-tooltip"));
const utils_1 = require("@/lib/utils");
function TooltipProvider(_a) {
    var { delayDuration = 0 } = _a, props = tslib_1.__rest(_a, ["delayDuration"]);
    return ((0, jsx_runtime_1.jsx)(TooltipPrimitive.Provider, Object.assign({ "data-slot": "tooltip-provider", delayDuration: delayDuration }, props)));
}
function Tooltip(_a) {
    var props = tslib_1.__rest(_a, []);
    return ((0, jsx_runtime_1.jsx)(TooltipProvider, { children: (0, jsx_runtime_1.jsx)(TooltipPrimitive.Root, Object.assign({ "data-slot": "tooltip" }, props)) }));
}
function TooltipTrigger(_a) {
    var props = tslib_1.__rest(_a, []);
    return (0, jsx_runtime_1.jsx)(TooltipPrimitive.Trigger, Object.assign({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
    var { className, sideOffset = 0, children } = _a, props = tslib_1.__rest(_a, ["className", "sideOffset", "children"]);
    return ((0, jsx_runtime_1.jsx)(TooltipPrimitive.Portal, { children: (0, jsx_runtime_1.jsxs)(TooltipPrimitive.Content, Object.assign({ "data-slot": "tooltip-content", sideOffset: sideOffset, className: (0, utils_1.cn)("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className) }, props, { children: [children, (0, jsx_runtime_1.jsx)(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] })) }));
}
//# sourceMappingURL=tooltip.js.map