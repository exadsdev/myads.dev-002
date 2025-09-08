'use client';
import './posts.css';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Head from 'next/head';
import Script from 'next/script';

const PostDetailPage = () => {
  const { title } = useParams(); // รับค่า title จาก URL
  const [post, setPost] = useState(null);
  const urlimg = "https://cart.accfb-ads.com/public/";

  useEffect(() => {
    if (!title) return;

    fetch(`https://cart.accfb-ads.com/get/title/${title}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error('โหลดข้อมูลผิดพลาด:', err));
  }, [title]);

  if (!post) {
    return (
      <div className="container mt-5">
        <p>ไม่พบข้อมูล</p>
      </div>
    );
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://myads.dev/Postpages/${title}`
    },
    "headline": post.title,
    "description": post.content?.slice(0, 150),
    "image": `https://myads.dev/logo.png`,
    "author": {
      "@type": "Organization",
      "name": "myads.dev",
      "url": "https://myads.dev"
    },
    "publisher": {
      "@type": "Organization",
      "name": "myads.dev",
      "logo": {
        "@type": "ImageObject",
        "url": "https://myads.dev/logo.png"
      }
    },
    "datePublished": post.created_at || "2025-01-01"
  };

  return (
    <>
      {/* ✅ SEO & OG Tags */}
      <Head>
        <title>{`${post.title} | รับยิงแอดสายเทา Facebook Google`}</title>
        <meta name="description" content={post.content?.slice(0, 160)} />
  

        {/* OG Tags */}
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.content?.slice(0, 160)} />
        <meta property="og:image" content="https://myads.dev/logo.png" />
        <meta property="og:url" content={`https://myads.dev/Postpages/${title}`} />
        <meta property="og:type" content="article" />
        <meta name="robots" content="index, follow" />
                <meta name="keywords" content="การยิงแอด, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, สอนยิงแอด, สอนยิงแอด Conversion, สอนยิงแอดสายเทา, ยิงแอดสายเทา, ยิงโฆษณาสายเทา, รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, รับยิงแอด, รับทำโฆษณา, รับโฆษณา, Facebook, การตลาด, โฆษณาออนไลน์, เว็บไซต์, ตลาดเป้าหมาย, โฆษณาบนโซเชียลมีเดีย, Google Ads, การโฆษณาบน Facebook, การโฆษณาออนไลน์บนสื่อต่าง ๆ, การตลาดออนไลน์, การโปรโมท, โฆษณา Facebook, การโฆษณา Google, การโฆษณาสินค้า, การโฆษณาโปรโมชั่น, วิธีการโฆษณา, ความสำเร็จในการตลาด, บริการโฆษณา, การตลาดออนไลน์บน Facebook, การโฆษณาบนเว็บ, การวางแผนโฆษณา" />

        <link rel="canonical" href={`https://myads.dev/Postpages/${title}`} />
      </Head>

      {/* ✅ JSON-LD Schema */}
      <Script
        id="post-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ✅ Post Content */}
      <div className="container mx-auto">
        <div className="card mx-auto mt-5" key={post.id}>
          <div className="title h3 text-center">{post.title}</div>

          {post.name ? (
            <div className="mx-auto">
              <iframe
                width="1120"
                height="630"
                className="vdoimg"
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <img
              src={`${urlimg}${post.imgvdo}`}
              className="vdoimg"
              alt={post.title}
            />
          )}

          <div className="card-body">
            <h3>{post.title}</h3>
            <p className="card-text">{post.content}</p>
          </div>
        </div>

        <br />
        <a href="https://myads.dev/Postpages" className="btn btn-info">
          ⬅️ ดูทั้งหมด
        </a>
      </div>
    </>
  );
};

export default PostDetailPage;
