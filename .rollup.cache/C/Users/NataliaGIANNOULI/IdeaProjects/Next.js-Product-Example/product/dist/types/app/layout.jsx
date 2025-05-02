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
    return (<html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SidebarProvider>
            <AppSidebar />
            <main className="flex-1 flex flex-col">
                <AppLayoutTop />
                {children}
            </main>
        </SidebarProvider>
        </body>
        </html>);
}
//# sourceMappingURL=layout.jsx.map