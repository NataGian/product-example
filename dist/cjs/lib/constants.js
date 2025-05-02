'use strict';

var lucideReact = require('lucide-react');

const APP_ROUTES = {
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
const appSidebarItems = [
    {
        title: "Πίνακας Ελέγχου",
        href: APP_ROUTES.DASHBOARD.BASE_PAGE,
        icon: lucideReact.ClipboardPaste,
    },
    {
        title: "Ραντεβού",
        href: APP_ROUTES.APPOINTMENTS.BASE_PAGE,
        icon: lucideReact.BookOpen,
    },
    {
        title: "Ρυθμίσεις",
        href: APP_ROUTES.SETTINGS.BASE_PAGE,
        icon: lucideReact.Settings,
    },
];

exports.APP_ROUTES = APP_ROUTES;
exports.appSidebarItems = appSidebarItems;
//# sourceMappingURL=constants.js.map
