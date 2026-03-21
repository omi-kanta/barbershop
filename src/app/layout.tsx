import type { Metadata } from 'next';
import { Header } from '@/components/layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'YUKI Barber',
  description: '一人ひとりのライフスタイルに寄り添う、パーソナルなバーバーエクスペリエンス',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}