import { jsx, jsxs } from 'react/jsx-runtime';
import { Avatar, AvatarImage, AvatarFallback } from '../../../components/ui/avatar.js';
import '../../../components/ui/badge.js';
import '../../../node_modules/tslib/tslib.es6.js';
import '@radix-ui/react-slot';
import 'lucide-react';
import 'clsx';
import 'tailwind-merge';
import { Button } from '../../../components/ui/button.js';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../../../components/ui/card.js';
import { Input } from '../../../components/ui/input.js';
import { Label } from '../../../components/ui/label.js';
import '@radix-ui/react-select';
import { Separator } from '../../../components/ui/separator.js';
import '../../../components/ui/sidebar.js';
import '@radix-ui/react-dialog';
import { TabsContent } from '../../../components/ui/tabs.js';
import { Textarea } from '../../../components/ui/textarea.js';
import 'react';
import 'next/navigation';
import '../../../lib/constants.js';

function ProfileTabContent() {
    return (jsx(TabsContent, { value: "profile", className: "mt-0 space-y-6", children: jsxs(Card, { children: [jsxs(CardHeader, { children: [jsx(CardTitle, { children: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB" }), jsx(CardDescription, { children: "\u0394\u03B9\u03B1\u03C7\u03B5\u03AF\u03C1\u03B9\u03C3\u03B7 \u03C4\u03C9\u03BD \u03B4\u03B7\u03BC\u03CC\u03C3\u03B9\u03C9\u03BD \u03C0\u03BB\u03B7\u03C1\u03BF\u03C6\u03BF\u03C1\u03B9\u03CE\u03BD \u03C4\u03BF\u03C5 \u03C0\u03C1\u03BF\u03C6\u03AF\u03BB \u03C3\u03B1\u03C2" })] }), jsxs(CardContent, { className: "space-y-6", children: [jsxs("div", { className: "flex flex-col sm:flex-row gap-4 items-start sm:items-center", children: [jsxs(Avatar, { className: "w-20 h-20", children: [jsx(AvatarImage, { alt: "\u03A0\u03C1\u03BF\u03C6\u03AF\u03BB" }), jsx(AvatarFallback, { children: "\u0393\u03A0" })] }), jsxs("div", { className: "space-y-2", children: [jsx(Button, { size: "sm", variant: "outline", children: "\u0391\u03BB\u03BB\u03B1\u03B3\u03AE \u0395\u03B9\u03BA\u03CC\u03BD\u03B1\u03C2" }), jsx("p", { className: "text-sm text-gray-500", children: "JPG, GIF \u03AE PNG. \u039C\u03AD\u03B3\u03B9\u03C3\u03C4\u03BF \u03BC\u03AD\u03B3\u03B5\u03B8\u03BF\u03C2 2MB." })] })] }), jsx(Separator, {}), jsxs("div", { className: "grid gap-4 md:grid-cols-2", children: [jsxs("div", { className: "space-y-2", children: [jsx(Label, { htmlFor: "firstName", children: "\u038C\u03BD\u03BF\u03BC\u03B1" }), jsx(Input, { id: "firstName", placeholder: "\u0393\u03B9\u03AC\u03BD\u03BD\u03B7\u03C2", defaultValue: "\u0393\u03B9\u03AC\u03BD\u03BD\u03B7\u03C2" })] }), jsxs("div", { className: "space-y-2", children: [jsx(Label, { htmlFor: "lastName", children: "\u0395\u03C0\u03CE\u03BD\u03C5\u03BC\u03BF" }), jsx(Input, { id: "lastName", placeholder: "\u03A0\u03B1\u03C0\u03B1\u03B4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF\u03C2", defaultValue: "\u03A0\u03B1\u03C0\u03B1\u03B4\u03CC\u03C0\u03BF\u03C5\u03BB\u03BF\u03C2" })] })] }), jsxs("div", { className: "space-y-2", children: [jsx(Label, { htmlFor: "email", children: "Email" }), jsx(Input, { id: "email", type: "email", placeholder: "giannis.papadopoulos@example.com", defaultValue: "giannis.papadopoulos@example.com" })] }), jsxs("div", { className: "space-y-2", children: [jsx(Label, { htmlFor: "bio", children: "\u0392\u03B9\u03BF\u03B3\u03C1\u03B1\u03C6\u03B9\u03BA\u03CC" }), jsx(Textarea, { id: "bio", placeholder: "\u03A0\u03B5\u03AF\u03C4\u03B5 \u03BC\u03B1\u03C2 \u03B3\u03B9\u03B1 \u03C4\u03BF\u03BD \u03B5\u03B1\u03C5\u03C4\u03CC \u03C3\u03B1\u03C2", className: "min-h-32" })] })] }), jsxs(CardFooter, { className: "flex justify-end gap-2", children: [jsx(Button, { variant: "outline", children: "\u0391\u03BA\u03CD\u03C1\u03C9\u03C3\u03B7" }), jsx(Button, { children: "\u0391\u03C0\u03BF\u03B8\u03AE\u03BA\u03B5\u03C5\u03C3\u03B7 \u0391\u03BB\u03BB\u03B1\u03B3\u03CE\u03BD" })] })] }) }));
}

export { ProfileTabContent };
//# sourceMappingURL=profile-tab-content.js.map
