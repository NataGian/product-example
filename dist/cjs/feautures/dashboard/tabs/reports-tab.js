'use strict';

var jsxRuntime = require('react/jsx-runtime');
require('../../../node_modules/tslib/tslib.es6.js');
require('@radix-ui/react-avatar');
require('clsx');
require('tailwind-merge');
require('../../../components/ui/badge.js');
require('@radix-ui/react-slot');
require('lucide-react');
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

function ReportsTab() {
    return (jsxRuntime.jsx(tabs.TabsContent, { value: "reports", children: jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2" }), jsxRuntime.jsx(card.CardDescription, { children: "\u03A0\u03C1\u03CC\u03C3\u03B2\u03B1\u03C3\u03B7 \u03C3\u03B5 \u03CC\u03BB\u03B5\u03C2 \u03C4\u03B9\u03C2 \u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2 \u03BA\u03B1\u03B9 \u03B5\u03BE\u03B1\u03B3\u03C9\u03B3\u03AD\u03C2 \u03C3\u03B1\u03C2" })] }), jsxRuntime.jsx(card.CardContent, { className: "h-64 flex items-center justify-center", children: jsxRuntime.jsx("p", { className: "text-gray-500", children: "\u03A4\u03BF \u03C0\u03B5\u03C1\u03B9\u03B5\u03C7\u03CC\u03BC\u03B5\u03BD\u03BF \u03C4\u03C9\u03BD \u03B1\u03BD\u03B1\u03C6\u03BF\u03C1\u03CE\u03BD \u03B8\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03B5\u03B4\u03CE" }) })] }) }));
}

exports.ReportsTab = ReportsTab;
//# sourceMappingURL=reports-tab.js.map
