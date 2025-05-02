import {usePathname} from "next/navigation";
import {SidebarItem} from "@/lib/types";

export const useCurrentSidebarItem = (sidebarItems: SidebarItem[]) => {
    const pathname = usePathname();
    return sidebarItems.find(item => pathname.startsWith(item.href));
}
export const NavigationClientOnly = 'use client';