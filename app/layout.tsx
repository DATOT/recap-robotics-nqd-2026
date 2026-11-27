import type { Metadata } from "next";
import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robotics Club · Khóa 18 Recap",
  description: "A season of building, learning, and creating together. Robotics Club Khóa 18 recap presentation.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
