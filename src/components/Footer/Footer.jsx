// Suggested code may be subject to a license. Learn more: ~LicenseLog:201565601.
// Suggested code may be subject to a license. Learn more: ~LicenseLog:856552693.
import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-default text-foreground py-5">
     <div className="container flex justify-between px-5">
        <div className="contacts">
            <h3 className='font-bold'>About</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <Link href= "mailto:tk22156simp@gmail.com">tk22156simp@gmail.com</Link>
        </div>
        <div className="links">
            <h5>Links</h5>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
            </ul>
        </div>
     </div>
    </footer>
  );
};

export default Footer;
