import './globals.css';

export const metadata = {
  title: 'Khushi Patel - Makeup Artist',
  description: 'Bridal Studio & Makeup Artist Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
