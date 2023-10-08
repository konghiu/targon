import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Sign from "../pages/sign/Sign";
import SignIn from "../pages/sign/templates/SignIn";
import SignOn from "../pages/sign/templates/SignOn";
import VerificationCode from "../pages/verifyEmail/VerificationCode";
import SignOut from "../pages/sign/templates/SignOut";
import Shop from "../pages/shop/Shop";
import Portfolio from "../pages/portfolio/Portfolio";
import Blog from "../pages/blog/Blog";

const IndexRouter = () => {
    return (
        <Routes>
            <Route path="" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/sign" element={<Sign />}>
                <Route path="" element={<SignIn />} />
                <Route path="sign-in" element={<SignIn />} />
                <Route path="sign-on" element={<SignOn />} />
                <Route path="sign-out" element={<SignOut />} />
                <Route path="sign-on/verify" element={<VerificationCode />} />
            </Route>
            <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
    );
};

export default IndexRouter;
