"use client";
import { __rest } from 'C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { cn } from '../../lib/utils.js';

function TooltipProvider(_a) {
    var { delayDuration = 0 } = _a, props = __rest(_a, ["delayDuration"]);
    return (jsx(TooltipPrimitive.Provider, Object.assign({ "data-slot": "tooltip-provider", delayDuration: delayDuration }, props)));
}
function Tooltip(_a) {
    var props = __rest(_a, []);
    return (jsx(TooltipProvider, { children: jsx(TooltipPrimitive.Root, Object.assign({ "data-slot": "tooltip" }, props)) }));
}
function TooltipTrigger(_a) {
    var props = __rest(_a, []);
    return jsx(TooltipPrimitive.Trigger, Object.assign({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
    var { className, sideOffset = 0, children } = _a, props = __rest(_a, ["className", "sideOffset", "children"]);
    return (jsx(TooltipPrimitive.Portal, { children: jsxs(TooltipPrimitive.Content, Object.assign({ "data-slot": "tooltip-content", sideOffset: sideOffset, className: cn("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className) }, props, { children: [children, jsx(TooltipPrimitive.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] })) }));
}

export { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger };
//# sourceMappingURL=tooltip.js.map
