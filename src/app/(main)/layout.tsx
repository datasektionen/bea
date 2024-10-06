export default function MainLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="layout-content">{children}</div>;
}
