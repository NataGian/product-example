"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLayoutTop = AppLayoutTop;
const jsx_runtime_1 = require("react/jsx-runtime");
const sidebar_1 = require("@/components/ui/sidebar");
const breadcrumb_1 = require("@/components/ui/breadcrumb");
const navigation_1 = require("@/lib/navigation");
const constants_1 = require("@/lib/constants");
function AppLayoutTop() {
    var _a;
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex items-center gap-2 px-4 py-2", children: [(0, jsx_runtime_1.jsx)(sidebar_1.SidebarTrigger, {}), (0, jsx_runtime_1.jsx)("div", { className: "pl-2 border-l", children: (0, jsx_runtime_1.jsx)(breadcrumb_1.Breadcrumb, { children: (_a = (0, navigation_1.useCurrentSidebarItem)(constants_1.appSidebarItems)) === null || _a === void 0 ? void 0 : _a.title }) })] }));
}
//# sourceMappingURL=app-layout-top.js.map