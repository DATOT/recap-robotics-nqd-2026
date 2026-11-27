import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robotics Club · Khóa 18 Recap",
  description: "Twelve weeks, one curious crew, and a whole bunch of memories worth keeping. Robotics Club Khóa 18 recap.",
  themeColor: "#406d50",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
