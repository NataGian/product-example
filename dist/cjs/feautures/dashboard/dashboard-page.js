"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@/components");
const overview_tab_1 = require("@/feautures/dashboard/tabs/overview-tab");
const reports_tab_1 = require("@/feautures/dashboard/tabs/reports-tab");
const analytics_tab_1 = require("@/feautures/dashboard/tabs/analytics-tab");
const DashboardPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pl-0 pr-6 space-y-6", children: [(0, jsx_runtime_1.jsx)("div", { className: "flex justify-between items-center", children: (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold", children: "\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03B1\u03C2" })] }) }), (0, jsx_runtime_1.jsxs)(components_1.Tabs, { defaultValue: "overview", className: "w-full", children: [(0, jsx_runtime_1.jsxs)(components_1.TabsList, { className: "mb-4", children: [(0, jsx_runtime_1.jsx)(components_1.TabsTrigger, { value: "overview", children: "\u0395\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7" }), (0, jsx_runtime_1.jsx)(components_1.TabsTrigger, { value: "analytics", children: "\u0391\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03AC" }), (0, jsx_runtime_1.jsx)(components_1.TabsTrigger, { value: "reports", children: "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2" })] }), (0, jsx_runtime_1.jsx)(overview_tab_1.OverviewTab, {}), (0, jsx_runtime_1.jsx)(analytics_tab_1.AnalyticsTab, {}), (0, jsx_runtime_1.jsx)(reports_tab_1.ReportsTab, {})] })] }));
};
exports.DashboardPage = DashboardPage;
//# sourceMappingURL=dashboard-page.js.map