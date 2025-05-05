import React from "react";
interface AppLayoutProps {
    children: React.ReactNode;
    className?: string;
    breadcrumbs?: {
        label: string;
        href?: string;
    }[];
}
export declare function AppLayout({ children, className, breadcrumbs, }: AppLayoutProps): import("react/jsx-runtime").JSX.Element;
export {};
