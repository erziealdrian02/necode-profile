import { ThemeProvider } from '@/components/welcome-components/theme-provider';
import '@fontsource/inter';
import '@fontsource/roboto-mono';
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';

import type React from 'react';
import { Suspense } from 'react';
// import './globals.css';

const GeistSans = 'Inter, sans-serif';
const GeistMono = 'Roboto Mono, monospace';

export const metadata: Metadata = {
    title: 'Necode - Wujudkan Visi Digital Anda',
    description:
        'Grup freelance profesional yang menghadirkan solusi digital terdepan untuk mengembangkan bisnis Anda dengan teknologi modern dan inovatif.',
    keywords: 'freelance, web development, mobile app, digital solution, necode',
    authors: [{ name: 'Necode Team' }],
    creator: 'Necode',
    publisher: 'Necode',
    openGraph: {
        type: 'website',
        locale: 'id_ID',
        url: 'https://necode.dev',
        title: 'Necode - Wujudkan Visi Digital Anda',
        description: 'Grup freelance profesional yang menghadirkan solusi digital terdepan',
        siteName: 'Necode',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Necode - Wujudkan Visi Digital Anda',
        description: 'Grup freelance profesional yang menghadirkan solusi digital terdepan',
        creator: '@necode_dev',
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="id" suppressHydrationWarning>
            <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
                <Suspense fallback={null}>
                    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
                        {children}
                    </ThemeProvider>
                </Suspense>
                <Analytics />
            </body>
        </html>
    );
}
