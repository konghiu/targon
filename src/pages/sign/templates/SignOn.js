import React from "react";
import { useForm } from "react-hook-form";
import { handlePostToServer } from "../../../services/API";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoading } from "../../../reducers/loadSlice";

const SignOn = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        mode: "onSubmit",
        reValidateMode: "onSubmit",
    });

    const userSlice = useOutletContext();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (userSlice) navigate(-1 || "/home");
    }, []);

    const onSubmit = (data) => {
        dispatch(setLoading(true));
        handlePostToServer("v/auth/sign-on", data).then((res) => {
            if (res.status === 200) {
                navigate("/sign/sign-on/verify?email=" + data.email);
            } else {
                alert(res.message);
            }
            dispatch(setLoading(false));
        });
    };
    const onError = (err) => {
        console.log(err);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className="form__sign">
            <label htmlFor="username">Username</label>
            <input
                type="text"
                id="username"
                placeholder="Username"
                {...register("username", {
                    required: "Please enter your username.",
                })}
            />
            {errors.username && <small>{errors.username.message}</small>}
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
            <label htmlFor="password2">Password</label>
            <input
                type="password"
                id="Password2"
                placeholder="password2"
                {...register("password2", {
                    required: "Please enter your password.",
                    validate: (value) => {
                        if (watch("password") !== value) {
                            return "Two passwords aren't match.";
                        }
                    },
                })}
            />
            {errors.password2 && <small>{errors.password2.message}</small>}
            <button className="main__button">Sign in</button>
        </form>
    );
};

export default SignOn;
