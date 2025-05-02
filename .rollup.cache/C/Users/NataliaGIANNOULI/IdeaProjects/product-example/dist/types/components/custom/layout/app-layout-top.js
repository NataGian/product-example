'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useCurrentSidebarItem } from "@/lib/navigation";
import { appSidebarItems } from "@/lib/constants";
export function AppLayoutTop() {
    var _a;
    return (_jsxs("div", { className: "flex items-center gap-2 px-4 py-2", children: [_jsx(SidebarTrigger, {}), _jsx("div", { className: "pl-2 border-l", children: _jsx(Breadcrumb, { children: (_a = useCurrentSidebarItem(appSidebarItems)) === null || _a === void 0 ? void 0 : _a.title }) })] }));
}
//# sourceMappingURL=app-layout-top.js.map