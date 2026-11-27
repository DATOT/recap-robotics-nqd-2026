import type { Metadata } from "next";
import "./globals.css";
import "reveal.js/reveal.css";
import "reveal.js/theme/white.css";

export const metadata: Metadata = {
  title: "Robotics Khóa 18 · Một hành trình đáng nhớ",
  description: "Cùng nhìn lại hành trình 12 tuần học hỏi, chế tạo và trưởng thành của CLB Robotics Khóa 18.",
  themeColor: "#406d50",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
