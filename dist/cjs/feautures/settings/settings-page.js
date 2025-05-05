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
var profileTabContent = require('./tabs/profile-tab-content.js');
var accountTabContent = require('./tabs/account-tab-content.js');

const SettingsPage = () => {
    return (jsxRuntime.jsxs("div", { className: "pl-0 pr-6", children: [jsxRuntime.jsxs("div", { className: "mb-6", children: [jsxRuntime.jsx("h1", { className: "text-3xl font-bold", children: "\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2" }), jsxRuntime.jsx("p", { className: "text-gray-500", children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03C0\u03C1\u03BF\u03C4\u03B9\u03BC\u03AE\u03C3\u03B5\u03C9\u03BD \u03BA\u03B1\u03B9 \u03C1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03C9\u03BD \u03C4\u03BF\u03C5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD \u03C3\u03B1\u03C2" })] }), jsxRuntime.jsx("div", { className: "flex flex-col md:flex-row gap-6", children: jsxRuntime.jsxs(tabs.Tabs, { defaultValue: "profile", orientation: "vertical", className: "w-full flex flex-row", children: [jsxRuntime.jsx("div", { className: "md:w-56 shrink-0", children: jsxRuntime.jsxs(tabs.TabsList, { className: "flex flex-col h-auto items-stretch p-0 bg-transparent space-y-1", children: [jsxRuntime.jsx(tabs.TabsTrigger, { value: "profile", className: "justify-start px-4 py-2", children: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB" }), jsxRuntime.jsx(tabs.TabsTrigger, { value: "account", className: "justify-start px-4 py-2", children: "\u039B\u03BF\u03B3\u03B1\u03C1\u03B9\u03C3\u03BC\u03CC\u03C2" })] }) }), jsxRuntime.jsxs("div", { className: "flex-1 w-full max-w-3xl", children: [jsxRuntime.jsx(tabs.TabsContent, { value: "profile", children: jsxRuntime.jsx(profileTabContent.ProfileTabContent, {}) }), jsxRuntime.jsx(tabs.TabsContent, { value: "account", children: jsxRuntime.jsx(accountTabContent.AccountTabContent, {}) })] })] }) })] }));
};

exports.SettingsPage = SettingsPage;
//# sourceMappingURL=settings-page.js.map
