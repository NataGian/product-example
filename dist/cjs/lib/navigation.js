"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavigationClientOnly = exports.useCurrentSidebarItem = void 0;
const navigation_1 = require("next/navigation");
const useCurrentSidebarItem = (sidebarItems) => {
    const pathname = (0, navigation_1.usePathname)();
    return sidebarItems.find(item => pathname.startsWith(item.href));
};
exports.useCurrentSidebarItem = useCurrentSidebarItem;
exports.NavigationClientOnly = 'use client';
//# sourceMappingURL=navigation.js.map