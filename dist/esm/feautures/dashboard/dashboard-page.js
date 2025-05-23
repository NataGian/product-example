import { jsxs, jsx } from 'react/jsx-runtime';
import '../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-avatar';
import 'clsx';
import 'tailwind-merge';
import '../../components/ui/badge.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import '../../components/ui/button.js';
import '@radix-ui/react-label';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs.js';
import 'react';
import 'next/navigation';
import '../../lib/constants.js';
import { OverviewTab } from './tabs/overview-tab.js';
import { ReportsTab } from './tabs/reports-tab.js';
import { AnalyticsTab } from './tabs/analytics-tab.js';

const DashboardPage = () => {
    return (jsxs("div", { className: "pl-0 pr-6 space-y-6", children: [jsx("div", { className: "flex justify-between items-center", children: jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold", children: "\u03A0\u03AF\u03BD\u03B1\u03BA\u03B1\u03C2 \u0395\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5" }), jsx("p", { className: "text-gray-500", children: "\u039A\u03B1\u03BB\u03CE\u03C2 \u03AE\u03C1\u03B8\u03B1\u03C4\u03B5 \u03C3\u03C4\u03BF\u03BD \u03C0\u03AF\u03BD\u03B1\u03BA\u03B1 \u03B5\u03BB\u03AD\u03B3\u03C7\u03BF\u03C5 \u03C3\u03B1\u03C2" })] }) }), jsxs(Tabs, { defaultValue: "overview", className: "w-full", children: [jsxs(TabsList, { className: "mb-4", children: [jsx(TabsTrigger, { value: "overview", children: "\u0395\u03C0\u03B9\u03C3\u03BA\u03CC\u03C0\u03B7\u03C3\u03B7" }), jsx(TabsTrigger, { value: "analytics", children: "\u0391\u03BD\u03B1\u03BB\u03C5\u03C4\u03B9\u03BA\u03AC" }), jsx(TabsTrigger, { value: "reports", children: "\u0391\u03BD\u03B1\u03C6\u03BF\u03C1\u03AD\u03C2" })] }), jsx(OverviewTab, {}), jsx(AnalyticsTab, {}), jsx(ReportsTab, {})] })] }));
};

export { DashboardPage };
//# sourceMappingURL=dashboard-page.js.map
