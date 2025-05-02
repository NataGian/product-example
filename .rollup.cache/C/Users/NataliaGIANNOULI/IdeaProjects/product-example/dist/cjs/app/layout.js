import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { AppLayoutTop, AppSidebar, SidebarProvider } from "@/components";
const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});
const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});
export const metadata = {
    title: "Product",
    description: "Product example",
};
export default function RootLayout({ children, }) {
    return (_jsx("html", { lang: "en", children: _jsx("body", { className: `${geistSans.variable} ${geistMono.variable} antialiased`, children: _jsxs(SidebarProvider, { children: [_jsx(AppSidebar, {}), _jsxs("main", { className: "flex-1 flex flex-col", children: [_jsx(AppLayoutTop, {}), children] })] }) }) }));
}
//# sourceMappingURL=layout.js.map