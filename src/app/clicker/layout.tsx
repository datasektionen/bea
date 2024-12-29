import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'META clicker',
    description: 'METAdor clicker game',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return children;
}
