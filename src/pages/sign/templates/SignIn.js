import React from "react";
import { useForm } from "react-hook-form";
import { handlePostToServer } from "../../../services/API";
import { useDispatch } from "react-redux";
import { signIn } from "../../../reducers/userSlice";
import { setLoading } from "../../../reducers/loadSlice";
import { useCookies } from "react-cookie";
import { Link, useNavigate, useOutletContext } from "react-router-dom";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });

    const userSlice = useOutletContext();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cookie, setCookie] = useCookies(["refreshToken"]);

    React.useEffect(() => {
        if (userSlice) navigate(-1 || "/home");
    }, []);

    const onSubmit = async (data) => {
        dispatch(setLoading(true));
        handlePostToServer("v/auth/sign-in", data).then((res) => {
            if (res.status === 200) {
                const data = res.data;
                dispatch(signIn(data));
                setCookie("refreshToken", data.refreshToken, { path: "/" });
            } else {
                alert(res.message);
            }
            dispatch(setLoading(false));
        });
    };
    const onError = () => {};

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="form__sign">
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                placeholder="Email"
                {...register("email", {
                    required: "Please enter your email.",
                })}
            />
            {errors.email && <small>{errors.email.message}</small>}
            <label htmlFor="password">Password</label>
            <input
                type="password"
                id="Password"
                placeholder="password"
                {...register("password", {
                    required: "Please enter your password.",
                })}
            />
            {errors.password && <small>{errors.password.message}</small>}
            <button className="main__button mb-2">Sign in</button>
            <span className="text-sm underline cursor-pointer">
                <Link to="/">forgot password?</Link>
            </span>
            <span className="text-sm underline float-right cursor-pointer">
                <Link to="/targon/sign/sign-on">sign on account?</Link>
            </span>
        </form>
    );
};

export default SignIn;
