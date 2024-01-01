import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './components/Provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'Analyze Comment Youtube',
    description: 'Youtube Video Comment Sentiment Explorer',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
