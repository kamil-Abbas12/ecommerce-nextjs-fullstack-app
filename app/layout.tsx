import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "My Ecommerce App",
  description: "Get access to products easily ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className= "bg-white flex min-h-full flex-col">
        <Navbar/>
  <main className="flex-grow container mx-auto py-8 px-4">{children}</main> 
      </body>
    </html>
  );
}
