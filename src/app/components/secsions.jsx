import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Secsions() {
  return (
    <>
      {/* SECTION: Services/Packages */}
      <section className="container mt-4" aria-labelledby="services-title">
        <div className="text-center mt-3">
          <h2 id="services-title" className="h3">
            บริการรับจ้างทำการตลาดออนไลน์
          </h2>
        </div>

        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center mt-4">
          <div className="col">
            <article className="card mb-4 rounded-3 shadow-sm border-success h-100">
              <div className="card-header py-3 text-bg-success border-success">
                <h3 className="my-0 fw-normal h5">โปรโมชั่นทดลองยิง 7 วัน</h3>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="card-title pricing-card-title display-6 mb-3">
                  3,500฿
                </p>
                <ul className="list-unstyled mt-2 mb-4 text-start mx-auto" style={{ maxWidth: 320 }}>
                  <li>ผลลัพธ์ชัดเจน</li>
                  <li>รับรองการันตี 100%</li>
                  <li>ชำระเงินด้วยบัตรเครดิตได้</li>
                  <li>รายงานผลทุกวัน เวลา 10.00 น.</li>
                </ul>
                <Link
                  href="https://line.myads.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 btn btn-lg btn-success mt-auto"
                  aria-label="เริ่มต้นแพ็กเกจทดลองยิง 7 วัน ผ่าน LINE"
                >
                  Get started
                </Link>
              </div>
            </article>
          </div>

          <div className="col">
            <article className="card mb-4 rounded-3 shadow-sm border-info h-100">
              <div className="card-header py-3 text-bg-info border-info">
                <h3 className="my-0 fw-normal h5">สัมผัสประสบการณ์ยิงใหม่ 15 วัน</h3>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="card-title pricing-card-title display-6 mb-3">
                  6,000฿
                </p>
                <ul className="list-unstyled mt-2 mb-4 text-start mx-auto" style={{ maxWidth: 320 }}>
                  <li>ผลลัพธ์ชัดเจน</li>
                  <li>รับรองการันตี 100%</li>
                  <li>ชำระเงินด้วยบัตรเครดิตได้</li>
                  <li>รายงานผลทุกวัน เวลา 10.00 น.</li>
                </ul>
                <Link
                  href="https://line.myads.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 btn btn-lg btn-info mt-auto"
                  aria-label="เริ่มต้นแพ็กเกจ 15 วัน ผ่าน LINE"
                >
                  Get started
                </Link>
              </div>
            </article>
          </div>

          <div className="col">
            <article className="card mb-4 rounded-3 shadow-sm border-primary h-100">
              <div className="card-header py-3 text-bg-primary border-primary">
                <h3 className="my-0 fw-normal h5">บริการรับทำโฆษณา 1 เดือน</h3>
              </div>
              <div className="card-body d-flex flex-column">
                <p className="card-title pricing-card-title display-6 mb-3">
                  9,900฿
                </p>
                <ul className="list-unstyled mt-2 mb-4 text-start mx-auto" style={{ maxWidth: 320 }}>
                  <li>เราดูแลทั้งหมดตลอด 30 วัน</li>
                  <li>รับรองการันตี 100%</li>
                  <li>รายงานผลทุกวัน เวลา 10.00 น.</li>
                  <li>ใช้บัตรของลูกค้าเองได้</li>
                </ul>
                <Link
                  href="https://line.myads.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-100 btn btn-lg btn-primary mt-auto"
                  aria-label="เริ่มต้นแพ็กเกจรายเดือน ผ่าน LINE"
                >
                  Get started
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* SECTION: Facebook & Google Ads intro */}
      <section className="container" id="facebook" aria-labelledby="ads-intro-title">
        <div className="text-center">
          <h2 id="ads-intro-title" className="h3">
            บริการรับทำโฆษณาออนไลน์ — Facebook &amp; Google Ads
          </h2>

          <div className="ads-dark mt-3">
            <figure>
              <Image
                src="/ads.jpg"
                alt="ตัวอย่างงานโฆษณาออนไลน์ของทีม myads.dev"
                width={1200}
                height={675}
                sizes="(max-width: 768px) 100vw, 1200px"
                style={{ width: "100%", height: "auto" }}
                priority={false}
              />
              <figcaption className="text-muted small mt-1">
                ตัวอย่างแดชบอร์ดและผลลัพธ์จากการรันโฆษณา
              </figcaption>
            </figure>
          </div>
        </div>

        <article className="mt-4">
          <h3 className="h4">บริการรับทำโฆษณา Facebook Ads</h3>
          <p>
            ทำโฆษณาโดยทีมงานมืออาชีพ คิดกลยุทธ์ สร้างแคมเปญ และวัดผลละเอียด
            แพ็กเกจเพียงเดือนละ <strong>9,900 บาท</strong> ไม่มีค่าใช้จ่ายแอบแฝง มีรีวิวลูกค้าจริง
          </p>
          <p>
            Facebook ปรับอัลกอริทึมอย่างสม่ำเสมอ ส่งผลต่อการมองเห็นและประสิทธิภาพ
            เราจึงใช้โครงสร้างแคมเปญที่ยืดหยุ่น พร้อมทดสอบครีเอทีฟ/ออดิเอนซ์ต่อเนื่อง
          </p>
          <p>
            ปฏิบัติตามนโยบายความเป็นส่วนตัว (เช่น GDPR/CCPA) และใช้การติดตามผลแบบ
            Conversion API/Enhanced Conversions เพื่อวัดผลอย่างแม่นยำ
          </p>

          <div className="imge mt-3">
            <Image
              src="/img/facebook_ads.webp"
              width={1200}
              height={675}
              alt="ตัวอย่างครีเอทีฟ Facebook Ads"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          <div className="text-center my-3">
            <h4 className="h6">ตัวอย่างที่แสดงเป็นเพียงบางส่วน</h4>
            <div className="imge mt-2 d-flex justify-content-center">
              <Image
                src="/imgfb/h01show.webp"
                width={800}
                height={800}
                alt="รวมตัวอย่างผลลัพธ์โฆษณา Facebook"
                sizes="(max-width: 768px) 90vw, 800px"
                style={{ width: "50%", height: "auto", maxWidth: "800px" }}
              />
            </div>
          </div>

          <h4 className="h5">ผลงาน Facebook (บางส่วน)</h4>
          <div className="box" role="list" aria-label="แกลเลอรีผลงาน Facebook">
            {[
              "h0102.webp","h0103.webp","h0104.webp","h0105.webp","h0106.webp","h0107.webp",
              "h0108.webp","h0109.webp","h0110.webp","h0111.webp","h0112.webp","h0113.webp",
            ].map((file) => (
              <figure className="item" role="listitem" key={file}>
                <Image
                  src={`/imgfb/${file}`}
                  alt={`ผลงาน Facebook Ads: ${file.replace(".webp","")}`}
                  width={900}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </article>

        <hr className="my-4" />

        <article className="google" id="Google" aria-labelledby="google-title">
          <h3 id="google-title" className="h4">บริการทำโฆษณา Google และ SEO</h3>
          <p>
            เพิ่มการมองเห็นผ่าน Search/Display/Video ด้วยโครงสร้างคำค้นที่ตอบโจทย์
            เจตนาค้นหา (Search Intent) และหน้าลงแลนดิงที่โหลดไวและสื่อสารชัดเจน
          </p>
          <p>
            เราจัดทำ Conversion Tracking, UTM, และแดชบอร์ดสรุป เพื่อให้คุณเห็นแหล่งที่มาและ
            ROAS ชัดเจน พร้อมแผนปรับปรุงแคมเปญตามข้อมูลจริง
          </p>

          <figure className="mt-3">
            <Image
              src="/top.webp"
              width={1200}
              height={675}
              alt="ตัวอย่างผลลัพธ์จาก Google Ads/SEO"
              sizes="(max-width: 768px) 100vw, 1200px"
              style={{ width: "100%", height: "auto" }}
            />
          </figure>

          <div className="box mt-3" role="list" aria-label="แกลเลอรีผลงาน Google">
            {Array.from({ length: 18 }, (_, i) => i + 2).map((n) => (
              <figure className="item" role="listitem" key={n}>
                <Image
                  src={`/imggg/${n}.webp`}
                  alt={`ผลงาน Google Ads: ${n}`}
                  width={900}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 900px"
                  style={{ width: "100%", height: "auto" }}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </article>
      </section>

      <hr className="my-4" />

      {/* SECTION: Reviews */}
      <section className="container" id="reviwe" aria-labelledby="reviews-title">
        <h2 id="reviews-title" className="h4">รีวิวลูกค้าจริง</h2>
        <div className="box" role="list" aria-label="แกลเลอรีรีวิวลูกค้า">
          {["1.webp","2.webp","3.webp","01.webp","02.webp","03.webp"].map((r) => (
            <figure className="item" role="listitem" key={r}>
              <Image
                src={`/review/${r}`}
                width={900}
                height={900}
                alt={`รีวิวลูกค้า ${r.replace(".webp","")}`}
                sizes="(max-width: 768px) 100vw, 900px"
                style={{ width: "100%", height: "auto" }}
                loading="lazy"
              />
            </figure>
          ))}
        </div>
      </section>

      <hr className="my-4" />

      {/* SECTION: Contact */}
      <section className="container mt-4" id="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="visually-hidden">ติดต่อทีมงาน</h2>
        <figure className="contact mt-3">
          <Image
            src="/img/contact.webp"
            width={1200}
            height={675}
            alt="ติดต่อเรา myads.dev"
            sizes="(max-width: 768px) 100vw, 1200px"
            style={{ width: "100%", height: "auto" }}
            priority={false}
          />
        </figure>

        <div className="text-center mt-2">
          <Link
            href="https://lin.ee/RAtXbEtM"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="เพิ่มเพื่อน LINE เพื่อคุยกับทีมงาน"
          >
            <img
              src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png"
              alt="เพิ่มเพื่อน LINE"
              height="36"
              loading="lazy"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
