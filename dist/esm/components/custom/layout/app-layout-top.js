"use client";
import { jsxs, jsx } from 'react/jsx-runtime';
import { SidebarTrigger } from '../../ui/sidebar.js';
import { Breadcrumb } from '../../ui/breadcrumb.js';
import { useCurrentSidebarItem } from '../../../lib/navigation.js';
import { appSidebarItems } from '../../../lib/constants.js';

function AppLayoutTop() {
    var _a;
    return (jsxs("div", { className: "flex items-center gap-2 px-4 py-2", children: [jsx(SidebarTrigger, {}), jsx("div", { className: "pl-2 border-l", children: jsx(Breadcrumb, { children: (_a = useCurrentSidebarItem(appSidebarItems)) === null || _a === void 0 ? void 0 : _a.title }) })] }));
}

export { AppLayoutTop };
//# sourceMappingURL=app-layout-top.js.map
