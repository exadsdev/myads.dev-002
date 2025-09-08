"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Head from "next/head";

const Toolfree = () => {
  const [modalIsOpenFb, setModalIsOpenFb] = useState(false);
  const [modalIsOpenGoogle, setModalIsOpenGoogle] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [downloadType, setDownloadType] = useState(null); // facebook | google

  const openModal = (type) => {
    setDownloadType(type);
    if (type === "facebook") setModalIsOpenFb(true);
    if (type === "google") setModalIsOpenGoogle(true);
    setTimeLeft(30);
  };

  const closeModal = () => {
    setModalIsOpenFb(false);
    setModalIsOpenGoogle(false);
    setDownloadType(null);
  };

  useEffect(() => {
    if (!modalIsOpenFb && !modalIsOpenGoogle) return;

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, [modalIsOpenFb, modalIsOpenGoogle]);

  useEffect(() => {
    if (timeLeft === 0 && downloadType) {
      const url =
        downloadType === "facebook"
          ? "https://apipost.www.myads.dev/facebook.zip"
          : "https://apipost.www.myads.dev/google.zip";
      window.location.href = url;
      closeModal();
    }
  }, [timeLeft, downloadType]);

  useEffect(() => {
    const schemaData = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "ดาวน์โหลดเครื่องมือทำการตลาดฟรี - Facebook และ Google",
      "url": "https://www.myads.dev/toolfree",
      "description":
        "ดาวน์โหลดฟรี! เครื่องมือ Landing Page สำหรับยิงแอด Facebook และ Google สายเทา ดาวน์โหลดทันทีไม่มีค่าใช้จ่าย",
      "publisher": {
        "@type": "Organization",
        "name": "myads.dev",
        "url": "https://www.myads.dev"
      },
      "image": "https://www.myads.dev/img/toolfree.jpg"
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schemaData);
    document.head.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>
          ดาวน์โหลดเครื่องมือทำการตลาดฟรี | Facebook & Google | myads.dev
        </title>
        <meta
          name="description"
          content="ดาวน์โหลด Landing Page ฟรี สำหรับยิงแอด Facebook และ Google สายเทา พร้อมใช้งาน"
        />
        <meta
          name="keywords"
          content="ดาวน์โหลดฟรี, landing page, ยิงแอด, facebook ads, google ads, สายเทา, myads.dev"
        />
        <meta
          property="og:title"
          content="ดาวน์โหลดเครื่องมือทำการตลาดฟรี - Facebook & Google"
        />
        <meta
          property="og:description"
          content="ดาวน์โหลด Landing Page พร้อมใช้งานฟรี สำหรับ Facebook และ Google"
        />
        <meta
          property="og:image"
          content="https://www.myads.dev/img/toolfree.jpg"
        />
        <meta property="og:url" content="https://www.myads.dev/toolfree" />
        <meta property="og:type" content="website" />
        <link
          rel="canonical"
          href="https://www.myads.dev/toolfree"
        />
        <link
          rel="shortcut icon"
          href="https://www.myads.dev/favicon.ico"
          type="image/x-icon"
        />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="container py-5">
        {/* Facebook Download Section */}
        <div className="text-center">
          <h3>ดาวน์โหลด Landing Page Facebook</h3>
          <Image
            src="/img/fbd.webp"
            width={650}
            height={360}
            alt="ดาวน์โหลด Facebook"
            className="imgfb"
          />
          <br />
          <button
            type="button"
            className="btn btn-outline-primary mt-3"
            onClick={() => openModal("facebook")}
          >
            ดาวน์โหลด Facebook
          </button>
        </div>

        <hr className="my-5" />

        {/* Google Download Section */}
        <div className="text-center">
          <h3>ดาวน์โหลด Landing Page Google</h3>
          <Image
            src="/img/google.jpg"
            width={650}
            height={360}
            alt="ดาวน์โหลด Google"
            className="imggg"
          />
          <br />
          <button
            type="button"
            className="btn btn-outline-success mt-3"
            onClick={() => openModal("google")}
          >
            ดาวน์โหลด Google
          </button>
        </div>
      </div>

      {/* Countdown Modal */}
      {(modalIsOpenFb || modalIsOpenGoogle) && (
        <div
          className="modal fade show"
          style={{ display: "block", backgroundColor: "rgba(0,0,0,0.6)" }}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  กำลังเตรียมไฟล์ดาวน์โหลด...
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={closeModal}
                />
              </div>
              <div className="modal-body text-center">
                <h2>โปรดรอ {timeLeft} วินาที</h2>
                <p>ระบบจะเริ่มดาวน์โหลดไฟล์โดยอัตโนมัติ</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Toolfree;
