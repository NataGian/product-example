import { jsx, jsxs } from 'react/jsx-runtime';
import React__default from 'react';
import { cn } from '../../../lib/utils.js';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from '../../ui/breadcrumb.js';

function AppLayout({ children, className, breadcrumbs = [], }) {
    return (jsx("div", { className: "flex-1 p-6 md:p-8", children: jsxs("div", { className: "w-full overflow-auto", children: [breadcrumbs.length > 0 && (jsx(Breadcrumb, { className: "mb-4", children: breadcrumbs.map((item, i) => (jsxs(React__default.Fragment, { children: [jsx(BreadcrumbItem, { children: item.href ? (jsx(BreadcrumbLink, { href: item.href, children: item.label })) : (jsx("span", { className: "text-muted-foreground", children: item.label })) }), i < breadcrumbs.length - 1 && jsx(BreadcrumbSeparator, {})] }, i))) })), jsx("div", { className: cn("", className), children: children })] }) }));
}

export { AppLayout };
//# sourceMappingURL=app-layout.js.map
