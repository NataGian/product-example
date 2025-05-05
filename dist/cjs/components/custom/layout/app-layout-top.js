"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var sidebar = require('../../ui/sidebar.js');
var breadcrumb = require('../../ui/breadcrumb.js');
var navigation = require('../../../lib/navigation.js');
var constants = require('../../../lib/constants.js');

function AppLayoutTop() {
    var _a;
    return (jsxRuntime.jsxs("div", { className: "flex items-center gap-2 px-4 py-2", children: [jsxRuntime.jsx(sidebar.SidebarTrigger, {}), jsxRuntime.jsx("div", { className: "pl-2 border-l", children: jsxRuntime.jsx(breadcrumb.Breadcrumb, { children: (_a = navigation.useCurrentSidebarItem(constants.appSidebarItems)) === null || _a === void 0 ? void 0 : _a.title }) })] }));
}

exports.AppLayoutTop = AppLayoutTop;
//# sourceMappingURL=app-layout-top.js.map
