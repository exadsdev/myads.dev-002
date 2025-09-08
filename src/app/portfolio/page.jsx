import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "ผลงานที่ผ่านมา|รับยิงแอดสายเทา",
  description:
    "รับยิงแอดสายเทา|รวมผลงานการทำโฆษณาออนไลน์ Google Ads และ Facebook Ads ที่ myads.dev ดูแลให้ลูกค้า",
  alternates: { canonical: "https://www.myads.dev/portfolio" },
};

const portfolioItems = [
  {
    title: "โฆษณา Google Ads",
    img: "/images/google.jpg",
    desc: "รับยิงแอดสายเทา Google รับทำโฆษณา Google Ads สายเทา",
  },
  {
    title: "โฆษณา Facebook Ads",
    img: "/images/facebook.jpg",
    desc: "บริการรับยิงแอด Facebook สายเทา ฆษณา Facebook Ads สายเทา",
  },
  {
    title: "Postpages",
    img: "/images/Postpages.jpg",
    desc: "Post Page Update ข้อมูลต่างๆของเว็บไซต์ รับยิงแอดสายเทา",
  },
  {
    title: "คอร์สเรียนสายเทา",
    img: "/images/Course.jpg",
    desc: "บริการคอร์สเรียนทำการตลาดออนไลน์",
  },
  {
    title: "ฟรีเครื่องมือยิงแอดสายเทา",
    img: "/images/toolfree.jpg",
    desc: "ดาวน์โหลดฟรี Landing Page Facebook,Google",
  },
  {
    title: "video-สอนทำโฆษณาสายเทา",
    img: "/images/video.jpg",
    desc: "สอนทำโฆษณา Google, Facebook สายเทาแบบเจาะลึก สำหรับมือใหม่ ปี 2025",
  },
];

export default function PortfolioPage() {
  return (
    <main className="container py-5">
      <section className="text-center mb-5">
        <h1 className="h2 fw-bold">ผลงานที่ผ่านมา</h1>
        <p className="text-secondary">
          ตัวอย่างบางส่วนของการทำโฆษณาออนไลน์กับ myads.dev
        </p>
      </section>

      <section className="row g-4">
        {portfolioItems.map((item) => (
          <div className="col-12 col-md-6 col-lg-4" key={item.title}>
            <div className="card h-100 shadow-sm border-0 rounded-4 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                width={600}
                height={400}
                className="card-img-top"
                style={{ objectFit: "cover", height: 200 }}
              />
              <div className="card-body d-flex flex-column">
                <h2 className="h5">{item.title}</h2>
                <p className="text-muted">{item.desc}</p>
                <Link
                  href="https://lin.ee/PCVkLpa"
                  className="btn btn-outline-primary mt-auto rounded-pill"
                >
                  ติดต่อเพื่อเริ่มต้น
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
}
