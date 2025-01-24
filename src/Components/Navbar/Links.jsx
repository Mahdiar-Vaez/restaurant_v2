import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { MdFavoriteBorder, MdLogin } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import { FaPizzaSlice } from "react-icons/fa";
import { FaHamburger } from "react-icons/fa";
import { RiDrinks2Fill } from "react-icons/ri";
import { GiSandwich } from "react-icons/gi";
import { useSelector } from "react-redux";
import { RiRobot2Fill } from "react-icons/ri";

export default function Links({ listLength, handleLogOut, user, handleTop }) {
  const [drawer, setDrawer] = useState(false);
  function handleDrawer() {
    setDrawer(!drawer);
  }
  function handleLogDrawer() {
    setDrawer(!drawer);
    handleLogOut();
  }
  const favoriteLength=useSelector((state)=>state.favorite.favoriteList).length
  return (
    <>
      <div className="links">
        <ul>
          <Link className="cart-icon" style={{ color: "white" }} to={"/cart"}>
            <CiShoppingCart fontSize={25} />
            {listLength > 0 ? <span>{listLength}</span> : ""}
          </Link>
          <Link to={"/"} style={{ color: "white" }}>
            <li>
              <div className="shape">
                <div className="triangle"></div>

                <img
                  src={logo}
                  width={110}
                  height={110}
                  loading="lazy"
                  alt="Lafka logo"
                />
              </div>
            </li>
          </Link>

          <li
            style={{ cursor: "pointer" }}
            onClick={handleDrawer}
            className="menu"
          >
            {" "}
            <IoMenu size={25} />
          </li>
        </ul>
      </div>
      <div className="drawer ">
        <ul className={`${drawer && "drawer-active"}`}>
          <p onClick={handleDrawer} className="close-button-drawer">
            {" "}
            <IoMdClose color="white" />
          </p>

          <Link onClick={handleDrawer} to={"/foods/all/0"}>
            همه منو ها
          </Link>
          <Link onClick={handleDrawer} to={"/foods/pizza/1"}>
            {" "}
            پیتزا <FaPizzaSlice/>
          </Link>
          <Link onClick={handleDrawer} to={"/foods/hamburger/2"}>
            {" "}
            همبرگر <FaHamburger/>
          </Link>
          <Link onClick={handleDrawer} to={"/foods/drinks/3"}>
            {" "}
            نوشیدنی <RiDrinks2Fill/>
          </Link>
          <Link onClick={handleDrawer} to={"/foods/sandwich/4"}>
            {" "}
            ساندویچ <GiSandwich/>
          </Link>

          <Link to={'/blogs'} onClick={handleDrawer}> بلاگ ما</Link>
          <Link onClick={handleDrawer} to={'/favorite'} >
          
          علاقه مندی ها <MdFavoriteBorder  className="favorite"/> 
          <span  style={{color:'red'}}>
            {favoriteLength? favoriteLength:''}
          </span>
         
          </Link>
          <Link
            onClick={() => {
              handleDrawer();
              handleTop();
            }}
            className="link-item"
            to={"/ai"}
          >
            {" "}
            هوش مصنوعی <RiRobot2Fill />
          </Link>
          <Link
            onClick={() => {
              handleDrawer();
              handleTop();
            }}
            className="link-item"
            to={"/"}
          >
            {" "}
            خانه <FaHome />
          </Link>
          {user ? (
            <a onClick={handleLogDrawer} style={{ cursor: "pointer" }}>
              خروج از حساب{" "}
            </a>
          ) : (
            <Link
              onClick={handleDrawer}
              className="link-item"
              to={"/login-register"}
            >
              {" "}
              ورود <MdLogin />
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}
