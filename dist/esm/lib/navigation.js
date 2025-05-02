import { usePathname } from 'next/navigation';

const useCurrentSidebarItem = (sidebarItems) => {
    const pathname = usePathname();
    return sidebarItems.find(item => pathname.startsWith(item.href));
};
const NavigationClientOnly = 'use client';

export { NavigationClientOnly, useCurrentSidebarItem };
//# sourceMappingURL=navigation.js.map
