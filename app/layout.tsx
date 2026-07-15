import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
   title: "Rahul Chowdary | QA Automation Engineer",

  description:
    "QA Automation Engineer specializing in Playwright, Selenium, API Testing, Security Testing and DevOps.",

  keywords: [
    "Rahul Chowdary",
    "QA Engineer",
    "Automation Engineer",
    "Playwright",
    "SDET",
    "Portfolio",
    "Testing",
    "TypeScript",
  ],

  authors: [
    {
      name: "Rahul Chowdary",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#030712] text-white">
        {children}
      </body>
    </html>
  );
}