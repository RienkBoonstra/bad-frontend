import "slick-carousel/slick/slick.css"; // Import slick-carousel core CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import "../styles/globals.css"; // Ensure this points to your TailwindCSS styles or global styles

import type { AppProps } from "next/app";

export default function MyApp({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />;
}