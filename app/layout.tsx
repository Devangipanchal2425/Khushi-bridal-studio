import './globals.css';

<div className="bg-[#f2a8b5] p-4 rounded-lg flex justify-center items-center">
  <img 
    src="/studio-logo.jpeg" 
    alt="Khushi Makeover Logo" 
    className="max-h-24 w-auto object-contain rounded-md" 
  />
</div>
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
