"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppointmentsPage = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const components_1 = require("@/components");
const upcoming_appointments_tab_1 = require("@/feautures/appointments/tabs/upcoming-appointments-tab");
const past_appointments_tab_1 = require("@/feautures/appointments/tabs/past-appointments-tab");
const canceled_appointments_tab_1 = require("@/feautures/appointments/tabs/canceled-appointments-tab");
const AppointmentsPage = () => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pl-0 pr-6 space-y-6", children: [(0, jsx_runtime_1.jsxs)("div", { className: "flex justify-between items-center", children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("h1", { className: "text-3xl font-bold", children: "\u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" }), (0, jsx_runtime_1.jsx)("p", { className: "text-gray-500", children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03C1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD \u03C3\u03B1\u03C2" })] }), (0, jsx_runtime_1.jsx)(components_1.Button, { children: "+ \u039D\u03AD\u03BF \u03A1\u03B1\u03BD\u03C4\u03B5\u03B2\u03BF\u03CD" })] }), (0, jsx_runtime_1.jsxs)(components_1.Tabs, { defaultValue: "upcoming", className: "w-full", children: [(0, jsx_runtime_1.jsxs)(components_1.TabsList, { className: "mb-4", children: [(0, jsx_runtime_1.jsx)(components_1.TabsTrigger, { value: "upcoming", children: "\u0395\u03C0\u03B5\u03C1\u03C7\u03CC\u03BC\u03B5\u03BD\u03B1" }), (0, jsx_runtime_1.jsx)(components_1.TabsTrigger, { value: "past", children: "\u03A0\u03B1\u03C1\u03B5\u03BB\u03B8\u03CC\u03BD\u03C4\u03B1" }), (0, jsx_runtime_1.jsx)(components_1.TabsTrigger, { value: "canceled", children: "\u0391\u03BA\u03C5\u03C1\u03C9\u03BC\u03AD\u03BD\u03B1" })] }), (0, jsx_runtime_1.jsx)(upcoming_appointments_tab_1.UpcomingAppointmentsTab, {}), (0, jsx_runtime_1.jsx)(past_appointments_tab_1.PastAppointmentsTab, {}), (0, jsx_runtime_1.jsx)(canceled_appointments_tab_1.CanceledAppointmentsTab, {})] })] }));
};
exports.AppointmentsPage = AppointmentsPage;
//# sourceMappingURL=appointments-page.js.map