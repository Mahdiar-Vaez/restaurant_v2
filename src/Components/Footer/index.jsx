import React from "react";
import "./footer.css";
import cards from "../../assets/cards.png";
import { FaTelegramPlane } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="section">
        <ul className="menu">
          <Link className="footer-link" to="/foods/dessert/5">
            <li>دسر</li>
          </Link>
          <Link className="footer-link" to="/foods/drinks/4">
            <li>نوشیدنی ها</li>
          </Link>
          <Link className="footer-link" to="/foods/mix/6">
            <li>میکس ها</li>
          </Link>
          <Link className="footer-link" to="/foods/salad/7">
            <li>سالاد و مخلفات</li>
          </Link>
          <Link className="footer-link" to="/foods/sandwich/2">
            <li>ساندویچ ها</li>
          </Link>
          <Link className="footer-link" to="/foods/hamburger/3">
            <li>برگر ها</li>
          </Link>
          <Link className="footer-link" to="/foods/pizza/1">
            <li>پیتزا</li>
          </Link>
        </ul>
        <div className="footer-sections">
          <div>
            <h5>پذیرنده تمامی کارت ها</h5>
            <img src={cards} alt="Accepted Cards" />
          </div>
          <div>
            <h5>با ما در تماس باشید </h5>
            <ul>
              <li>شنبه تا پنجشنبه: 10:00 - 23:00</li>
              <li>خیابان آفریقا - کوچه کمان</li>
              <li>09056375314</li>
              <li>02191035407</li>
              <li>mahdyarvaez@gmail.com</li>
            </ul>
          </div>
          <div>
            <h5>دسترسی سریع</h5>
            <ul>
              <li><Link to="/ai"> هوش مصنوعی</Link></li>
              <li><Link to="/cart">سبد خرید</Link></li>
              <li><Link to="/login-register">صفحه کاربری</Link></li>
              <li><Link to="/">سیاست خط مشی</Link></li>
            </ul>
          </div>
          <div>
            <h5>اطلاعات</h5>
            <ul>
              <li><Link to="/foods/all/0"> رستوران </Link></li>
              <li><Link to="/foods/all/0">منوی ما</Link></li>
              <li><Link to="/blogs">بلاگ</Link></li>
              <li><Link to="/">تماس با ما</Link></li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copy-right">
        <p>
          تمامی حقوق این سایت محفوظ است. ساخته شده توسط mahdyarvaez@gmail.com
        </p>
        <div>
          <a className="footer-link" href="https://t.me/MAHDIARVAEZ" target="_blank" rel="noopener noreferrer">
            <FaTelegramPlane />
          </a>
          <a className="footer-link" href="mailto:mahdyarvaez@gmail.com">
            <MdEmail />
          </a>
          <a className="footer-link" href="https://www.linkedin.com/in/mahdyar-vaez-ab39652ba" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a className="footer-link" href="https://instagram.com/mahdiarvaez" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>
    </>
  );
}