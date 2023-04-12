import "./globals.css";

export const metadata = {
  title: "Wedding",
  description: "Testing wedding website using nextjs app directory & drizzle",
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
