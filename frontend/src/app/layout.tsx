import type { Metadata } from 'next';
import './globals.css';
import NavBar from '@/components/NavBar';
import Header from '@/components/Header';
import { Lato } from 'next/font/google';

const lato = Lato({
    subsets: ['latin'],
    display: 'swap',
    weight: '400',
});

export const metadata: Metadata = {
    title: 'METAdorerna',
    description: 'Konglig Datasektionen - METAdorerna',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="se"
            className={lato.className}>
            <body>
                <header>
                    <Header />
                    <NavBar />
                </header>
                {children}
            </body>
        </html>
    );
}
