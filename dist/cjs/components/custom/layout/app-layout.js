'use strict';

var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var utils = require('../../../lib/utils.js');
var breadcrumb = require('../../ui/breadcrumb.js');

function AppLayout({ children, className, breadcrumbs = [], }) {
    return (jsxRuntime.jsx("div", { className: "flex-1 p-6 md:p-8", children: jsxRuntime.jsxs("div", { className: "w-full overflow-auto", children: [breadcrumbs.length > 0 && (jsxRuntime.jsx(breadcrumb.Breadcrumb, { className: "mb-4", children: breadcrumbs.map((item, i) => (jsxRuntime.jsxs(React.Fragment, { children: [jsxRuntime.jsx(breadcrumb.BreadcrumbItem, { children: item.href ? (jsxRuntime.jsx(breadcrumb.BreadcrumbLink, { href: item.href, children: item.label })) : (jsxRuntime.jsx("span", { className: "text-muted-foreground", children: item.label })) }), i < breadcrumbs.length - 1 && jsxRuntime.jsx(breadcrumb.BreadcrumbSeparator, {})] }, i))) })), jsxRuntime.jsx("div", { className: utils.cn("", className), children: children })] }) }));
}

exports.AppLayout = AppLayout;
//# sourceMappingURL=app-layout.js.map
