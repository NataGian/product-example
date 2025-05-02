"use client";
'use strict';

var jsxRuntime = require('react/jsx-runtime');
var sidebar = require('../../ui/sidebar.js');
var navigation = require('next/navigation');
var clsx = require('clsx');
var constants = require('../../../lib/constants.js');

function AppSidebar() {
    const pathname = navigation.usePathname();
    return (jsxRuntime.jsx(sidebar.Sidebar, { children: jsxRuntime.jsx(sidebar.SidebarContent, { children: jsxRuntime.jsx(sidebar.SidebarGroup, { children: jsxRuntime.jsx(sidebar.SidebarGroupContent, { className: "mt-2", children: jsxRuntime.jsx(sidebar.SidebarMenu, { children: constants.appSidebarItems.map((item) => {
                            const isActive = pathname.startsWith(item.href);
                            return (jsxRuntime.jsx(sidebar.SidebarMenuItem, { className: "mb-2", children: jsxRuntime.jsx(sidebar.SidebarMenuButton, { asChild: true, children: jsxRuntime.jsxs("a", { href: item.href, className: clsx.clsx("flex items-center gap-2 px-3 py-2 rounded-md", {
                                            "bg-muted text-primary font-medium": isActive,
                                            "text-primary-foreground hover:bg-accent": !isActive,
                                        }), children: [jsxRuntime.jsx(item.icon, {}), jsxRuntime.jsx("span", { children: item.title })] }) }) }, item.title));
                        }) }) }) }) }) }));
}

exports.AppSidebar = AppSidebar;
//# sourceMappingURL=app-sidebar.js.map
