"use client";

type Theme = 'primary' | 'secondary' | 'cancel' | 'accent' | 'destructive';

const themeClasses: Record<Theme, string> = {
  primary: 'bg-primary',
  secondary: 'bg-secondary',
  cancel: 'bg-background',
  accent: 'bg-accent',
  destructive: 'bg-destructive',
};

const themedText: Record<Theme, string> = {
    primary: 'text-primary-foreground',
    secondary: 'text-secondary-foreground',
    cancel: 'text-foreground',
    accent: 'text-accent-foreground',
    destructive: 'text-destructive-foreground',
};

interface ThemedButtonProps {
  theme: Theme;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function MyButton({ theme, children, onClick, className = '' }: ThemedButtonProps) {
    return (
        <button
            className={`rounded-md ${themeClasses[theme]} ${themedText[theme]} inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium cursor-pointer transition-color focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow hover:bg-${themeClasses[theme]}/90 h-9 px-4 py-2 ${className}`}
            onClick={onClick}
        >{children}</button>
    )
}