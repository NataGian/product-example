'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, } from "@/components/ui/sidebar";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { appSidebarItems } from "@/lib/constants";
export function AppSidebar() {
    const pathname = usePathname();
    return (_jsx(Sidebar, { children: _jsx(SidebarContent, { children: _jsx(SidebarGroup, { children: _jsx(SidebarGroupContent, { className: "mt-2", children: _jsx(SidebarMenu, { children: appSidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (_jsx(SidebarMenuItem, { className: "mb-2", children: _jsx(SidebarMenuButton, { asChild: true, children: _jsxs("a", { href: item.href, className: clsx("flex items-center gap-2 px-3 py-2 rounded-md", {
                                            "bg-muted text-primary font-medium": isActive,
                                            "text-primary-foreground hover:bg-accent": !isActive,
                                        }), children: [_jsx(item.icon, {}), _jsx("span", { children: item.title })] }) }) }, item.title));
                        }) }) }) }) }) }));
}
//# sourceMappingURL=app-sidebar.js.map