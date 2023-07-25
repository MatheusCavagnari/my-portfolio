import "./globals.css";
import type { Metadata } from "next";
import { Inter, Roboto_Flex as Roboto } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({ subsets: ["latin"], variable: "--font-roboto" });

export const metadata: Metadata = {
  title: "Matheus Cavagnari",
  description: "I´m Software Developer...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${roboto.variable} bg-gray-800 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  );
}
