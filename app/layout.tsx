import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeProvider";
import { ThemeToggler } from "@/components/ThemeToggler";
import { fira_sans } from "./fonts";

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Portfolio App",
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
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
          <div className="min-h-screen">{children}</div>
          <ThemeToggler className="fixed right-6 top-6" />
        </ThemeProvider>
      </body>
    </html>
  );
}
