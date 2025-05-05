'use strict';

var navigation = require('next/navigation');

const useCurrentSidebarItem = (sidebarItems) => {
    const pathname = navigation.usePathname();
    return sidebarItems.find(item => pathname.startsWith(item.href));
};
const NavigationClientOnly = 'use client';

exports.NavigationClientOnly = NavigationClientOnly;
exports.useCurrentSidebarItem = useCurrentSidebarItem;
//# sourceMappingURL=navigation.js.map
