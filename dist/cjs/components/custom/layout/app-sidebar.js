"use strict";
'use client';
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppSidebar = AppSidebar;
const jsx_runtime_1 = require("react/jsx-runtime");
const sidebar_1 = require("@/components/ui/sidebar");
const navigation_1 = require("next/navigation");
const clsx_1 = require("clsx");
const constants_1 = require("@/lib/constants");
function AppSidebar() {
    const pathname = (0, navigation_1.usePathname)();
    return ((0, jsx_runtime_1.jsx)(sidebar_1.Sidebar, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarContent, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarGroup, { children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarGroupContent, { className: "mt-2", children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenu, { children: constants_1.appSidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return ((0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuItem, { className: "mb-2", children: (0, jsx_runtime_1.jsx)(sidebar_1.SidebarMenuButton, { asChild: true, children: (0, jsx_runtime_1.jsxs)("a", { href: item.href, className: (0, clsx_1.clsx)("flex items-center gap-2 px-3 py-2 rounded-md", {
                                            "bg-muted text-primary font-medium": isActive,
                                            "text-primary-foreground hover:bg-accent": !isActive,
                                        }), children: [(0, jsx_runtime_1.jsx)(item.icon, {}), (0, jsx_runtime_1.jsx)("span", { children: item.title })] }) }) }, item.title));
                        }) }) }) }) }) }));
}
//# sourceMappingURL=app-sidebar.js.map