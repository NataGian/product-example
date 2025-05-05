import { ClipboardPaste, BookOpen, Settings } from 'lucide-react';

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
        icon: ClipboardPaste,
    },
    {
        title: "Ραντεβού",
        href: APP_ROUTES.APPOINTMENTS.BASE_PAGE,
        icon: BookOpen,
    },
    {
        title: "Ρυθμίσεις",
        href: APP_ROUTES.SETTINGS.BASE_PAGE,
        icon: Settings,
    },
];

export { APP_ROUTES, appSidebarItems };
//# sourceMappingURL=constants.js.map
