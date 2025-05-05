'use strict';

var jsxRuntime = require('react/jsx-runtime');
var avatar = require('../../../components/ui/avatar.js');
var badge = require('../../../components/ui/badge.js');
require('../../../node_modules/tslib/tslib.es6.js');
require('@radix-ui/react-slot');
require('lucide-react');
require('clsx');
require('tailwind-merge');
require('../../../components/ui/button.js');
var card = require('../../../components/ui/card.js');
require('@radix-ui/react-label');
require('@radix-ui/react-select');
require('@radix-ui/react-separator');
require('../../../components/ui/sidebar.js');
require('@radix-ui/react-dialog');
var tabs = require('../../../components/ui/tabs.js');
require('react');
require('next/navigation');
require('../../../lib/constants.js');

function OverviewTab() {
    return (jsxRuntime.jsxs(tabs.TabsContent, { value: "overview", className: "space-y-4", children: [jsxRuntime.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03A7\u03C1\u03B7\u03C3\u03C4\u03CE\u03BD" }), jsxRuntime.jsx(card.CardDescription, { children: "\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u03C7\u03C1\u03B7\u03C3\u03C4\u03CE\u03BD \u03B1\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03BC\u03AE\u03BD\u03B1" })] }), jsxRuntime.jsxs(card.CardContent, { children: [jsxRuntime.jsx("p", { className: "text-4xl font-bold", children: "2.853" }), jsxRuntime.jsx(badge.Badge, { className: "mt-2", variant: "outline", children: "+12,5%" })] })] }), jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u0388\u03C3\u03BF\u03B4\u03B1" }), jsxRuntime.jsx(card.CardDescription, { children: "\u039C\u03B7\u03BD\u03B9\u03B1\u03AF\u03B1 \u03AD\u03C3\u03BF\u03B4\u03B1" })] }), jsxRuntime.jsxs(card.CardContent, { children: [jsxRuntime.jsx("p", { className: "text-4xl font-bold", children: "34.257\u20AC" }), jsxRuntime.jsx(badge.Badge, { className: "mt-2", variant: "outline", children: "+8,2%" })] })] }), jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u0395\u03BD\u03B5\u03C1\u03B3\u03AC \u0388\u03C1\u03B3\u03B1" }), jsxRuntime.jsx(card.CardDescription, { children: "\u03A4\u03C1\u03AD\u03C7\u03BF\u03BD \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF" })] }), jsxRuntime.jsxs(card.CardContent, { children: [jsxRuntime.jsx("p", { className: "text-4xl font-bold", children: "12" }), jsxRuntime.jsx(badge.Badge, { className: "mt-2", variant: "outline", children: "+2 \u03BD\u03AD\u03B1" })] })] })] }), jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u03A0\u03C1\u03CC\u03C3\u03C6\u03B1\u03C4\u03B7 \u0394\u03C1\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1" }), jsxRuntime.jsx(card.CardDescription, { children: "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B5\u03C2 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03B5\u03B9\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03BF\u03BC\u03AC\u03B4\u03B1 \u03C3\u03B1\u03C2" })] }), jsxRuntime.jsx(card.CardContent, { children: jsxRuntime.jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => (jsxRuntime.jsxs("div", { className: "flex items-start gap-4 pb-4 border-b", children: [jsxRuntime.jsx(avatar.Avatar, { children: jsxRuntime.jsxs(avatar.AvatarFallback, { children: ["\u03A7", i] }) }), jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("p", { className: "font-medium", children: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03AD\u03C1\u03B3\u03BF\u03C5" }), jsxRuntime.jsxs("p", { className: "text-sm text-gray-500", children: ["\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 ", i, " \u03B5\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B5 \u03C4\u03B7\u03BD \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03AD\u03C1\u03B3\u03BF\u03C5"] }), jsxRuntime.jsx("p", { className: "text-xs text-gray-400 mt-1", children: "\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC 2 \u03CE\u03C1\u03B5\u03C2" })] })] }, i))) }) })] })] }));
}

exports.OverviewTab = OverviewTab;
//# sourceMappingURL=overview-tab.js.map
