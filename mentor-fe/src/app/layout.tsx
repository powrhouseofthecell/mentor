import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { Dropdown_Menu } from "@/components/menu-dropdown";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mentorship",
  description: "Created for you!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="py-2 absolute right-0">
            <Dropdown_Menu />
          </div>
          {children}
        </ThemeProvider>

        <Toaster richColors position="bottom-center" />
      </body>
    </html>
  );
}
