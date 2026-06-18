import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FoodTube — Food in a Tube",
  description: "Real food. Blended. In a tube. Why chew when you can tube?",
  openGraph: {
    title: "FoodTube — Food in a Tube",
    description: "Real food. Blended. In a tube.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
