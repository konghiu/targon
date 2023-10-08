import React from "react";
import Skeleton from "../../components/layout/skeleton/Skeleton";
import Aside from "../../components/layout/aside/Aside";
import { handleGetFromServer, uri } from "../../services/API";
import Product from "../../components/product/Product";
import clsx from "clsx";

const Home = () => {
    const [list, setList] = React.useState([]);

    const onRecieveProducts = (pathname, accessToken = "") => {
        handleGetFromServer(pathname)
            .then((data) => {
                setList(data.products);
                window.scrollTo(window.innerHeight, 0);
            })
            .catch((err) => console.log(err.message));
    };

    React.useEffect(() => {
        onRecieveProducts("products?page=1");
    }, []);

    return (
        <Skeleton>
            <div className="flex items-start gap-8">
                <div className="w-1/3">
                    <Aside />
                </div>
                <div className="flex-1">
                    <div className="grid grid-cols-3 gap-4">
                        {list.map((item) => (
                            <Product item={item} key={item._id} />
                        ))}
                    </div>
                </div>
            </div>
        </Skeleton>
    );
};

export default Home;
