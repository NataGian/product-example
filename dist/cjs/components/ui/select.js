"use client";
'use strict';

var tslib_es6_js = require('C:\\Users\\NataliaGIANNOULI\\IdeaProjects\\product-example\\node_modules\\tslib\\tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var SelectPrimitive = require('@radix-ui/react-select');
var lucideReact = require('lucide-react');
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

var SelectPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(SelectPrimitive);

function Select(_a) {
    var props = tslib_es6_js.__rest(_a, []);
    return jsxRuntime.jsx(SelectPrimitive__namespace.Root, Object.assign({ "data-slot": "select" }, props));
}
function SelectGroup(_a) {
    var props = tslib_es6_js.__rest(_a, []);
    return jsxRuntime.jsx(SelectPrimitive__namespace.Group, Object.assign({ "data-slot": "select-group" }, props));
}
function SelectValue(_a) {
    var props = tslib_es6_js.__rest(_a, []);
    return jsxRuntime.jsx(SelectPrimitive__namespace.Value, Object.assign({ "data-slot": "select-value" }, props));
}
function SelectTrigger(_a) {
    var { className, size = "default", children } = _a, props = tslib_es6_js.__rest(_a, ["className", "size", "children"]);
    return (jsxRuntime.jsxs(SelectPrimitive__namespace.Trigger, Object.assign({ "data-slot": "select-trigger", "data-size": size, className: utils.cn("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props, { children: [children, jsxRuntime.jsx(SelectPrimitive__namespace.Icon, { asChild: true, children: jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4 opacity-50" }) })] })));
}
function SelectContent(_a) {
    var { className, children, position = "popper" } = _a, props = tslib_es6_js.__rest(_a, ["className", "children", "position"]);
    return (jsxRuntime.jsx(SelectPrimitive__namespace.Portal, { children: jsxRuntime.jsxs(SelectPrimitive__namespace.Content, Object.assign({ "data-slot": "select-content", className: utils.cn("bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md", position === "popper" &&
                "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className), position: position }, props, { children: [jsxRuntime.jsx(SelectScrollUpButton, {}), jsxRuntime.jsx(SelectPrimitive__namespace.Viewport, { className: utils.cn("p-1", position === "popper" &&
                        "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"), children: children }), jsxRuntime.jsx(SelectScrollDownButton, {})] })) }));
}
function SelectLabel(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(SelectPrimitive__namespace.Label, Object.assign({ "data-slot": "select-label", className: utils.cn("text-muted-foreground px-2 py-1.5 text-xs", className) }, props)));
}
function SelectItem(_a) {
    var { className, children } = _a, props = tslib_es6_js.__rest(_a, ["className", "children"]);
    return (jsxRuntime.jsxs(SelectPrimitive__namespace.Item, Object.assign({ "data-slot": "select-item", className: utils.cn("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className) }, props, { children: [jsxRuntime.jsx("span", { className: "absolute right-2 flex size-3.5 items-center justify-center", children: jsxRuntime.jsx(SelectPrimitive__namespace.ItemIndicator, { children: jsxRuntime.jsx(lucideReact.CheckIcon, { className: "size-4" }) }) }), jsxRuntime.jsx(SelectPrimitive__namespace.ItemText, { children: children })] })));
}
function SelectSeparator(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(SelectPrimitive__namespace.Separator, Object.assign({ "data-slot": "select-separator", className: utils.cn("bg-border pointer-events-none -mx-1 my-1 h-px", className) }, props)));
}
function SelectScrollUpButton(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollUpButton, Object.assign({ "data-slot": "select-scroll-up-button", className: utils.cn("flex cursor-default items-center justify-center py-1", className) }, props, { children: jsxRuntime.jsx(lucideReact.ChevronUpIcon, { className: "size-4" }) })));
}
function SelectScrollDownButton(_a) {
    var { className } = _a, props = tslib_es6_js.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(SelectPrimitive__namespace.ScrollDownButton, Object.assign({ "data-slot": "select-scroll-down-button", className: utils.cn("flex cursor-default items-center justify-center py-1", className) }, props, { children: jsxRuntime.jsx(lucideReact.ChevronDownIcon, { className: "size-4" }) })));
}

exports.Select = Select;
exports.SelectContent = SelectContent;
exports.SelectGroup = SelectGroup;
exports.SelectItem = SelectItem;
exports.SelectLabel = SelectLabel;
exports.SelectScrollDownButton = SelectScrollDownButton;
exports.SelectScrollUpButton = SelectScrollUpButton;
exports.SelectSeparator = SelectSeparator;
exports.SelectTrigger = SelectTrigger;
exports.SelectValue = SelectValue;
//# sourceMappingURL=select.js.map
