import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Robotics Khóa 18 · Một hành trình đáng nhớ",
  description:
    "Cùng nhìn lại hành trình 12 tuần học hỏi, chế tạo và trưởng thành của CLB Robotics Khóa 18.",
  themeColor: "#406d50",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="vi">
      <body>{children}</body>
    </html>
  );
}
