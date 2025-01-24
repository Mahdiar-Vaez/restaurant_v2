import React, { useContext, useEffect, useInsertionEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./cart.css";
import { json, Link } from "react-router-dom";
import { addItem, removeItem } from "../../redux/CartSlice";
import CheckContext from "../../utils/checkoutContext";

export default function Cart() {


  const { list } = useSelector((state) => state.cart);
  const {  handleCheckOut } = useContext(CheckContext);
  const dispatch = useDispatch();
  
  const listItems = list?.map((e, index) => {
    return (
      <div key={index} class="item">

        <div class="image">
          <img src={e?.img} alt={e?.name} />
        </div>

        <div class="description">
          <span className="des-name">{e?.name}</span>
          <span>{e?.price} تومان</span>
        </div>

        <div class="quantity">
          <button
            onClick={() =>{ 
      
               
              dispatch(addItem(e))}}
            class="plus-btn"
            type="button"
            name="button"
          >
            +
          </button>
          <input type="text" name="name" value={e?.quantity} readOnly/>
          <button
           onClick={() => {
            if (e.quantity > 1) {
              dispatch(removeItem(e.id));
            } else {
              dispatch(removeItem(e.id));
              const updatedCartList = list.filter((item) => item.id !== e.id);
              localStorage.setItem("cartList", JSON.stringify(updatedCartList));
            }
          }}
            class="minus-btn"
            type="button"
            name="button"
          >
            -
          </button>
        </div>
      </div>
    );

  });
  const totalPrice =
    list?.reduce((a, b) => a + b?.price * b?.quantity, 0) + "000";
  return listItems.length > 0 ? (
    <div className="bg">
      <div className="cart">
        <div class="shopping-cart">
          <div class="title">سبد خرید</div>
          {listItems}
        </div>{" "}
        <div class="total">
          <span>جمع کل</span>
          <span>{totalPrice} تومان</span>
          <form>
            {/* <input type="text" required placeholder="نام و نام خانوادگی" name="" id="" /> 
                   <input type="text" required placeholder="شماره همراه " />

          <textarea required  placeholder="آدرس خود را وارد کنید"  type="text" /> */}
            <Link className="link" onClick={() => handleCheckOut(totalPrice)} to="/payment">
              ادامه خرید
            </Link>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <>
      <div className="empty">
        <h3>سبد خرید شما خالی میباشد </h3>
        <Link to="/foods/all/0">منوی رستوران</Link>
      </div>
    </>
  );
}
