import React from "react";
import th from "../../../assets/images/th.jpg";
import "./aside.css";

const Aside = () => {
    return (
        <aside className="aside w-full flex flex-col gap-8 text__main">
            <div>
                <input
                    className="input__search"
                    type="text"
                    placeholder="Search ..."
                />
            </div>
            <div className="aside__item">
                <strong>Categories</strong>
                <ul>
                    <li>Food</li>
                    <li>Water</li>
                    <li>Travel</li>
                    <li>Culture</li>
                    <li>Music</li>
                </ul>
            </div>
            <div className="aside__item">
                <strong>Top Posts</strong>
                <ul>
                    <li className="flex gap-4">
                        <strong className="text-2xl">1</strong>
                        <p>
                            <strong>Amazon is the best e-commerce</strong>
                            <span className="block text-gray-500">
                                03/10/2023
                            </span>
                        </p>
                    </li>
                    <li className="flex gap-4">
                        <strong className="text-2xl">2</strong>
                        <p>
                            <strong>Amazon is the best e-commerce</strong>
                            <span className="block text-gray-500">
                                03/10/2023
                            </span>
                        </p>
                    </li>
                    <li className="flex gap-4">
                        <strong className="text-2xl">3</strong>
                        <p>
                            <strong>Amazon is the best e-commerce</strong>
                            <span className="block text-gray-500">
                                03/10/2023
                            </span>
                        </p>
                    </li>
                    <li className="flex gap-4">
                        <strong className="text-2xl">4</strong>
                        <p>
                            <strong>Amazon is the best e-commerce</strong>
                            <span className="block text-gray-500">
                                03/10/2023
                            </span>
                        </p>
                    </li>
                    <li className="flex gap-4">
                        <strong className="text-2xl">5</strong>
                        <p>
                            <strong>Amazon is the best e-commerce</strong>
                            <span className="block text-gray-500">
                                03/10/2023
                            </span>
                        </p>
                    </li>
                </ul>
            </div>
            <div>
                <strong>Facebook</strong>
                <ul className="grid grid-cols-4 gap-1">
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                    <li>
                        <img src={th} alt="templete" />
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Aside;
