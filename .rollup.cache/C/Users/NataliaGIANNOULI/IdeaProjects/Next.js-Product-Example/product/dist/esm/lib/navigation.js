import { usePathname } from "next/navigation";
export const useCurrentSidebarItem = (sidebarItems) => {
    const pathname = usePathname();
    return sidebarItems.find(item => pathname.startsWith(item.href));
};
export const NavigationClientOnly = 'use client';
//# sourceMappingURL=navigation.js.map