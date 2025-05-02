'use client'
import {SidebarTrigger} from "@/components/ui/sidebar"
import {Breadcrumb} from "@/components/ui/breadcrumb"
import {useCurrentSidebarItem} from "@/lib/navigation";
import {appSidebarItems} from "@/lib/constants";

export function AppLayoutTop() {
    return (
        <div className="flex items-center gap-2 px-4 py-2">
            <SidebarTrigger/>
            <div className="pl-2 border-l">
                <Breadcrumb>
                    {useCurrentSidebarItem(appSidebarItems)?.title}
                </Breadcrumb>
            </div>
        </div>
    )
}
