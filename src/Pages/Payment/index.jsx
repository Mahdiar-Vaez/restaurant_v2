import React, { useContext } from "react";
import "./style.css";
import CheckContext from "../../utils/checkoutContext";
import Swal from "sweetalert2";
export default function Payment() {
  const { checkOut } = useContext(CheckContext);
  function handleClick(e) {
    e.preventDefault()
   
    
        Swal.fire({
          title: " متاسفانه درگاه پرداخت در دسترس نمیباشد  ",
          text: "در صورت تکرار این ارور به پشتیبانی پیام بدهید",
          icon: "error",
        });
      
    }
  
  
  return (
    <div className="bg">
      <div className="payment-container">
        <h3>ثبت اطالاعات</h3>
        <form  className="form-payment">
          <input
            type="text"
            required
            placeholder="نام و نام خانوادگی"
            name=""
            id=""
          />
          <input type="text" required placeholder="شماره همراه " />

          <textarea required placeholder="آدرس خود را وارد کنید" type="text" />
          <p> مبلغ کل: {checkOut} تومن </p>
          <button onClick={handleClick}>درگاه پرداخت</button>
        </form>
      </div>
    </div>
  );
}