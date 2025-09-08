"use client";

import "./post.css";
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";

export default function Page() {
  const [posts, setPosts] = useState([]);
  const urlimg = "https://cart.accfb-ads.com/public";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://cart.accfb-ads.com/get");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "รับยิงแอดสายเทา รับจ้างยิงแอดทำโฆษณาออนไลน์",
    image: [
      "https://myads.dev/img/รับทำโฆษณาสายเทา.webp",
      "https://myads.dev/img/about.webp"
    ],
    description:
      "Postpages|รับยิงแอดสายเทา รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads",
    brand: {
      "@type": "Brand",
      name: "www.myads.dev:PostPage"
    },
    offers: {
      "@type": "Offer",
      url: "https://myads.dev/Postpages",
      priceCurrency: "THB",
      price: "9900",
      priceValidUntil: "2025-02-18",
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "myads.dev:PostPage",
        url: "https://myads.dev",
        logo: "https://myads.dev/img/logo.png"
      }
    }
  };

  return (
    <>
      {/* ✅ Head for SEO */}
      <Head>
        <title>Postpages | รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads สายเทา</title>
        <meta name="description" content="รับยิงแอดสายเทา รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads ทีมงานมืออาชีพเริ่มต้น 9,900 บาท/เดือน" />
        <meta property="og:title" content="Postpages | รับจ้างยิงแอดทำโฆษณาออนไลน์ Google, Facebook Ads" />
        <meta property="og:description" content="บริการรับจ้างยิงแอดสายเทา Facebook และ Google ครบวงจรโดย myads.dev ทีมงานมืออาชีพ" />
        <meta property="og:image" content="https://myads.dev/img/ads.jpg" />
        <meta property="og:url" content="https://myads.dev/Postpages" />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://myads.dev/Postpages" />
        <meta name="keywords" content="การยิงแอด, Google, สายเทา, คอร์สเรียนGoogleAdsสายเทา, GoogleAdsสายเทา, สายเทา, บริการคอร์สเรียน, ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, สอนยิงแอด, สอนยิงแอด Conversion, สอนยิงแอดสายเทา, ยิงแอดสายเทา, ยิงโฆษณาสายเทา, รับทำ seo สายเทา, รับทำ seo สายดำ, แอดสายเทา, รับยิงแอดสายเทา, กูเกิ้ลแอดสายเทา, รับทํา google ads, สายเทา seo สายเทา, ตลาดสีเทา, แอดสีเทา, adsสีเทา, กราฟฟิกสายเทา, ยิงแอดเทา, รับยิงแอดfacebookสายเทา, รูปยิงแอดสายเทา, รับจ้างสายเทา, รับโฆษณาสายเทา ยิงads, facebook, สายเทา, โฆษณา, ยิงads facebook สายเทา, รับยิงads, รับยิงแอด สายเทา, facebook ads, google ads, google, ads, รับยิงแอด, รับทำโฆษณา, รับโฆษณา, Facebook, การตลาด, โฆษณาออนไลน์, เว็บไซต์, ตลาดเป้าหมาย, โฆษณาบนโซเชียลมีเดีย, Google Ads, การโฆษณาบน Facebook, การโฆษณาออนไลน์บนสื่อต่าง ๆ, การตลาดออนไลน์, การโปรโมท, โฆษณา Facebook, การโฆษณา Google, การโฆษณาสินค้า, การโฆษณาโปรโมชั่น, วิธีการโฆษณา, ความสำเร็จในการตลาด, บริการโฆษณา, การตลาดออนไลน์บน Facebook, การโฆษณาบนเว็บ, การวางแผนโฆษณา" />
      </Head>

      {/* ✅ JSON-LD Schema */}
      <Script
        id="jsonld-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      {/* ✅ Main Page */}
      <div className="container mx-auto">
        {posts.map((post) => (
          <div className="card mx-auto mt-5" key={post.id}>
            <div className="title h3 text-center">{post.title}</div>
            {post.name ? (
              <iframe
                width="560"
                height="315"
                className="vdoimg"
                src={`https://www.youtube.com/embed/${post.name}`}
                title="YouTube video player"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            ) : (
              <img
                src={`${urlimg}${post.imgvdo}`}
                className="vdoimg"
                alt={post.title}
              />
            )}
            <div className="card-body">
              <a href={`/Postpages/${post.title}`}>
                <h3>{post.title}</h3>
              </a>
              <p className="card-text">{post.content}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
