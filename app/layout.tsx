import "@/styles/global.css";

export const metadata = {
  title: "Play Astro",
  description: "Play Astro Template",
  generator: "Next.js",
  icons: {
    icon: [{ url: "/favicon-32x32.png" }, { url: "/favicon-16x16.png" }],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en">{children}</html>;
}
