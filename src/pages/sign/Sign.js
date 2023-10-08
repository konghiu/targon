import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./css/index.css";
import { useDispatch, useSelector } from "react-redux";
import { handlePostToServer } from "../../services/API";
import { signOut } from "../../reducers/userSlice";
import { useCookies } from "react-cookie";

const Sign = () => {
    const userSlice = useSelector((state) => state.userSlice);
    const [render, setRender] = React.useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [cookie, setCookie, removeCookie] = useCookies(["refreshToken"]);

    React.useEffect(() => {
        if (location.pathname.includes("sign-out") && userSlice) {
            handlePostToServer("v/auth/sign-out", null, userSlice.accessToken)
                .then((res) => {
                    if (res.status === 200) {
                        dispatch(signOut());
                        removeCookie("refreshToken", { path: "/" });
                    }
                })
                .catch((err) => console.log(err))
                .finally(() => navigate(-1 || "/home"));
        } else if (!!userSlice) navigate(-1 || "/home");
        else setRender(true);
    }, [userSlice]);

    return (
        <section className="bg-white w-full">
            <div className="flex justify-center py-10">
                {render && <Outlet context={userSlice} />}
            </div>
        </section>
    );
};

export default Sign;
