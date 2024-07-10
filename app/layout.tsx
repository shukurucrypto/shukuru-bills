import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import WagmiContextProvider from "@/providers/wagmi-context-provider";
import ReactQueryProvider from "./context/reactquery-provider";
import WalletConnectLayout from "./components/walletconnect-layout";
import { Toaster } from "sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Shukuru | Bills",
  description: "Buy airtime, pay bills, and more with Shukuru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <WagmiContextProvider>
      <ReactQueryProvider>
        <WalletConnectLayout>
          <html lang="en">
            <body
              className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
              )}
            >
              <div className="flex flex-1 flex-grow bg-slate-50 flex-col min-h-screen">
                {children}
              </div>
              <Toaster />
            </body>
          </html>
        </WalletConnectLayout>
      </ReactQueryProvider>
    </WagmiContextProvider>
  );
}
