import { ScrollTop } from '@/components/ScrollTop';

export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="layout-content">
            {children}
            <ScrollTop />
        </div>
    );
}
