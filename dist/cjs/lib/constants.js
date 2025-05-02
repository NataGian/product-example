"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appSidebarItems = exports.APP_ROUTES = void 0;
const lucide_react_1 = require("lucide-react");
exports.APP_ROUTES = {
    DASHBOARD: {
        BASE_PAGE: '/dashboard',
    },
    APPOINTMENTS: {
        BASE_PAGE: '/appointments',
    },
    SETTINGS: {
        BASE_PAGE: '/settings',
    },
};
exports.appSidebarItems = [
    {
        title: "Πίνακας Ελέγχου",
        href: exports.APP_ROUTES.DASHBOARD.BASE_PAGE,
        icon: lucide_react_1.ClipboardPaste,
    },
    {
        title: "Ραντεβού",
        href: exports.APP_ROUTES.APPOINTMENTS.BASE_PAGE,
        icon: lucide_react_1.BookOpen,
    },
    {
        title: "Ρυθμίσεις",
        href: exports.APP_ROUTES.SETTINGS.BASE_PAGE,
        icon: lucide_react_1.Settings,
    },
];
//# sourceMappingURL=constants.js.map