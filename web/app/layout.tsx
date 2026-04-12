import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { AuthProvider } from "@/store/auth.store";
import Navbar from "@/components/layout/nav-bar";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const manRope = Manrope({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MooMelody",
  description: "milk tracking + calm/soothing vibe",
  manifest: "/manifest.json",
  // themeColor: "#255b7d",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full",
        "antialiased",
        plusJakartaSans.className,
        manRope.className,
        "font-mono",
      )}
    >
      <body className="min-h-full flex flex-col">
        <AuthProvider>
          <Navbar />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
