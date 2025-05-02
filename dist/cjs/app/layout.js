"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
const jsx_runtime_1 = require("react/jsx-runtime");
const google_1 = require("next/font/google");
require("@/styles/globals.css");
const components_1 = require("@/components");
const geistSans = (0, google_1.Geist)({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = (0, google_1.Geist_Mono)({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
exports.metadata = {
    title: "Product",
    description: "Product example",
};
function RootLayout({ children, }) {
    return ((0, jsx_runtime_1.jsx)("html", { lang: "en", children: (0, jsx_runtime_1.jsx)("body", { className: `${geistSans.variable} ${geistMono.variable} antialiased`, children: (0, jsx_runtime_1.jsxs)(components_1.SidebarProvider, { children: [(0, jsx_runtime_1.jsx)(components_1.AppSidebar, {}), (0, jsx_runtime_1.jsxs)("main", { className: "flex-1 flex flex-col", children: [(0, jsx_runtime_1.jsx)(components_1.AppLayoutTop, {}), children] })] }) }) }));
}
//# sourceMappingURL=layout.js.map