

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/joboycss/bootstrap.min.css" />
        <link rel="stylesheet" href="/joboycss/animate.css" />
        <link rel="stylesheet" href="/joboycss/app.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}
