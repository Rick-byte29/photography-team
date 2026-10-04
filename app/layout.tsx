import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Studios — Photography & Film Collective",
  description: "Honest wedding stories, considered portraits and compelling brand photography. Discover Aura Studios and begin your story.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
