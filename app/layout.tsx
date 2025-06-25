import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {/* Load jQuery + plugins */}
        <Script src="/joboyjs/jquery.min.js" strategy="beforeInteractive" />
        <Script src="/joboyjs/jcarousellite_1.0.1c4.js" strategy="afterInteractive" />
        <Script src="/joboyjs/owl.carousel.min.js" strategy="afterInteractive" />
        {children}
      </body>
    </html>
  );
}
