// app/google/page.jsx
import React from "react";
import Image from "next/image";
import Script from "next/script";

export const metadata = {
  title: "รับยิงแอดสายเทา|รับทำโฆษณา Google Ads สายเทา",
  description:
    "รับยิงแอดสายเทา|เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ",
  keywords: [
    "Google Ads",
    "รับทำโฆษณาสายเทา",
    "Facebook Ads",
    "Google Ads สายเทา",
    "myads.dev",
  ],
  alternates: {
    canonical: "https://www.myads.dev/google",
  },
  openGraph: {
    title: "รับยิงแอดสายเทา|รับทำโฆษณา Google Ads สายเทา",
    description:
      "รับยิงแอดสายเทา|เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ",
    url: "https://www.myads.dev/google",
    siteName: "myads.dev",
    images: [
      "https://www.myads.dev/img/hero.webp",
      "https://www.myads.dev/img/about.webp",
    ],
    type: "website",
  },
};

export default function GooglePage() {
  const schemaData = {
    "@context": "https://schema.org/",
    "@type": "Product",
    name: "รับยิงแอดสายเทา|รับทำโฆษณา Google Ads สายเทา",
    image: [
      "https://www.myads.dev/img/รับทำโฆษณาสายเทา.webp",
      "https://www.myads.dev/img/about.webp",
    ],
    description:
      "รับยิงแอดสายเทา|เนื้อหาความรู้ดีๆที่ทุกคนเข้าถึงได้ รับจ้างยิงแอดทำโฆษณาออนไลน์ รับทำโฆษณา Facebook Ads รับทำโฆษณา Google ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ",
    brand: {
      "@type": "Brand",
      name: "www.myads.dev:Google-Ads",
    },
    offers: {
      "@type": "Offer",
      url: "https://www.myads.dev/google",
      priceCurrency: "THB",
      price: "9900",
      priceValidUntil: "2025-02-18",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "myad-dev",
        url: "https://www.myads.dev",
        logo: "https://www.myads.dev/img/logo.png",
      },
    },
  };

  return (
    <>
      {/* JSON-LD Structured Data */}
   <Script
        id="google-schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="container my-5">
        <div className="text-center mb-4">
          <h1>รับทำโฆษณา Google Ads สายเทา</h1>
        </div>

        <div className="text-center mb-4">
          <Image
            src="/img/ggads.jpg"
            alt="รับยิงแอดสายเทา|รับทำโฆษณา Google Ads สายเทา"
            width={1200}
            height={675}
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ width: "100%", height: "auto" }}
            priority={true}
          />
        </div>

        <h3>โฆษณา Google Ads สายเทา</h3>
        <p>
          Google Ads (เดิมชื่อ Google AdWords) เป็นแพลตฟอร์มการโฆษณาออนไลน์ที่ช่วยให้ธุรกิจสามารถโฆษณาสินค้าหรือบริการของตนผ่านการค้นหาของ Google
          และเครือข่ายโฆษณาของ Google. โฆษณาจะแสดงผลในรูปแบบข้อความ, รูปภาพ, หรือวิดีโอ โดยสามารถเลือกกลุ่มเป้าหมาย, งบประมาณ, และสถานที่ที่ต้องการโฆษณาได้
        </p>

        <hr />
        <h3>ปัญหาที่พบบ่อยในการทำโฆษณาบน Google และวิธีการแก้ไข</h3>
        <p>
          <strong>งบประมาณไม่พอ</strong> <br />
          ปัญหา: งบประมาณที่ตั้งไว้ไม่เพียงพอในการแข่งขันกับคู่แข่งในตลาดเดียวกัน
        </p>
        <ul>
          <li>
            <strong>ปรับปรุงการตั้งค่า CPC:</strong> ลองลดราคาต่อคลิก (CPC) หรือลองใช้รูปแบบการชำระเงินที่เหมาะสมกับงบประมาณ
          </li>
          <li>
            <strong>การเลือกคำค้นหาที่เหมาะสม:</strong> ใช้คำค้นหาที่มีการแข่งขันต่ำลง แต่ยังคงตรงกับกลุ่มเป้าหมาย
          </li>
          <li>
            <strong>การสร้างโฆษณาที่มีคุณภาพ:</strong> พัฒนาโฆษณาที่มีความน่าสนใจและเกี่ยวข้องกับคำค้นหาของผู้ใช้
          </li>
        </ul>

        <hr />
        <h3>การคลิกที่ไม่เกี่ยวข้อง</h3>
        <p>
          ผู้ใช้คลิกที่โฆษณาแต่ไม่ทำการซื้อหรือไม่ดำเนินการตามที่คาดหวัง
        </p>
        <ul>
          <li>
            <strong>การปรับปรุงหน้าเว็บปลายทาง:</strong> ทำให้หน้าเว็บของคุณตอบสนองได้ดีและมีข้อมูลที่ครบถ้วนเพื่อให้ลูกค้าสามารถทำการตัดสินใจได้ง่าย
          </li>
          <li>
            <strong>การใช้กลุ่มเป้าหมายที่เจาะจง:</strong> ใช้การตั้งค่ากลุ่มเป้าหมายที่เจาะจงมากขึ้นเพื่อให้โฆษณาของคุณแสดงต่อผู้ใช้ที่มีความสนใจจริง
          </li>
        </ul>

        <hr />
        <h3>การวิเคราะห์และการติดตามผล</h3>
        <p>
          ปัญหา: ขาดข้อมูลที่เพียงพอในการวิเคราะห์ผลลัพธ์ของการโฆษณา
        </p>
        <ul>
          <li>
            ใช้ <a href="https://analytics.google.com/">Google Analytics</a> เพื่อติดตามการทำงานของโฆษณาและการเข้าชมเว็บไซต์
          </li>
          <li>
            ตรวจสอบรายงานจาก Google Ads อย่างสม่ำเสมอเพื่อปรับปรุงกลยุทธ์และประสิทธิภาพของโฆษณา
          </li>
        </ul>
      </div>
    </>
  );
}
