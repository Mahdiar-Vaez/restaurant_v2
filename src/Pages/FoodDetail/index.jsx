import React, { useEffect, useState } from "react";
import { Hourglass } from "react-loader-spinner";
import { useParams } from "react-router-dom";
import "./food-detail.css";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../../redux/CartSlice";
import { addFavorite } from "../../redux/FavoriteSlice";
import { MdFavoriteBorder } from "react-icons/md";
import { motion } from "framer-motion"; // Import motion from framer-motion
import Comment from './Comment';

export default function FoodDetail() {
  const dispatch = useDispatch();
  const [food, setFood] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id, name } = useParams();
  const quantity = useSelector((state) => state.cart.list)?.filter(
    (e) => e.id == id
  )[0]?.quantity;

  const { favoriteList } = useSelector((item) => item.favorite);
  const cartList = useSelector((item) => item.cart.list);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://mahdiar-vaez.github.io/host-restaurant/data.json`);
        const data = await res.json();
        const foundFood = data?.all?.find((item) => item.id == id);
        setFood(foundFood);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        alert(error);
      }
    })();
  }, [id]);

  useEffect(() => {
    const localStorageCart = localStorage.getItem("cartList");
    const parsedLocalStorage = JSON.parse(localStorageCart);
    if (Array.isArray(parsedLocalStorage) && parsedLocalStorage) {
      parsedLocalStorage.forEach((item) =>
        dispatch(addItem({ id: item.id, quantity: item?.quantity }))
      );
    }
  }, [dispatch]);

  return (
    <motion.div
      className="detail section"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.5 }}
    >
      {loading ? (
        <div className="loading">
          <Hourglass
            visible={true}
            height="200"
            width="200"
            ariaLabel="hourglass-loading"
            wrapperStyle={{}}
            wrapperClass=""
            colors={["#ffca3c", "#f2002d"]}
          />
        </div>
      ) : (
        food && ( <>
          <div className="food-detail">
            <img src={food.img} alt={food.name} />
            <span
              className="add-favorite"
              onClick={() => {
                const copyFoods = [...favoriteList];
                dispatch(addFavorite(food));
                copyFoods.push(food);
                localStorage.setItem("favoriteList", JSON.stringify(copyFoods));
              }}
            >
              {favoriteList.some((item) => item.id === food.id) ? (
                <MdFavoriteBorder fontSize={"34px"} style={{ color: "red" }} />
              ) : (
                "افزودن به علاقه مندی ها"
              )}
            </span>
            <h3>{food.name}</h3>
            <p>{food.des}</p>
            <p className="price">{food.price} تومان</p>
            <div className="buttons">
              <button
                onClick={() => {
                  let copy = [...cartList];
                  const foodToAdd = { ...food, quantity: (quantity || 0) + 1 };
                  dispatch(addItem(foodToAdd));
                  copy = copy.filter((item) => item.id !== foodToAdd.id);
                  copy.push(foodToAdd);
                  localStorage.setItem("cartList", JSON.stringify(copy));
                }}
              >
                افزودن به سبد خرید
                <span>
                  
                </span>
              </button>
                <button
                  className={`${quantity>0?'remove-button':'active-remove'}`} 
                  onClick={() => {
                    if (quantity > 1) {
                      const updatedCartList = [...cartList].map((item) =>
                        item.id === food.id
                          ? { ...item, quantity: quantity - 1 }
                          : item
                      );
                      localStorage.setItem(
                        "cartList",
                        JSON.stringify(updatedCartList)
                      );
                      dispatch(removeItem(food.id));
                    } else {
                      dispatch(removeItem(food.id));
                      const updatedCartList = [...cartList].filter(
                        (item) => item.id !== food.id
                      );
                      localStorage.setItem(
                        "cartList",
                        JSON.stringify(updatedCartList)
                      );
                    }
                  }}
                >
                  کم کردن
                  <span>
                  </span>
                </button>
              
            </div>
            <p style={{height:'20px'}} >{quantity && ` به سبد خرید به تعداد ${quantity} اضافه شد`}</p>
          </div>
          <Comment  foodId={food.id}/>
       </> )
      )}
    </motion.div>
  );
}