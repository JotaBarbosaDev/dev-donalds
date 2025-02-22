import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Donalds",
  description: "O melhor que uma hamburgaria pode dar!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <body
      
        className={`${poppins.className} antialiased`}
      >
        <h1>hello world!</h1>
        {children}
      </body>
    </html>
  );
}
