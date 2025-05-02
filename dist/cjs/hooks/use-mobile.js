"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIsMobile = void 0;
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const MOBILE_BREAKPOINT = 768;
const useIsMobile = () => {
    const [isMobile, setIsMobile] = React.useState(undefined);
    React.useEffect(() => {
        if (typeof window === 'undefined')
            return;
        const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`);
        const onChange = () => {
            setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        };
        mql.addEventListener("change", onChange);
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
        return () => mql.removeEventListener("change", onChange);
    }, []);
    return isMobile !== null && isMobile !== void 0 ? isMobile : false;
};
exports.useIsMobile = useIsMobile;
//# sourceMappingURL=use-mobile.js.map