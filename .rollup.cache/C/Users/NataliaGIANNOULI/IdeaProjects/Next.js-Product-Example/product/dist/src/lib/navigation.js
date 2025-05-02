import { usePathname } from "next/navigation";
export function useCurrentSidebarItem(sidebarItems) {
    const pathname = usePathname();
    return sidebarItems.find(item => pathname.startsWith(item.href));
}
//# sourceMappingURL=navigation.js.map