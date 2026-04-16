import type { Metadata } from "next";
import "./globals.css";
import { Manrope, Public_Sans } from "next/font/google";

import { NavbarGlass } from "@/components/blocks/NavbarGlass";
import { FooterMultiColumn } from "@/components/blocks/FooterMultiColumn";

const heading = Manrope({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap"
});

const body = Public_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Delhi Public School, Moradabad",
  description:
    "Delhi Public School, Moradabad — empowering minds, shaping futures. Explore academics, admissions, and campus life."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <div className="min-h-dvh bg-background text-foreground">
          <div className="fixed top-0 left-0 right-0 w-full z-50">
            <NavbarGlass
              logo="DPS Moradabad"
              navItems={[
                { label: "About", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Contact", href: "/contact" },
                { label: "Portfolio", href: "/portfolio" }
              ]}
              ctaLabel="Admissions"
              ctaHref="/services"
            />
          </div>

          {/* Offset for fixed navbar */}
          <main className="pt-20">{children}</main>

          <FooterMultiColumn
            brand="Delhi Public School, Moradabad"
            description="A modern learning community focused on academic excellence, character, and holistic development."
            columns={[
              {
                title: "School",
                links: [
                  { label: "About Us", href: "/about" },
                  { label: "Campus Portfolio", href: "/portfolio" },
                  { label: "Contact", href: "/contact" }
                ]
              },
              {
                title: "Admissions",
                links: [
                  { label: "Admissions (Services)", href: "/services" },
                  { label: "Fee Plans (Pricing)", href: "/pricing" },
                  { label: "FAQs", href: "/services#faqs" }
                ]
              },
              {
                title: "Quick Links",
                links: [
                  { label: "Home", href: "/" },
                  { label: "Privacy", href: "/contact" },
                  { label: "Support", href: "/contact" }
                ]
              }
            ]}
            copyright="© 2026 Delhi Public School, Moradabad. All rights reserved."
            logoUrl="/images/product-1.png"
          />
        </div>
      </body>
    </html>
  );
}
