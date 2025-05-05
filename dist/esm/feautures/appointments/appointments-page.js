import { jsxs, jsx } from 'react/jsx-runtime';
import '../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-avatar';
import 'clsx';
import 'tailwind-merge';
import '../../components/ui/badge.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import { Button } from '../../components/ui/button.js';
import '@radix-ui/react-label';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs.js';
import 'react';
import 'next/navigation';
import '../../lib/constants.js';
import { UpcomingAppointmentsTab } from './tabs/upcoming-appointments-tab.js';
import { PastAppointmentsTab } from './tabs/past-appointments-tab.js';
import { CanceledAppointmentsTab } from './tabs/canceled-appointments-tab.js';

const AppointmentsPage = () => {
    return (jsxs("div", { className: "pl-0 pr-6 space-y-6", children: [jsxs("div", { className: "flex justify-between items-center", children: [jsxs("div", { children: [jsx("h1", { className: "text-3xl font-bold", children: "\u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" }), jsx("p", { className: "text-gray-500", children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD \u03C3\u03B1\u03C2" })] }), jsx(Button, { children: "+ \u039D\u03AD\u03BF \u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" })] }), jsxs(Tabs, { defaultValue: "upcoming", className: "w-full", children: [jsxs(TabsList, { className: "mb-4", children: [jsx(TabsTrigger, { value: "upcoming", children: "\u0395\u03C0\u03B5\u03C1\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1" }), jsx(TabsTrigger, { value: "past", children: "\u03A0\u03B1\u03C1\u03B5\u03BB\u03B8\u03CC\u03BD\u03C4\u03B1" }), jsx(TabsTrigger, { value: "canceled", children: "\u0391\u03BA\u03C5\u03C1\u03C9\u03BC\u03AD\u03BD\u03B1" })] }), jsx(UpcomingAppointmentsTab, {}), jsx(PastAppointmentsTab, {}), jsx(CanceledAppointmentsTab, {})] })] }));
};

export { AppointmentsPage };
//# sourceMappingURL=appointments-page.js.map
