import { LucideIcon } from "lucide-react";
import { ComponentType } from "react";
export type SidebarItem = {
    title: string;
    icon: LucideIcon;
    href: string;
};
export interface PageOptions {
    [key: string]: unknown;
}
export interface PageDefinition<P = unknown> {
    component: ComponentType<P>;
    options: PageOptions;
}
