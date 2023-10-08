import React, { useContext } from "react";
import { shopContext } from "../../../context/shop/shopContext";
import {
    classifyProductList,
    filterPriceList,
    sortByList,
} from "../../../components/list help";
import {
    setMaxMinPrice,
    setSortProducts,
    setFilterClassify,
} from "../../../context/shop/actionShop";
import clsx from "clsx";

const AsideFilter = () => {
    const consumer = useContext(shopContext);
    const { max, min, sortBy, sortType, classify } = consumer[0];
    const dispatchShop = consumer[1];

    const handleFilterMaxMin = (filter) => {
        if (`${filter.max}${filter.min}` === `${max}${min}`) {
            dispatchShop(setMaxMinPrice({ max: Infinity, min: 0 }));
        } else {
            dispatchShop(setMaxMinPrice({ max: filter.max, min: filter.min }));
        }
    };

    const handleSortBy = (sort) => {
        if (`${sort.sortBy}${sort.sortType}` === `${sortBy}${sortType}`) {
            dispatchShop(
                setSortProducts({
                    sortBy: "",
                    sortType: 0,
                })
            );
        } else {
            dispatchShop(
                setSortProducts({
                    sortBy: sort.sortBy,
                    sortType: sort.sortType,
                })
            );
        }
    };

    const handleFilterClassify = (item) => {
        if (item.classify === classify) {
            dispatchShop(setFilterClassify({ classify: "" }));
        } else dispatchShop(setFilterClassify({ classify: item.classify }));
    };

    return (
        <aside className="asideShop w-1/3">
            <div className="asideShop__field">
                <strong>Classify</strong>
                <ul>
                    {classifyProductList.map((item) => (
                        <li
                            onClick={() => handleFilterClassify(item)}
                            className={clsx({
                                "asideShop__field-active":
                                    item.classify === classify,
                            })}
                            key={item.id}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="asideShop__field">
                <strong>Sort by</strong>
                <ul>
                    {sortByList.map((item) => (
                        <li
                            className={clsx({
                                "asideShop__field-active":
                                    `${item.sortBy}${item.sortType}` ===
                                    `${sortBy}${sortType}`,
                            })}
                            key={item.id}
                            onClick={() => handleSortBy(item)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="asideShop__field">
                <strong>Filter</strong>
                <ul>
                    {filterPriceList.map((item) => (
                        <li
                            className={clsx({
                                "asideShop__field-active":
                                    `${item.max}${item.min}` === `${max}${min}`,
                            })}
                            key={item.id}
                            onClick={() => handleFilterMaxMin(item)}
                        >
                            {item.title}
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default AsideFilter;
