export const metadata = { title: "nextjs-app" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ fontFamily: "monospace", padding: 24 }}>{children}</body>
    </html>
  );
}
