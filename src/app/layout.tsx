import type { Metadata } from "next";
import { Bebas_Neue } from "next/font/google";
import "./globals.css";
import Header from "@/components/Common/Header";
import ChatIcon from "@/components/ChatBase/root/chat-icon";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: ["400"],
})

export const metadata: Metadata = {
  title: "Stocks",
  description: "Stocks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${bebasNeue.variable} antialiased`}
      >
        <Header />
        {children}
        <ChatIcon />
      </body>
    </html>
  );
}
