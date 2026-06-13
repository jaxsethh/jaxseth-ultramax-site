import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "JaxSeth | Student, Gamer & Content Creator",
  description:
    "Official website of JaxSeth — a student, gamer, and content creator focused on PUBG Mobile, Free Fire, Mobile Legends, Roblox, and social media.",
  keywords: [
    "JaxSeth",
    "gamer",
    "student",
    "PUBG Mobile",
    "Free Fire",
    "Mobile Legends",
    "Roblox",
    "YouTube creator",
    "TikTok creator",
    "gaming website",
    "content creator",
    "Cambodia gamer",
  ],
  authors: [{ name: "JaxSeth" }],
  creator: "JaxSeth",
  openGraph: {
    title: "JaxSeth | Official Creator Website",
    description:
      "Student, gamer, content creator, and social media creator. Follow JaxSeth everywhere.",
    type: "website",
    siteName: "JaxSeth",
  },
};

export const viewport: Viewport = {
  themeColor: "#050510",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
