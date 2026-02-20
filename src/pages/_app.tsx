import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <div className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <Head>
          <title>Eric Qiu — Software Engineer</title>
          <meta
            name="description"
            content="Eric Qiu — Computer Engineering student at the University of Waterloo. Passionate about full-stack engineering and mobile development."
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:title" content="Eric Qiu — Software Engineer" />
          <meta
            property="og:description"
            content="Computer Engineering @ UWaterloo | Full-Stack & Mobile Development"
          />
          <meta property="og:type" content="website" />
          <link rel="icon" href="/2232688.ico" />
        </Head>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}
