import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from "react";
import { cn } from "../../../lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "../../ui/breadcrumb";
export function AppLayout({ children, className, breadcrumbs = [], }) {
    return (_jsx("div", { className: "flex-1 p-6 md:p-8", children: _jsxs("div", { className: "w-full overflow-auto", children: [breadcrumbs.length > 0 && (_jsx(Breadcrumb, { className: "mb-4", children: breadcrumbs.map((item, i) => (_jsxs(React.Fragment, { children: [_jsx(BreadcrumbItem, { children: item.href ? (_jsx(BreadcrumbLink, { href: item.href, children: item.label })) : (_jsx("span", { className: "text-muted-foreground", children: item.label })) }), i < breadcrumbs.length - 1 && _jsx(BreadcrumbSeparator, {})] }, i))) })), _jsx("div", { className: cn("", className), children: children })] }) }));
}
//# sourceMappingURL=app-layout.js.map