import React from "react";
import { cn } from "@/lib/utils";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
export function AppLayout({ children, className, breadcrumbs = [], }) {
    return (<div className="flex-1 p-6 md:p-8">
            <div className="w-full overflow-auto">
                {breadcrumbs.length > 0 && (<Breadcrumb className="mb-4">
                        {breadcrumbs.map((item, i) => (<React.Fragment key={i}>
                                <BreadcrumbItem>
                                    {item.href ? (<BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>) : (<span className="text-muted-foreground">{item.label}</span>)}
                                </BreadcrumbItem>
                                {i < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                            </React.Fragment>))}
                    </Breadcrumb>)}
                <div className={cn("", className)}>
                    {children}
                </div>
            </div>
        </div>);
}
//# sourceMappingURL=app-layout.jsx.map