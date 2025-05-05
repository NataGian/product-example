'use strict';

var jsxRuntime = require('react/jsx-runtime');
require('../../node_modules/tslib/tslib.es6.js');
require('@radix-ui/react-avatar');
require('clsx');
require('tailwind-merge');
require('../../components/ui/badge.js');
require('@radix-ui/react-slot');
require('lucide-react');
var button = require('../../components/ui/button.js');
require('@radix-ui/react-label');
require('@radix-ui/react-select');
require('@radix-ui/react-separator');
require('../../components/ui/sidebar.js');
require('@radix-ui/react-dialog');
var tabs = require('../../components/ui/tabs.js');
require('react');
require('next/navigation');
require('../../lib/constants.js');
var upcomingAppointmentsTab = require('./tabs/upcoming-appointments-tab.js');
var pastAppointmentsTab = require('./tabs/past-appointments-tab.js');
var canceledAppointmentsTab = require('./tabs/canceled-appointments-tab.js');

const AppointmentsPage = () => {
    return (jsxRuntime.jsxs("div", { className: "pl-0 pr-6 space-y-6", children: [jsxRuntime.jsxs("div", { className: "flex justify-between items-center", children: [jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h1", { className: "text-3xl font-bold", children: "\u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" }), jsxRuntime.jsx("p", { className: "text-gray-500", children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD \u03C3\u03B1\u03C2" })] }), jsxRuntime.jsx(button.Button, { children: "+ \u039D\u03AD\u03BF \u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" })] }), jsxRuntime.jsxs(tabs.Tabs, { defaultValue: "upcoming", className: "w-full", children: [jsxRuntime.jsxs(tabs.TabsList, { className: "mb-4", children: [jsxRuntime.jsx(tabs.TabsTrigger, { value: "upcoming", children: "\u0395\u03C0\u03B5\u03C1\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1" }), jsxRuntime.jsx(tabs.TabsTrigger, { value: "past", children: "\u03A0\u03B1\u03C1\u03B5\u03BB\u03B8\u03CC\u03BD\u03C4\u03B1" }), jsxRuntime.jsx(tabs.TabsTrigger, { value: "canceled", children: "\u0391\u03BA\u03C5\u03C1\u03C9\u03BC\u03AD\u03BD\u03B1" })] }), jsxRuntime.jsx(upcomingAppointmentsTab.UpcomingAppointmentsTab, {}), jsxRuntime.jsx(pastAppointmentsTab.PastAppointmentsTab, {}), jsxRuntime.jsx(canceledAppointmentsTab.CanceledAppointmentsTab, {})] })] }));
};

exports.AppointmentsPage = AppointmentsPage;
//# sourceMappingURL=appointments-page.js.map
