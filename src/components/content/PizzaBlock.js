import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItems } from "../../redux/slices/cartSlice";

export const PizzaBlock = ({
   id,
   imageUrl,
   title,
   types,
   sizes,
   price,
   category,
   rating,
}) => {
   const dispatch = useDispatch();
   const typeNames = ["тонкое", "традиционное"];
   const [sizesActive, setSizesActive] = useState(0);
   const [typeActive, setTypeActive] = useState(0);
   const cartItem = useSelector((state) =>
      state.cart.items.find((obj) => obj.id === id)
   );
   const count = cartItem ? cartItem.count : 0;
   function changeCountHandler() {
      const items = {
         id,
         imageUrl,
         title,
         price,
         type: typeNames[typeActive],
         size: sizes[sizesActive],
      };
      dispatch(addItems(items));
   }

   return (
      <div className="pizza-block">
         <img className="pizza-block__image" src={imageUrl} alt="Pizza IMG" />
         <h4 className="pizza-block__title">{title}</h4>
         <div className="pizza-block__selector">
            <ul>
               {types.map((index) => (
                  <li
                     className={typeActive === index ? "active" : ""}
                     key={index}
                     onClick={() => setTypeActive(index)}
                  >
                     {typeNames[index]}
                  </li>
               ))}
            </ul>
            <ul>
               {sizes.map((size, index) => (
                  <li
                     className={sizesActive === index ? "active" : ""}
                     key={index}
                     onClick={() => setSizesActive(index)}
                  >
                     {size} см.
                  </li>
               ))}
            </ul>
         </div>
         <div className="pizza-block__bottom">
            <div className="pizza-block__price">от {price}</div>
            <button
               className="button button--outline button--add"
               onClick={changeCountHandler}
            >
               <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                     fill="white"
                  ></path>
               </svg>
               <span>Добавить</span>
               {count > 0 && <i>{count}</i>}
            </button>
         </div>
      </div>
   );
};
