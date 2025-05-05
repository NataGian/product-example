"use client";
'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var TabsPrimitive = require('@radix-ui/react-tabs');
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

var TabsPrimitive__namespace = /*#__PURE__*/_interopNamespaceDefault(TabsPrimitive);

function Tabs(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(TabsPrimitive__namespace.Root, Object.assign({ "data-slot": "tabs", className: utils.cn("flex flex-col gap-2", className) }, props)));
}
function TabsList(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(TabsPrimitive__namespace.List, Object.assign({ "data-slot": "tabs-list", className: utils.cn("bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]", className) }, props)));
}
function TabsTrigger(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(TabsPrimitive__namespace.Trigger, Object.assign({ "data-slot": "tabs-trigger", className: utils.cn("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className) }, props)));
}
function TabsContent(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(TabsPrimitive__namespace.Content, Object.assign({ "data-slot": "tabs-content", className: utils.cn("flex-1 outline-none", className) }, props)));
}

exports.Tabs = Tabs;
exports.TabsContent = TabsContent;
exports.TabsList = TabsList;
exports.TabsTrigger = TabsTrigger;
//# sourceMappingURL=tabs.js.map
