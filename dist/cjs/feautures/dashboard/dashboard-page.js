'use strict';

var jsxRuntime = require('react/jsx-runtime');
require('../../node_modules/tslib/tslib.es6.js');
require('@radix-ui/react-avatar');
require('clsx');
require('tailwind-merge');
require('../../components/ui/badge.js');
require('@radix-ui/react-slot');
require('lucide-react');
require('../../components/ui/button.js');
require('@radix-ui/react-label');
require('@radix-ui/react-select');
require('@radix-ui/react-separator');
require('../../components/ui/sidebar.js');
require('@radix-ui/react-dialog');
var tabs = require('../../components/ui/tabs.js');
require('react');
require('next/navigation');
require('../../lib/constants.js');
var overviewTab = require('./tabs/overview-tab.js');
var reportsTab = require('./tabs/reports-tab.js');
var analyticsTab = require('./tabs/analytics-tab.js');

const DashboardPage = () => {
    return (jsxRuntime.jsxs("div", { className: "pl-0 pr-6 space-y-6", children: [jsxRuntime.jsx("div", { className: "flex justify-between items-center", children: jsxRuntime.jsxs("div", { children: [jsxRuntime.jsx("h1", { className: "text-3xl font-bold", children: "\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5" }), jsxRuntime.jsx("p", { className: "text-gray-500", children: "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03B1\u03C2" })] }) }), jsxRuntime.jsxs(tabs.Tabs, { defaultValue: "overview", className: "w-full", children: [jsxRuntime.jsxs(tabs.TabsList, { className: "mb-4", children: [jsxRuntime.jsx(tabs.TabsTrigger, { value: "overview", children: "\u0395\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7" }), jsxRuntime.jsx(tabs.TabsTrigger, { value: "analytics", children: "\u0391\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03AC" }), jsxRuntime.jsx(tabs.TabsTrigger, { value: "reports", children: "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2" })] }), jsxRuntime.jsx(overviewTab.OverviewTab, {}), jsxRuntime.jsx(analyticsTab.AnalyticsTab, {}), jsxRuntime.jsx(reportsTab.ReportsTab, {})] })] }));
};

exports.DashboardPage = DashboardPage;
//# sourceMappingURL=dashboard-page.js.map
