"use client";
'use strict';

var tslib_es6_js = require('C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var TooltipPrimitive = require('@radix-ui/react-tooltip');
var utils = require('../../lib/utils.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var TooltipPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(TooltipPrimitive);

function TooltipProvider(_a) {
    var { delayDuration = 0 } = _a, props = tslib_es6_js.__rest(_a, ["delayDuration"]);
    return (jsxRuntime.jsx(TooltipPrimitive__namespace.Provider, Object.assign({ "data-slot": "tooltip-provider", delayDuration: delayDuration }, props)));
}
function Tooltip(_a) {
    var props = tslib_es6_js.__rest(_a, []);
    return (jsxRuntime.jsx(TooltipProvider, { children: jsxRuntime.jsx(TooltipPrimitive__namespace.Root, Object.assign({ "data-slot": "tooltip" }, props)) }));
}
function TooltipTrigger(_a) {
    var props = tslib_es6_js.__rest(_a, []);
    return jsxRuntime.jsx(TooltipPrimitive__namespace.Trigger, Object.assign({ "data-slot": "tooltip-trigger" }, props));
}
function TooltipContent(_a) {
    var { className, sideOffset = 0, children } = _a, props = tslib_es6_js.__rest(_a, ["className", "sideOffset", "children"]);
    return (jsxRuntime.jsx(TooltipPrimitive__namespace.Portal, { children: jsxRuntime.jsxs(TooltipPrimitive__namespace.Content, Object.assign({ "data-slot": "tooltip-content", sideOffset: sideOffset, className: utils.cn("bg-primary text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-xs text-balance", className) }, props, { children: [children, jsxRuntime.jsx(TooltipPrimitive__namespace.Arrow, { className: "bg-primary fill-primary z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })] })) }));
}

exports.Tooltip = Tooltip;
exports.TooltipContent = TooltipContent;
exports.TooltipProvider = TooltipProvider;
exports.TooltipTrigger = TooltipTrigger;
//# sourceMappingURL=tooltip.js.map
