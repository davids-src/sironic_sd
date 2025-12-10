declare module 'lucide-react' {
    import { FC, SVGProps } from 'react';
    export interface IconProps extends SVGProps<SVGSVGElement> {
        size?: number | string;
        absoluteStrokeWidth?: boolean;
    }
    export type Icon = FC<IconProps>;
    export type LucideIcon = Icon;

    // Commonly used icons across the codebase
    export const Menu: Icon;
    export const X: Icon;
    export const Loader2: Icon;
    export const CheckCircle: Icon;
    export const CheckCircle2: Icon;
    export const ChevronRight: Icon;
    export const ChevronDown: Icon;
    export const ChevronLeft: Icon;
    export const ChevronUp: Icon;
    export const ArrowRight: Icon;
    export const ArrowLeft: Icon;
    export const MapPin: Icon;
    export const Phone: Icon;
    export const Mail: Icon;
    export const Globe: Icon;
    export const Facebook: Icon;
    export const Linkedin: Icon;
    export const Cookie: Icon;
    export const Check: Icon;
    export const Circle: Icon;
    export const Server: Icon;
    export const Network: Icon;
    export const Shield: Icon;
    export const Code: Icon;
    export const Code2: Icon;
    export const ShoppingCart: Icon;
    export const Cloud: Icon;
    export const Wrench: Icon;
    export const GraduationCap: Icon;
    export const Monitor: Icon;
    export const Wifi: Icon;
    export const Video: Icon;
    export const Headphones: Icon;
    export const Smartphone: Icon;
    export const MonitorSmartphone: Icon;
    export const Zap: Icon;
    export const Users: Icon;
    export const MessageSquare: Icon;
    export const TrendingUp: Icon;
    export const Scale: Icon;
    export const Activity: Icon;
    export const Clock: Icon;
    export const TruckIcon: Icon;
    export const ExternalLink: Icon;
    export const Sparkles: Icon;
    export const Gift: Icon;
    export const Target: Icon;
    export const Lightbulb: Icon;
    export const Briefcase: Icon;
    export const Quote: Icon;
    export const Moon: Icon;
    export const Sun: Icon;
    export const MessageCircle: Icon;
    export const Home: Icon;
    export const Calendar: Icon;
    export const MoreHorizontal: Icon;
    export const Search: Icon;
    export const GripVertical: Icon;
    export const Dot: Icon;
    export const BookOpen: Icon;
    export const Info: Icon;
    export const Wallet: Icon;
    export const CalendarCheck: Icon;
    export const Package: Icon;

    // Or just export everything catch-all style
    const content: { [key: string]: Icon };
    export default content;
}
