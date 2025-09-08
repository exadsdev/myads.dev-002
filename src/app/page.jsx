import React from "react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Secsion from "./components/secsions";

const SITE = "https://myads.dev";

export const metadata = {
  metadataBase: new URL(SITE),
  title: "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา",
  description:
    "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา บริการทำโฆษณาออนไลน์ครบวงจร (Google Ads, Facebook Ads) วางกลยุทธ์ Setup แคมเปญ วัดผล และปรับแต่งเพื่อยอดขาย เริ่มต้นเพียง 9,900 บาท/เดือน",
  keywords: [
  "การยิงแอด, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, สอนยิงแอด, สอนยิงแอด Conversion, สอนยิงแอดสายเทา, ยิงแอดสายเทา, ยิงโฆษณาสายเทา, รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, รับยิงแอด, รับทำโฆษณา, รับโฆษณา, Facebook, การตลาด, โฆษณาออนไลน์, เว็บไซต์, ตลาดเป้าหมาย, โฆษณาบนโซเชียลมีเดีย, Google Ads, การโฆษณาบน Facebook, การโฆษณาออนไลน์บนสื่อต่าง ๆ, การตลาดออนไลน์, การโปรโมท, โฆษณา Facebook, การโฆษณา Google, การโฆษณาสินค้า, การโฆษณาโปรโมชั่น, วิธีการโฆษณา, ความสำเร็จในการตลาด, บริการโฆษณา, การตลาดออนไลน์บน Facebook, การโฆษณาบนเว็บ, การวางแผนโฆษณา",
  ],
  alternates: {
    canonical: SITE,
    languages: { "th-TH": SITE },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา",
    description:
      "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา บริการยิงแอดมืออาชีพ ครบวงจร ตั้งค่า-วัดผล-สเกลยอดขาย มีรายงานโปร่งใส",
    url: SITE,
    siteName: "myads.dev",
    images: [
      {
        url: `${SITE}/images/adsdev.jpg`,
        width: 2000,
        height: 1000,
        alt: "บริการรับยิงแอด Facebook และ Google Ads โดย myads.dev",
      },
    ],
    type: "website",
    locale: "th_TH",
  },
  twitter: {
    card: "summary_large_image",
    title: "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา",
    description: "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา ตั้งค่า-บริหารแคมเปญ อย่างมืออาชีพ พร้อมรายงานผลชัดเจน",
    images: [`${SITE}/images/adsdev.jpg`],
  },
  verification: {
    google: "ryOmDGaWXKrwl4E9xiLHh2maGVlmpjzyFN8m9QfAyyM",
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icons/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png", sizes: "180x180" }],
  },
};

export default function Homepage() {
  // --- JSON-LD for rich results & sitelinks friendliness ---
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "รับจ้างยิงแอด",
    url: SITE,
    logo: {
      "@type": "ImageObject",
      url: `${SITE}/img/logo.png`,
      width: 512,
      height: 512,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
        telephone: "+66832528058",
      },
    ],
    sameAs: [
      "https://lin.ee/vjeDuCZ"
      // เพิ่มโปรไฟล์อื่น ๆ ที่เป็นทางการถ้ามี (Facebook page, YouTube, X)
    ],
  };

  const websiteSitelinksJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    url: SITE,
    name: "รับจ้างยิงแอด",
    potentialAction: {
      "@type": "SearchAction",
      target: `${SITE}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // WebPage + primaryImageOfPage เพื่อช่วยให้แสดงรูปตัวอย่างในผลการค้นหา
  const webPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE}/#webpage`,
    url: SITE,
    name:
      "รับจ้างยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา",
    isPartOf: { "@id": `${SITE}/#website` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE}/images/adsdev.jpg`,
      width: 2000,
      height: 1000,
    },
    breadcrumb: { "@id": `${SITE}/#breadcrumb` },
    about: { "@id": `${SITE}/#organization` },
  };

  // SiteNavigationElement (ช่วยความชัดเจนโครงสร้างลิงก์ เพื่อ sitelinks)
  const navJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "รับยิงแอดสายเทา Google-Adsสายเทา",
      url: `${SITE}/google`,
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "รับยิงแอดสายเทา Facebook-Adsสายเทา",
      url: `${SITE}/facebook`,
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "Postpages",
      url: `${SITE}/Postpages`,
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "คอร์สเรียนยิงแอดสายเทา",
      url: `${SITE}/Course`,
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "เครื่องมือถือยืงแอดฟรี",
      url: `${SITE}/toolfree`,
    },
    {
      "@context": "https://schema.org",
      "@type": "SiteNavigationElement",
      name: "videoสอนการตลาด",
      url: `${SITE}/video`,
    },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "รับยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา",
    provider: { "@id": `${SITE}/#organization` },
    areaServed: "TH",
    description:
      "รับยิงแอดสายเทา ทำโฆษณาออนไลน์สายเทา Google&Facebook-Adsสายเทา วางแผนสื่อ จัดทำแคมเปญโฆษณา ตั้งค่าพิกเซล/คอนเวอร์ชัน และรีพอร์ตผลแบบโปร่งใส",
    offers: {
      "@type": "Offer",
      url: SITE,
      priceCurrency: "THB",
      price: "9900",
      priceValidUntil: "2026-03-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      eligibleRegion: "TH",
    },
  };

  const productJsonLd = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "แพ็กเกจโฆษณารายเดือน",
    image: [`${SITE}/images/adsdev.jpg`, `${SITE}/images/adsdev-alt.jpg`],
    description:
      "รับยิงแอดสายเทา แพ็กเกจบริการทำโฆษณา Google & Facebook ครบวงจร รายเดือน พร้อมรายงานผล",
    brand: { "@type": "Brand", name: "รับยิงแอดสายเทา" },
    offers: {
      "@type": "Offer",
      url: SITE,
      priceCurrency: "THB",
      price: "9900",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": `${SITE}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE}/` },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "ค่าบริการเริ่มต้นเท่าไหร่?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "แพ็กเกจเริ่มต้น 9,900 บาท/เดือน (ไม่รวมงบโฆษณา) ครอบคลุมงานตั้งค่า ติดตามผล และปรับแต่งแคมเปญ",
        },
      },
      {
        "@type": "Question",
        name: "มีรายงานผลและการติดตามคอนเวอร์ชันไหม?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "มีรายงานผลรายสัปดาห์/รายเดือน พร้อมติดตั้ง Pixel/Conversion API และตั้งค่าคอนเวอร์ชันสำคัญให้ครบ",
        },
      },
      {
        "@type": "Question",
        name: "เหมาะกับธุรกิจประเภทใด?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "เหมาะกับธุรกิจที่ต้องการยอดขาย/ลูกค้าใหม่ผ่านช่องทาง Search และ Social",
        },
      },
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <Script id="org-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      <Script id="website-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSitelinksJsonLd) }} />
      <Script id="webpage-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />
      <Script id="nav-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(navJsonLd) }} />
      <Script id="service-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <Script id="product-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <Script id="breadcrumb-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <Script id="faq-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* LINE floating button */}
      <div
        className="line"
        style={{ position: "fixed", right: 16, bottom: 16, zIndex: 50, filter: "drop-shadow(0 6px 16px rgba(0,0,0,.25))" }}
      >
        <a href="https://lin.ee/vjeDuCZ" aria-label="แชท LINE myads.dev" rel="noopener noreferrer" target="_blank">
          <Image src="/img/line.png" alt="LINE" width={56} height={56} priority />
        </a>
      </div>

      <section className="container hero" style={{ paddingTop: 32 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 24, alignItems: "center" }}>
          <div>
            <h1 style={{ margin: "0 0 12px" }}>บริการยิงแอด Google & Facebook Ads โดยทีมมืออาชีพ</h1>
            <p style={{ fontSize: "1.1rem", margin: "0 0 16px" }}>
              วางกลยุทธ์&nbsp;ตั้งค่าแคมเปญ&nbsp;วัดผลด้วยข้อมูลจริง&nbsp;สเกลยอดขายอย่างยั่งยืน
              แพ็กเกจเริ่มต้นเพียง <strong>9,900 บาท/เดือน</strong>
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link className="btn btn-primary" href="/contact">เริ่มคุยกับผู้เชี่ยวชาญ</Link>
              <Link className="btn" href="/portfolio">ดูผลงานที่ผ่านมา</Link>
            </div>
            <ul style={{ marginTop: 16, color: "#444" }}>
              <li>ตั้งค่า Conversion/Pixel + Conversion API ครบ</li>
              <li>โครงสร้างแคมเปญแบบ SKAG/SKC และ Interests Stack</li>
              <li>รีพอร์ตโปร่งใส พร้อมคำแนะนำปรับปรุงทุกสัปดาห์</li>
            </ul>
          </div>

          <div>
            <Image
              src="/images/adsdev.jpg"
              alt="แดชบอร์ดโฆษณาและการวิเคราะห์ผลลัพธ์"
              width={900}
              height={450}
              priority
              style={{ width: "100%", height: "auto", borderRadius: 16 }}
            />
          </div>
        </div>
      </section>

      <nav className="container" aria-label="ลิงก์บริการยอดนิยม" style={{ marginTop: 24 }}>
        <div className="grid" style={{ gridTemplateColumns: "repeat(12, 1fr)", gap: 16 }}>
          {[
            { href: "/google", title: "บริการ Google Ads" },
            { href: "/facebook", title: "บริการ Facebook Ads" },
            { href: "/Postpages", title: "Postpages" },
            { href: "/Course", title: "คอร์สเรียนสายเทา" },
            { href: "/toolfree", title: "บริการฟรี sale Page สายเทา" },
            { href: "/video", title: "video สอนยิงแอดสายเทา" },
          ].map((item) => (
            <Link key={item.href} href={item.href} className="card" style={{ gridColumn: "span 4", display: "block", textDecoration: "none" }}>
              <strong style={{ display: "block", marginBottom: 6 }}>{item.title}</strong>
              <span style={{ color: "#666" }}>คลิกเพื่อดูรายละเอียดบริการ</span>
            </Link>
          ))}
        </div>
      </nav>

      <section className="container" style={{ marginTop: 24 }}>
        <h2>ทำไมธุรกิจถึงเลือก myads.dev</h2>
        <div className="grid" style={{ gridTemplateColumns: "repeat(12, 1fr)" }}>
          <div className="card" style={{ gridColumn: "span 6" }}>
            <h3>กลยุทธ์ที่ขับเคลื่อนด้วยข้อมูล</h3>
            <p>ศึกษาคำค้นและพฤติกรรมเพื่อออกแบบข้อความ/ครีเอทีฟ ลด CPA เพิ่ม AOV</p>
          </div>
          <div className="card" style={{ gridColumn: "span 6" }}>
            <h3>วัดผลแบบ End-to-End</h3>
            <p>ติดตั้ง Conversion API / Enhanced Conversions, UTM และแดชบอร์ดรายงาน</p>
          </div>
          <div className="card" style={{ gridColumn: "span 6" }}>
            <h3>โปร่งใสและขยายได้</h3>
            <p>งบโฆษณาเป็นของลูกค้า 100% ขยายงบได้เมื่อ ROAS ถึงเป้า</p>
          </div>
          <div className="card" style={{ gridColumn: "span 6" }}>
            <h3>คอนเทนต์เป็นมิตรต่อผู้ใช้</h3>
            <p>หน้าเร็ว ชัดเจน โครงสร้างลิงก์ช่วยให้ Search เข้าใจธุรกิจดีขึ้น</p>
          </div>
        </div>
      </section>

      <section className="container" style={{ marginTop: 12 }}>
        <h2>คำถามที่พบบ่อย</h2>
        <details className="card">
          <summary><strong>ค่าบริการเริ่มต้นเท่าไหร่?</strong></summary>
          <p style={{ marginTop: 8 }}>เริ่มต้น 9,900 บาท/เดือน (ไม่รวมงบโฆษณา)</p>
        </details>
        <details className="card">
          <summary><strong>จะทราบผลลัพธ์และคอนเวอร์ชันได้อย่างไร?</strong></summary>
          <p style={{ marginTop: 8 }}>ติดตั้ง Pixel/Conversion API และรายงานผลประจำ</p>
        </details>
        <details className="card">
          <summary><strong>ต้องเตรียมอะไรบ้างก่อนเริ่ม?</strong></summary>
          <p style={{ marginTop: 8 }}>บัญชีโฆษณา เว็บไซต์/เพจสินค้า เป้าหมาย และงบประมาณ</p>
        </details>
      </section>

      <Secsion />
    </>
  );
}
