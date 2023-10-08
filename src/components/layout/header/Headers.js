import React from "react";
import { listNavigator } from "../../list help/index.js";
import { Link } from "react-router-dom";
import "./header.css";
import Skeleton from "../skeleton/Skeleton.js";
import { useSelector } from "react-redux";

const Headers = () => {
    const userSlice = useSelector((state) => state.userSlice);

    return (
        <Skeleton>
            <header className="header">
                <div className="flex justify-between">
                    <div className="text-2xl">
                        <strong>Targon</strong>
                    </div>
                    <ul className="flex justify-between gap-8">
                        {listNavigator.map((item) => (
                            <React.Fragment key={item.id}>
                                {(!item.type ||
                                    item.type ===
                                        (userSlice ? "auth" : "unauth")) && (
                                    <li className="text-lg">
                                        <Link to={item.path}>{item.title}</Link>
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </header>
        </Skeleton>
    );
};

export default Headers;
