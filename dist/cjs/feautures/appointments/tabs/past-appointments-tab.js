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

function PastAppointmentsTab() {
    return (jsxRuntime.jsx(tabs.TabsContent, { value: "past", children: jsxRuntime.jsxs(card.Card, { children: [jsxRuntime.jsxs(card.CardHeader, { children: [jsxRuntime.jsx(card.CardTitle, { children: "\u03A0\u03B1\u03C1\u03B5\u03BB\u03B8\u03CC\u03BD\u03C4\u03B1 \u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" }), jsxRuntime.jsx(card.CardDescription, { children: "\u0399\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03C0\u03C1\u03BF\u03B7\u03B3\u03BF\u03CD\u03BC\u03B5\u03BD\u03C9\u03BD \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" })] }), jsxRuntime.jsx(card.CardContent, { className: "h-64 flex items-center justify-center", children: jsxRuntime.jsx("p", { className: "text-gray-500", children: "\u03A4\u03BF \u03B9\u03C3\u03C4\u03BF\u03C1\u03B9\u03BA\u03CC \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD \u03B8\u03B1 \u03B5\u03BC\u03C6\u03B1\u03BD\u03AF\u03B6\u03B5\u03C4\u03B1\u03B9 \u03B5\u03B4\u03CE" }) })] }) }));
}

exports.PastAppointmentsTab = PastAppointmentsTab;
//# sourceMappingURL=past-appointments-tab.js.map
