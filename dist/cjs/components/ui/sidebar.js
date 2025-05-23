"use client";
'use strict';

var tslib_es6 = require('../../node_modules/tslib/tslib.es6.js');
var jsxRuntime = require('react/jsx-runtime');
var React = require('react');
var reactSlot = require('@radix-ui/react-slot');
var classVarianceAuthority = require('class-variance-authority');
var lucideReact = require('lucide-react');
var useMobile = require('../../hooks/use-mobile.js');
var utils = require('../../lib/utils.js');
var button = require('./button.js');
var input = require('./input.js');
var separator = require('./separator.js');
var sheet = require('./sheet.js');
var skeleton = require('./skeleton.js');
var tooltip = require('./tooltip.js');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespaceDefault(React);

const SIDEBAR_COOKIE_NAME = "sidebar_state";
const SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_WIDTH_MOBILE = "18rem";
const SIDEBAR_WIDTH_ICON = "3rem";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";
const SidebarContext = React__namespace.createContext(null);
function useSidebar() {
    const context = React__namespace.useContext(SidebarContext);
    if (!context) {
        throw new Error("useSidebar must be used within a SidebarProvider.");
    }
    return context;
}
function SidebarProvider(_a) {
    var { defaultOpen = true, open: openProp, onOpenChange: setOpenProp, className, style, children } = _a, props = tslib_es6.__rest(_a, ["defaultOpen", "open", "onOpenChange", "className", "style", "children"]);
    const isMobile = useMobile.useIsMobile();
    const [openMobile, setOpenMobile] = React__namespace.useState(false);
    // This is the internal state of the sidebar.
    // We use openProp and setOpenProp for control from outside the component.
    const [_open, _setOpen] = React__namespace.useState(defaultOpen);
    const open = openProp !== null && openProp !== void 0 ? openProp : _open;
    const setOpen = React__namespace.useCallback((value) => {
        const openState = typeof value === "function" ? value(open) : value;
        if (setOpenProp) {
            setOpenProp(openState);
        }
        else {
            _setOpen(openState);
        }
        // This sets the cookie to keep the sidebar state.
        document.cookie = `${SIDEBAR_COOKIE_NAME}=${openState}; path=/; max-age=${SIDEBAR_COOKIE_MAX_AGE}`;
    }, [setOpenProp, open]);
    // Helper to toggle the sidebar.
    const toggleSidebar = React__namespace.useCallback(() => {
        return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
    }, [isMobile, setOpen, setOpenMobile]);
    // Adds a keyboard shortcut to toggle the sidebar.
    React__namespace.useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
                (event.metaKey || event.ctrlKey)) {
                event.preventDefault();
                toggleSidebar();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [toggleSidebar]);
    // We add a state so that we can do data-state="expanded" or "collapsed".
    // This makes it easier to style the sidebar with Tailwind classes.
    const state = open ? "expanded" : "collapsed";
    const contextValue = React__namespace.useMemo(() => ({
        state,
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
    }), [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar]);
    return (jsxRuntime.jsx(SidebarContext.Provider, { value: contextValue, children: jsxRuntime.jsx(tooltip.TooltipProvider, { delayDuration: 0, children: jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-wrapper", style: Object.assign({ "--sidebar-width": SIDEBAR_WIDTH, "--sidebar-width-icon": SIDEBAR_WIDTH_ICON }, style), className: utils.cn("group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full", className) }, props, { children: children })) }) }));
}
function Sidebar(_a) {
    var { side = "left", variant = "sidebar", collapsible = "offcanvas", className, children } = _a, props = tslib_es6.__rest(_a, ["side", "variant", "collapsible", "className", "children"]);
    const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
    if (collapsible === "none") {
        return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar", className: utils.cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className) }, props, { children: children })));
    }
    if (isMobile) {
        return (jsxRuntime.jsx(sheet.Sheet, Object.assign({ open: openMobile, onOpenChange: setOpenMobile }, props, { children: jsxRuntime.jsxs(sheet.SheetContent, { "data-sidebar": "sidebar", "data-slot": "sidebar", "data-mobile": "true", className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden", style: {
                    "--sidebar-width": SIDEBAR_WIDTH_MOBILE,
                }, side: side, children: [jsxRuntime.jsxs(sheet.SheetHeader, { className: "sr-only", children: [jsxRuntime.jsx(sheet.SheetTitle, { children: "Sidebar" }), jsxRuntime.jsx(sheet.SheetDescription, { children: "Displays the mobile sidebar." })] }), jsxRuntime.jsx("div", { className: "flex h-full w-full flex-col", children: children })] }) })));
    }
    return (jsxRuntime.jsxs("div", { className: "group peer text-sidebar-foreground hidden md:block", "data-state": state, "data-collapsible": state === "collapsed" ? collapsible : "", "data-variant": variant, "data-side": side, "data-slot": "sidebar", children: [jsxRuntime.jsx("div", { "data-slot": "sidebar-gap", className: utils.cn("relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear", "group-data-[collapsible=offcanvas]:w-0", "group-data-[side=right]:rotate-180", variant === "floating" || variant === "inset"
                    ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]"
                    : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)") }), jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-container", className: utils.cn("fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex", side === "left"
                    ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]"
                    : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]", 
                // Adjust the padding for floating and inset variants.
                variant === "floating" || variant === "inset"
                    ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]"
                    : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l", className) }, props, { children: jsxRuntime.jsx("div", { "data-sidebar": "sidebar", "data-slot": "sidebar-inner", className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm", children: children }) }))] }));
}
function SidebarTrigger(_a) {
    var { className, onClick } = _a, props = tslib_es6.__rest(_a, ["className", "onClick"]);
    const { toggleSidebar } = useSidebar();
    return (jsxRuntime.jsxs(button.Button, Object.assign({ "data-sidebar": "trigger", "data-slot": "sidebar-trigger", variant: "ghost", size: "icon", className: utils.cn("size-7", className), onClick: (event) => {
            onClick === null || onClick === void 0 ? void 0 : onClick(event);
            toggleSidebar();
        } }, props, { children: [jsxRuntime.jsx(lucideReact.PanelLeftIcon, {}), jsxRuntime.jsx("span", { className: "sr-only", children: "Toggle Sidebar" })] })));
}
function SidebarRail(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    const { toggleSidebar } = useSidebar();
    return (jsxRuntime.jsx("button", Object.assign({ "data-sidebar": "rail", "data-slot": "sidebar-rail", "aria-label": "Toggle Sidebar", tabIndex: -1, onClick: toggleSidebar, title: "Toggle Sidebar", className: utils.cn("hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex", "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize", "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize", "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full", "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2", "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2", className) }, props)));
}
function SidebarInset(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("main", Object.assign({ "data-slot": "sidebar-inset", className: utils.cn("bg-background relative flex w-full flex-1 flex-col", "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2", className) }, props)));
}
function SidebarInput(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(input.Input, Object.assign({ "data-slot": "sidebar-input", "data-sidebar": "input", className: utils.cn("bg-background h-8 w-full shadow-none", className) }, props)));
}
function SidebarHeader(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-header", "data-sidebar": "header", className: utils.cn("flex flex-col gap-2 p-2", className) }, props)));
}
function SidebarFooter(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-footer", "data-sidebar": "footer", className: utils.cn("flex flex-col gap-2 p-2", className) }, props)));
}
function SidebarSeparator(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx(separator.Separator, Object.assign({ "data-slot": "sidebar-separator", "data-sidebar": "separator", className: utils.cn("bg-sidebar-border mx-2 w-auto", className) }, props)));
}
function SidebarContent(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-content", "data-sidebar": "content", className: utils.cn("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", className) }, props)));
}
function SidebarGroup(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-group", "data-sidebar": "group", className: utils.cn("relative flex w-full min-w-0 flex-col p-2", className) }, props)));
}
function SidebarGroupLabel(_a) {
    var { className, asChild = false } = _a, props = tslib_es6.__rest(_a, ["className", "asChild"]);
    const Comp = asChild ? reactSlot.Slot : "div";
    return (jsxRuntime.jsx(Comp, Object.assign({ "data-slot": "sidebar-group-label", "data-sidebar": "group-label", className: utils.cn("text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0", className) }, props)));
}
function SidebarGroupAction(_a) {
    var { className, asChild = false } = _a, props = tslib_es6.__rest(_a, ["className", "asChild"]);
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, Object.assign({ "data-slot": "sidebar-group-action", "data-sidebar": "group-action", className: utils.cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", 
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden", "group-data-[collapsible=icon]:hidden", className) }, props)));
}
function SidebarGroupContent(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-group-content", "data-sidebar": "group-content", className: utils.cn("w-full text-sm", className) }, props)));
}
function SidebarMenu(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("ul", Object.assign({ "data-slot": "sidebar-menu", "data-sidebar": "menu", className: utils.cn("flex w-full min-w-0 flex-col gap-1", className) }, props)));
}
function SidebarMenuItem(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("li", Object.assign({ "data-slot": "sidebar-menu-item", "data-sidebar": "menu-item", className: utils.cn("group/menu-item relative", className) }, props)));
}
const sidebarMenuButtonVariants = classVarianceAuthority.cva("peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-8! group-data-[collapsible=icon]:p-2! [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", {
    variants: {
        variant: {
            default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
            outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]",
        },
        size: {
            default: "h-8 text-sm",
            sm: "h-7 text-xs",
            lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!",
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});
function SidebarMenuButton(_a) {
    var { asChild = false, isActive = false, variant = "default", size = "default", tooltip: tooltip$1, className } = _a, props = tslib_es6.__rest(_a, ["asChild", "isActive", "variant", "size", "tooltip", "className"]);
    const Comp = asChild ? reactSlot.Slot : "button";
    const { isMobile, state } = useSidebar();
    const button = (jsxRuntime.jsx(Comp, Object.assign({ "data-slot": "sidebar-menu-button", "data-sidebar": "menu-button", "data-size": size, "data-active": isActive, className: utils.cn(sidebarMenuButtonVariants({ variant, size }), className) }, props)));
    if (!tooltip$1) {
        return button;
    }
    if (typeof tooltip$1 === "string") {
        tooltip$1 = {
            children: tooltip$1,
        };
    }
    return (jsxRuntime.jsxs(tooltip.Tooltip, { children: [jsxRuntime.jsx(tooltip.TooltipTrigger, { asChild: true, children: button }), jsxRuntime.jsx(tooltip.TooltipContent, Object.assign({ side: "right", align: "center", hidden: state !== "collapsed" || isMobile }, tooltip$1))] }));
}
function SidebarMenuAction(_a) {
    var { className, asChild = false, showOnHover = false } = _a, props = tslib_es6.__rest(_a, ["className", "asChild", "showOnHover"]);
    const Comp = asChild ? reactSlot.Slot : "button";
    return (jsxRuntime.jsx(Comp, Object.assign({ "data-slot": "sidebar-menu-action", "data-sidebar": "menu-action", className: utils.cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0", 
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", showOnHover &&
            "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0", className) }, props)));
}
function SidebarMenuBadge(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("div", Object.assign({ "data-slot": "sidebar-menu-badge", "data-sidebar": "menu-badge", className: utils.cn("text-sidebar-foreground pointer-events-none absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums select-none", "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground", "peer-data-[size=sm]/menu-button:top-1", "peer-data-[size=default]/menu-button:top-1.5", "peer-data-[size=lg]/menu-button:top-2.5", "group-data-[collapsible=icon]:hidden", className) }, props)));
}
function SidebarMenuSkeleton(_a) {
    var { className, showIcon = false } = _a, props = tslib_es6.__rest(_a, ["className", "showIcon"]);
    // Random width between 50 to 90%.
    const width = React__namespace.useMemo(() => {
        return `${Math.floor(Math.random() * 40) + 50}%`;
    }, []);
    return (jsxRuntime.jsxs("div", Object.assign({ "data-slot": "sidebar-menu-skeleton", "data-sidebar": "menu-skeleton", className: utils.cn("flex h-8 items-center gap-2 rounded-md px-2", className) }, props, { children: [showIcon && (jsxRuntime.jsx(skeleton.Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" })), jsxRuntime.jsx(skeleton.Skeleton, { className: "h-4 max-w-(--skeleton-width) flex-1", "data-sidebar": "menu-skeleton-text", style: {
                    "--skeleton-width": width,
                } })] })));
}
function SidebarMenuSub(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("ul", Object.assign({ "data-slot": "sidebar-menu-sub", "data-sidebar": "menu-sub", className: utils.cn("border-sidebar-border mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l px-2.5 py-0.5", "group-data-[collapsible=icon]:hidden", className) }, props)));
}
function SidebarMenuSubItem(_a) {
    var { className } = _a, props = tslib_es6.__rest(_a, ["className"]);
    return (jsxRuntime.jsx("li", Object.assign({ "data-slot": "sidebar-menu-sub-item", "data-sidebar": "menu-sub-item", className: utils.cn("group/menu-sub-item relative", className) }, props)));
}
function SidebarMenuSubButton(_a) {
    var { asChild = false, size = "md", isActive = false, className } = _a, props = tslib_es6.__rest(_a, ["asChild", "size", "isActive", "className"]);
    const Comp = asChild ? reactSlot.Slot : "a";
    return (jsxRuntime.jsx(Comp, Object.assign({ "data-slot": "sidebar-menu-sub-button", "data-sidebar": "menu-sub-button", "data-size": size, "data-active": isActive, className: utils.cn("text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0", "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground", size === "sm" && "text-xs", size === "md" && "text-sm", "group-data-[collapsible=icon]:hidden", className) }, props)));
}

exports.Sidebar = Sidebar;
exports.SidebarContent = SidebarContent;
exports.SidebarFooter = SidebarFooter;
exports.SidebarGroup = SidebarGroup;
exports.SidebarGroupAction = SidebarGroupAction;
exports.SidebarGroupContent = SidebarGroupContent;
exports.SidebarGroupLabel = SidebarGroupLabel;
exports.SidebarHeader = SidebarHeader;
exports.SidebarInput = SidebarInput;
exports.SidebarInset = SidebarInset;
exports.SidebarMenu = SidebarMenu;
exports.SidebarMenuAction = SidebarMenuAction;
exports.SidebarMenuBadge = SidebarMenuBadge;
exports.SidebarMenuButton = SidebarMenuButton;
exports.SidebarMenuItem = SidebarMenuItem;
exports.SidebarMenuSkeleton = SidebarMenuSkeleton;
exports.SidebarMenuSub = SidebarMenuSub;
exports.SidebarMenuSubButton = SidebarMenuSubButton;
exports.SidebarMenuSubItem = SidebarMenuSubItem;
exports.SidebarProvider = SidebarProvider;
exports.SidebarRail = SidebarRail;
exports.SidebarSeparator = SidebarSeparator;
exports.SidebarTrigger = SidebarTrigger;
exports.useSidebar = useSidebar;
//# sourceMappingURL=sidebar.js.map
