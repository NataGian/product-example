import { jsxs, jsx } from 'react/jsx-runtime';
import { Avatar, AvatarFallback } from '../../../components/ui/avatar.js';
import { Badge } from '../../../components/ui/badge.js';
import '../../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import '../../../components/ui/button.js';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card.js';
import '@radix-ui/react-label';
import '@radix-ui/react-select';
import '@radix-ui/react-separator';
import '../../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { TabsContent } from '../../../components/ui/tabs.js';
import 'react';
import 'next/navigation';
import '../../../lib/constants.js';

function OverviewTab() {
    return (jsxs(TabsContent, { value: "overview", className: "space-y-4", children: [jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u03A3\u03CD\u03BD\u03BF\u03BB\u03BF \u03A7\u03C1\u03B7\u03C3\u03C4\u03CE\u03BD" }), jsx(CardDescription, { children: "\u0391\u03CD\u03BE\u03B7\u03C3\u03B7 \u03C7\u03C1\u03B7\u03C3\u03C4\u03CE\u03BD \u03B1\u03C5\u03C4\u03CC\u03BD \u03C4\u03BF\u03BD \u03BC\u03AE\u03BD\u03B1" })] }), jsxs(CardContent, { children: [jsx("p", { className: "text-4xl font-bold", children: "2.853" }), jsx(Badge, { className: "mt-2", variant: "outline", children: "+12,5%" })] })] }), jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u0388\u03C3\u03BF\u03B4\u03B1" }), jsx(CardDescription, { children: "\u039C\u03B7\u03BD\u03B9\u03B1\u03AF\u03B1 \u03AD\u03C3\u03BF\u03B4\u03B1" })] }), jsxs(CardContent, { children: [jsx("p", { className: "text-4xl font-bold", children: "34.257\u20AC" }), jsx(Badge, { className: "mt-2", variant: "outline", children: "+8,2%" })] })] }), jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u0395\u03BD\u03B5\u03C1\u03B3\u03AC \u0388\u03C1\u03B3\u03B1" }), jsx(CardDescription, { children: "\u03A4\u03C1\u03AD\u03C7\u03BF\u03BD \u03C4\u03C1\u03AF\u03BC\u03B7\u03BD\u03BF" })] }), jsxs(CardContent, { children: [jsx("p", { className: "text-4xl font-bold", children: "12" }), jsx(Badge, { className: "mt-2", variant: "outline", children: "+2 \u03BD\u03AD\u03B1" })] })] })] }), jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u03A0\u03C1\u03CC\u03C3\u03C6\u03B1\u03C4\u03B7 \u0394\u03C1\u03B1\u03C3\u03C4\u03B7\u03C1\u03B9\u03CC\u03C4\u03B7\u03C4\u03B1" }), jsx(CardDescription, { children: "\u03A4\u03B5\u03BB\u03B5\u03C5\u03C4\u03B1\u03AF\u03B5\u03C2 \u03B5\u03BD\u03B7\u03BC\u03B5\u03C1\u03CE\u03C3\u03B5\u03B9\u03C2 \u03B1\u03C0\u03CC \u03C4\u03B7\u03BD \u03BF\u03BC\u03AC\u03B4\u03B1 \u03C3\u03B1\u03C2" })] }), jsx(CardContent, { children: jsx("div", { className: "space-y-4", children: [1, 2, 3].map((i) => (jsxs("div", { className: "flex items-start gap-4 pb-4 border-b", children: [jsx(Avatar, { children: jsxs(AvatarFallback, { children: ["\u03A7", i] }) }), jsxs("div", { children: [jsx("p", { className: "font-medium", children: "\u0395\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7 \u03AD\u03C1\u03B3\u03BF\u03C5" }), jsxs("p", { className: "text-sm text-gray-500", children: ["\u039F \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7\u03C2 ", i, " \u03B5\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B5 \u03C4\u03B7\u03BD \u03BA\u03B1\u03C4\u03AC\u03C3\u03C4\u03B1\u03C3\u03B7 \u03C4\u03BF\u03C5 \u03AD\u03C1\u03B3\u03BF\u03C5"] }), jsx("p", { className: "text-xs text-gray-400 mt-1", children: "\u03C0\u03C1\u03B9\u03BD \u03B1\u03C0\u03CC 2 \u03CE\u03C1\u03B5\u03C2" })] })] }, i))) }) })] })] }));
}

export { OverviewTab };
//# sourceMappingURL=overview-tab.js.map
