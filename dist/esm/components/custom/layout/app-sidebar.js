"use client";
import { jsx, jsxs } from 'react/jsx-runtime';
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuItem, SidebarMenuButton } from '../../ui/sidebar.js';
import { usePathname } from 'next/navigation';
import { clsx } from 'clsx';
import { appSidebarItems } from '../../../lib/constants.js';

function AppSidebar() {
    const pathname = usePathname();
    return (jsx(Sidebar, { children: jsx(SidebarContent, { children: jsx(SidebarGroup, { children: jsx(SidebarGroupContent, { className: "mt-2", children: jsx(SidebarMenu, { children: appSidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (jsx(SidebarMenuItem, { className: "mb-2", children: jsx(SidebarMenuButton, { asChild: true, children: jsxs("a", { href: item.href, className: clsx("flex items-center gap-2 px-3 py-2 rounded-md", {
                                            "bg-muted text-primary font-medium": isActive,
                                            "text-primary-foreground hover:bg-accent": !isActive,
                                        }), children: [jsx(item.icon, {}), jsx("span", { children: item.title })] }) }) }, item.title));
                        }) }) }) }) }) }));
}

export { AppSidebar };
//# sourceMappingURL=app-sidebar.js.map
