import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const roboto = Roboto({ subsets: ["greek"], weight: "300" });

export const metadata: Metadata = {
  title: "Anand Sandilya",
  description: "Some random web engineer on the internet",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="snap-y snap-mandatory" suppressHydrationWarning>
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          storageKey="anandks-website-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
