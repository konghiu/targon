import React, { useReducer } from "react";
import Skeleton from "../../components/layout/skeleton/Skeleton";
import AsideFilter from "./templates/AsideFilter";
import DisplayProducts from "./templates/DisplayProducts";
import { shopContext } from "../../context/shop/shopContext";
import shopReducer, { init } from "../../context/shop/shopReducer";
import "./css/index.css";

const Shop = () => {
    const [value, dispatchShop] = useReducer(shopReducer, init);

    return (
        <shopContext.Provider value={[value, dispatchShop]}>
            <Skeleton>
                <div className="flex items-start gap-8">
                    <AsideFilter />
                    <DisplayProducts />
                </div>
            </Skeleton>
        </shopContext.Provider>
    );
};

export default Shop;
