'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import { useSession, signIn, signOut } from "next-auth/react";
const navBar = [
    { href: '/', name: 'Home' },
    { href: '/Postpages', name: 'Postpages' },
    { href: '/google', name: 'Google' },
    { href: '/facebook', name: 'Facebook' },
    { href: '/Course', name: 'คอร์สเรียนโฆษณา' },
    { href: '/toolfree', name: 'ToolFree' },
    { href: '/video', name: 'video' },
    { href: '/contact', name: 'contact' }

]


export default function Headers() {
  // const { data: session } = useSession();


  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-3">
        <div className="container-xl">
          <Link className="navbar-brand" href="/">
            <img src="/logo.png" width={50} alt="logo" />
            <span>AdsDev</span>

          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navBar.map((link) => (
                <li key={link.href} className="nav-item mx-2">

                  <Link href={link.href} className="Link">
                   
                    {link.name}
                    
                  </Link>

                </li>
              ))}
            </ul>
            <div className="auth-buttons">
              {/* {session ? (
                <>
                  <div className="dropdown" >
                        <a className="dropbtn"> 
                       <div className="Profile"><img src={session.user.image} alt="Profile Image" className='imgProfile' /></div>
                        </a>
                       <div className="dropdown-content">
                       <button className="btn btn-danger" onClick={() => signOut()}>  ออก  </button>
                      </div>
                       </div>

                  
                </>
              ) : (
                <button className="btn btn-outline-light" onClick={() => signIn()}>
                  Sign In
                </button>
              )} */}
            </div>
          </div>
        </div>
      </nav>


  <header>
        <main className ="container">
          <div className ="text-center">

            <div className="boxbar">  
          <img src="/img/bar.webp" className='bar'  alt="bar" />
          </div>

            <h1>รับจ้างยิงแอดทำโฆษณาออนไลน์</h1>
            <h3>รับทำโฆษณา Facebook Ads</h3>
            <h3>รับทำโฆษณา Google</h3>
            <p>
              ทำโฆษณาเว็บไซต์ต่างๆ ด้วยทีมงานมืออาชีพ อัตราค่าบริการเพียงเดือนละ 9,900 บาท <br /> ไม่มีค่าใช้จ่ายเพิ่มเติม มีรีวิวจากลูกค้าจริงให้ชม
            </p>
          </div>
          <div className ="text-center mt-3">
            <a href="https://lin.ee/vjeDuCZ">
              <img src="https://scdn.line-apps.com/n/line_add_friends/btn/th.png" alt="เพิ่มเพื่อน" height="36" border="0" />
            </a>
          </div>
        </main>
        
      </header>


      
    </>
  )
}
