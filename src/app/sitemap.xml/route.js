// สร้าง Image Sitemap แบบกำหนดเอง (รองรับ App Router)
export const dynamic = "force-static";

function xmlEscape(s) {
  return s.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&apos;");
}

export async function GET() {
  const SITE = "https://www.myads.dev";

  // ระบุเพจสำคัญ + รูปหลักของเพจนั้น ๆ
  const pages = [
    {
      loc: `${SITE}/`,
      images: [
        {
          loc: `${SITE}/images/adsdev.jpg`,
          title: "บริการยิงแอด Google & Facebook Ads โดย myads.dev",
          caption: "ตัวอย่างแดชบอร์ดผลลัพธ์โฆษณา",
        },
      ],
      lastmod: new Date().toISOString(),
    },
    {
      loc: `${SITE}/google`,
      images: [
        { loc: `${SITE}/images/google-ads-hero.jpg`, title: "บริการ Google Ads", caption: "วางกลยุทธ์และปรับแคมเปญ Google Ads" },
      ],
    },
    {
      loc: `${SITE}/facebook`,
      images: [
        { loc: `${SITE}/images/facebook-ads-hero.jpg`, title: "บริการ Facebook Ads", caption: "ทำโฆษณา Facebook/IG แบบ Conversion" },
      ],
    },
    // เพิ่มเพจอื่น ๆ ที่อยากให้ดันรูปขึ้น SERP ตรงนี้ได้
  ];

  const urlset = pages
    .map((p) => {
      const imgs = (p.images || [])
        .map(
          (img) => `
    <image:image>
      <image:loc>${xmlEscape(img.loc)}</image:loc>
      ${img.title ? `<image:title>${xmlEscape(img.title)}</image:title>` : ""}
      ${img.caption ? `<image:caption>${xmlEscape(img.caption)}</image:caption>` : ""}
    </image:image>`
        )
        .join("");

      return `
  <url>
    <loc>${xmlEscape(p.loc)}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}
    ${imgs}
  </url>`;
    })
    .join("");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
          xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
    ${urlset}
  </urlset>`;

  return new Response(xml, {
    status: 200,
    headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=3600" },
  });
}
