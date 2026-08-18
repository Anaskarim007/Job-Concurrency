import "./globals.css";

export const metadata = {
  title: "Nova — Next.js Workflow Test",
  description: "A simple landing page for testing GitHub Actions.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">            
      <body>{children}</body>
    </html>
  );
}
