import {LucideIcon} from "lucide-react";
import {ComponentType} from "react";

export type SidebarItem = {
    title: string;
    icon: LucideIcon;
    href: string;
}

export interface PageOptions {
    [key: string]: any;
}

export interface PageDefinition {
    component: ComponentType<any>;
    options: PageOptions;
}