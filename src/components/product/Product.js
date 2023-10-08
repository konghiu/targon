import React from "react";
import { uri } from "../../services/API";
import "./product.css";

const Product = ({ item }) => {
    return (
        <div className="product">
            <div className="product__image ">
                <img src={uri + "/images/" + item.image} alt={item.name} />
            </div>
            <div className="product__info">
                <strong>{item.name}</strong>
                <p>{item.price}$</p>
            </div>
            <div className="product__button">
                <button className="main__button">Buy</button>
            </div>
        </div>
    );
};

export default Product;
