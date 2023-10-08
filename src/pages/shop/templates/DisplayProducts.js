import React, { useContext } from "react";
import { handleGetFromServer } from "../../../services/API";
import { shopContext } from "../../../context/shop/shopContext";
import Product from "../../../components/product/Product";
import { setProductShop } from "../../../context/shop/actionShop";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../reducers/loadSlice";

const DisplayProducts = () => {
    const consumer = useContext(shopContext);
    const dispatch = useDispatch();
    const { max, min, sortBy, sortType, pages, products, classify } =
        consumer[0];

    const dispatchShop = consumer[1];
    const [numberOfPages, setNumberOfPages] = React.useState(1);

    const onRecieveProducts = (pathname, accessToken = "") => {
        dispatch(setLoading(true));
        handleGetFromServer(pathname).then((data) => {
            dispatchShop(setProductShop(data));
            window.scrollTo(window.innerHeight, 0);
            dispatch(setLoading(false));
        });
    };

    React.useEffect(() => {
        onRecieveProducts(
            `products?page=${numberOfPages}&min=${min}&max=${max}&sortBy=${sortBy}&sortType=${sortType}&classify=${classify}`
        );
    }, [sortBy, sortType, min, max, classify, numberOfPages]);

    const handleDirectOtherPage = (page) => {
        if (numberOfPages <= pages.length) {
            setNumberOfPages(page);
        }
    };

    return (
        <div className="flex-1">
            {products.length > 0 ? (
                <div className="grid grid-cols-3 gap-4">
                    {products.map((item) => (
                        <Product item={item} key={item._id} />
                    ))}
                </div>
            ) : (
                <p>khong co san pham can tim</p>
            )}
            <ul className="flex gap-2 mt-4">
                {pages.length > 1 &&
                    pages.map((page) => (
                        <li
                            key={page}
                            className={clsx("paginate__button", {
                                "paginate__button-click":
                                    numberOfPages === page ||
                                    1 ===
                                        (numberOfPages > pages.length ? 1 : 0),
                            })}
                            onClick={() => handleDirectOtherPage(page)}
                        >
                            {page}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default DisplayProducts;
