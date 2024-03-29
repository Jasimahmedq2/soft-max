import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CommonLayout from "@/components/Layout/CommonLayout";
import ReduxProvider from "@/lib/ReduxProvider";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SoftMax",
  description: "Jasim Ahmed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <CommonLayout>
            <div>{children}</div>
            <Toaster />
          </CommonLayout>
        </ReduxProvider>
      </body>
    </html>
  );
}
