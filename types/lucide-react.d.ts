declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';
    export interface IconProps extends SVGProps<SVGSVGElement> {
        size?: number | string;
        absoluteStrokeWidth?: boolean;
    }
    export type Icon = FC<IconProps>;

    export const Menu: Icon;
    export const X: Icon;
    export const Loader2: Icon;
    export const CheckCircle2: Icon;

    // Add other icons as needed
    export const ChevronRight: Icon;
    export const ChevronDown: Icon;
    export const MapPin: Icon;
    export const Phone: Icon;
    export const Mail: Icon;
    export const Globe: Icon;
    export const Facebook: Icon;
    export const Linkedin: Icon;
    export const Cookie: Icon;
    export const CheckCircle: Icon;
    // ...

    // Or just a general catch-all if we don't want to list them all
    // const content: { [key: string]: Icon };
    // export default content;
    // But named exports are better for tree shaking simulation
}
