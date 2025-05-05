import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Tabs, TabsList, TabsTrigger } from "@/components";
import { OverviewTab } from "@/feautures/dashboard/tabs/overview-tab";
import { ReportsTab } from "@/feautures/dashboard/tabs/reports-tab";
import { AnalyticsTab } from "@/feautures/dashboard/tabs/analytics-tab";
export const DashboardPage = () => {
    return (_jsxs("div", { className: "pl-0 pr-6 space-y-6", children: [_jsx("div", { className: "flex justify-between items-center", children: _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", children: "\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5" }), _jsx("p", { className: "text-gray-500", children: "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03B1\u03C2" })] }) }), _jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [_jsxs(TabsList, { className: "mb-4", children: [_jsx(TabsTrigger, { value: "overview", children: "\u0395\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7" }), _jsx(TabsTrigger, { value: "analytics", children: "\u0391\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03AC" }), _jsx(TabsTrigger, { value: "reports", children: "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2" })] }), _jsx(OverviewTab, {}), _jsx(AnalyticsTab, {}), _jsx(ReportsTab, {})] })] }));
};
//# sourceMappingURL=dashboard-page.js.map