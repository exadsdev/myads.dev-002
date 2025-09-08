import Link from "next/link";

export const metadata = {
  title: "ติดต่อเรา | myads.dev",
  description: "คุยกับทีมงาน myads.dev เพื่อเริ่มโฆษณาออนไลน์ Google/Facebook Ads",
  alternates: { canonical: "https://www.myads.dev/contact" },
};

export default function ContactPage() {
  return (
    <main className="container py-5">
      <section className="row justify-content-center"> 
        <a href="/">HomePage</a>
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4 overflow-hidden">
            <div
              className="p-4 p-md-5"
              style={{
                background:
                  "radial-gradient(1200px 500px at 0% 0%, rgba(13,110,253,.12), transparent), linear-gradient(180deg, rgba(13,110,253,.06), transparent)",
              }}
            >
              <h1 className="h3 mb-2">ติดต่อเรา</h1>
              <p className="text-secondary mb-0">
                เริ่มต้นคุยรายละเอียดแคมเปญกับผู้เชี่ยวชาญของเราได้เลย
              </p>
            </div>

            <div className="card-body p-4 p-md-5">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="name" className="form-label">
                    ชื่อของคุณ
                  </label>
                  <input type="text" className="form-control" id="name" placeholder="ชื่อ-นามสกุล" />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email" className="form-label">
                    อีเมล
                  </label>
                  <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                </div>
                <div className="col-12">
                  <label htmlFor="message" className="form-label">
                    ข้อความ
                  </label>
                  <textarea className="form-control" id="message" rows="4" placeholder="เล่าเป้าหมาย/งบประมาณโดยประมาณ"></textarea>
                </div>

                <div className="col-12 d-flex flex-wrap gap-2 mt-2">
                  <button type="submit" className="btn btn-primary px-4 rounded-pill">
                    ส่งข้อความ
                  </button>
                  <Link
                    href="https://lin.ee/vjeDuCZ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success rounded-pill"
                  >
                    แชท LINE ทันที
                  </Link>
                  <Link href="mailto:hello@myadsdev.shop" className="btn btn-outline-secondary rounded-pill">
                    อีเมลหาเรา
                  </Link>
                  <Link href="tel:0832528058" className="btn btn-outline-dark rounded-pill">
                    โทร 083-252-8058
                  </Link>
                </div>
              </form>

              <hr className="my-4" />

              <div className="row g-3">
                <div className="col-md-6">
                  <div className="p-3 rounded-3 border bg-light">
                    <div className="small text-uppercase text-secondary mb-1">เวลาทำการ</div>
                    <div>24ชม.</div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="p-3 rounded-3 border">
                    <div className="small text-uppercase text-secondary mb-1">ที่ตั้ง</div>
                    <div>Thailand (ให้บริการออนไลน์ทั่วประเทศ)</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="ratio ratio-21x9 bg-light">
              <iframe
                title="Google Map"
                src="https://maps.google.com/maps?q=Thailand&t=&z=5&ie=UTF8&iwloc=&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
