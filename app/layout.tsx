import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ThemeToggler } from "@/components/ThemeToggler";
import { fira_sans } from "./fonts";
import ToastProvider from "@/lib/providers/ReactToastProvider";
import { Analytics } from "@vercel/analytics/react";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "ChatProfolio",
    template: "Profile | %s",
  },
  description: "Built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fira_sans.className}>
      <head>
        <link rel="icon" href="/favicon.ico?v=1" sizes="any" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="violet"
          enableSystem
          disableTransitionOnChange
          themes={[
            "blue",
            "zinc",
            "rose",
            "green",
            "orange",
            "red",
            "violet",
            "yellow",
          ]}
        >
          <div className="min-h-screen">
            <ToastProvider>{children}</ToastProvider>
          </div>
          <ThemeToggler className="fixed right-6 top-6" />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
