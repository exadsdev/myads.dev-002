// app/layout.jsx
import Header from './components/headers';
import Footer from './components/Footer';

import "./style.css"; 
import "./nav.css"; 
import "./form.css";  
import "./globals.css";  

import "bootstrap/dist/css/bootstrap.min.css";
import Script from "next/script";
import { SessionProvider } from "next-auth/react";

const geistSans = { variable: "--font-geist-sans" };
const geistMono = { variable: "--font-geist-mono" };

export const metadata = {
  title: "รับยิงแอดสายเทา รับทำโฆษณาออนไลน์ Google & Facebook Ads",
  description: "รับยิงแอดสายเทา บริการรับทำโฆษณาออนไลน์ Google & Facebook Ads ครบวงจร",
  openGraph: {
    title: "รับยิงแอดสายเทา",
    description: "รับยิงแอดสายเทา บริการรับทำโฆษณาออนไลน์ Google & Facebook Ads ครบวงจร",
    url: "https://www.myads.dev",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <head>
        <meta name="google-site-verification" content="ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM" />
        <link rel="shortcut icon" href="https://www.myads.dev/favicon.ico" type="image/x-icon"/> 
        <link rel="canonical" href="https://www.myads.dev" />
        
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}`}
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER_ID}');
          `}
        </Script>

        {/* JSON-LD */}
        <Script
          id="json-ld-organization"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "myads.dev",
              url: "https://www.myads.dev",
              logo: "https://www.myads.dev/img/logo.png",
              sameAs: [
                "https://www.facebook.com/AdsDev2025",
                "https://www.youtube.com/@myadsdev"
              ]
            })
          }}
        />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <>
          <Header />
          {children}
        </>
        <Footer />

        <Script async src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.min.js" />
      </body>
    </html>
  );
}
