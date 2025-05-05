import { jsx, jsxs } from 'react/jsx-runtime';
import '../../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-avatar';
import 'clsx';
import 'tailwind-merge';
import '../../../components/ui/badge.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import { Button } from '../../../components/ui/button.js';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../../components/ui/card.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '../../../components/ui/select.js';
import { Separator } from '../../../components/ui/separator.js';
import '../../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { TabsContent } from '../../../components/ui/tabs.js';
import 'react';
import 'next/navigation';
import '../../../lib/constants.js';

function AccountTabContent() {
    return (jsx(TabsContent, { value: "account", className: "mt-0 space-y-6", children: jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u03A1\u03C5\u03B8\u03BC\u03AF\u03C3\u03B5\u03B9\u03C2 \u039B\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD" }), jsx(CardDescription, { children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03C0\u03C1\u03BF\u03C4\u03B9\u03BC\u03AE\u03C3\u03B5\u03C9\u03BD \u03C4\u03BF\u03C5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD \u03C3\u03B1\u03C2" })] }), jsxs(CardContent, { className: "space-y-6", children: [jsxs("div", { className: "space-y-2", children: [jsx(Label, { htmlFor: "username", children: "\u038C\u03BD\u03BF\u03BC\u03B1 \u03C7\u03C1\u03AE\u03C3\u03C4\u03B7" }), jsx(Input, { id: "username", defaultValue: "giannispap" }), jsx("p", { className: "text-sm text-gray-500", children: "\u03A4\u03BF URL \u03C3\u03B1\u03C2: example.com/user/giannispap" })] }), jsx(Separator, {}), jsxs("div", { className: "space-y-3", children: [jsx("h3", { className: "text-lg font-medium", children: "\u03A0\u03C1\u03BF\u03C4\u03B9\u03BC\u03AE\u03C3\u03B5\u03B9\u03C2 \u0393\u03BB\u03CE\u03C3\u03C3\u03B1\u03C2" }), jsxs("div", { className: "space-y-2", children: [jsx(Label, { htmlFor: "language", children: "\u0393\u03BB\u03CE\u03C3\u03C3\u03B1 \u0395\u03BC\u03C6\u03AC\u03BD\u03B9\u03C3\u03B7\u03C2" }), jsxs(Select, { defaultValue: "el", children: [jsx(SelectTrigger, { id: "language", children: jsx(SelectValue, { placeholder: "\u0395\u03C0\u03B9\u03BB\u03AD\u03BE\u03C4\u03B5 \u03B3\u03BB\u03CE\u03C3\u03C3\u03B1" }) }), jsxs(SelectContent, { children: [jsx(SelectItem, { value: "el", children: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC" }), jsx(SelectItem, { value: "en", children: "\u0391\u03B3\u03B3\u03BB\u03B9\u03BA\u03AC" }), jsx(SelectItem, { value: "fr", children: "\u0393\u03B1\u03BB\u03BB\u03B9\u03BA\u03AC" }), jsx(SelectItem, { value: "de", children: "\u0393\u03B5\u03C1\u03BC\u03B1\u03BD\u03B9\u03BA\u03AC" }), jsx(SelectItem, { value: "es", children: "\u0399\u03C3\u03C0\u03B1\u03BD\u03B9\u03BA\u03AC" })] })] })] })] }), jsx(Separator, {}), jsxs("div", { className: "space-y-3", children: [jsx("h3", { className: "text-lg font-medium", children: "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u039B\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD" }), jsx("p", { className: "text-sm text-gray-500", children: "\u039C\u03CC\u03BD\u03B9\u03BC\u03B7 \u03B4\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u03C4\u03BF\u03C5 \u03BB\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD \u03C3\u03B1\u03C2 \u03BA\u03B1\u03B9 \u03CC\u03BB\u03C9\u03BD \u03C4\u03C9\u03BD \u03C3\u03C7\u03B5\u03C4\u03B9\u03BA\u03CE\u03BD \u03B4\u03B5\u03B4\u03BF\u03BC\u03AD\u03BD\u03C9\u03BD. \u0391\u03C5\u03C4\u03AE \u03B7 \u03B5\u03BD\u03AD\u03C1\u03B3\u03B5\u03B9\u03B1 \u03B4\u03B5\u03BD \u03BC\u03C0\u03BF\u03C1\u03B5\u03AF \u03BD\u03B1 \u03B1\u03BD\u03B1\u03B9\u03C1\u03B5\u03B8\u03B5\u03AF." }), jsx(Button, { variant: "destructive", children: "\u0394\u03B9\u03B1\u03B3\u03C1\u03B1\u03C6\u03AE \u039B\u03BF\u03B3\u03B1\u03C1\u03B9\u03B1\u03C3\u03BC\u03BF\u03CD" })] })] })] }) }));
}

export { AccountTabContent };
//# sourceMappingURL=account-tab-content.js.map
