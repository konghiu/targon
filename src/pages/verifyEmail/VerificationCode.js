import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Skeleton from "../../components/layout/skeleton/Skeleton";
import "./verificationCode.css";
import { handleGetFromServer, handlePostToServer } from "../../services/API";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../reducers/loadSlice";

const VerificationCode = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userSlice = useSelector((state) => state.userSlice);
    const [notify, setNotify] = React.useState("");

    const handleSentVerificationCode = () => {
        dispatch(setLoading(true));
        const num1 = document.getElementById("num1")?.value;
        const num2 = document.getElementById("num2")?.value;
        const num3 = document.getElementById("num3")?.value;
        const num4 = document.getElementById("num4")?.value;
        const num5 = document.getElementById("num5")?.value;
        const num6 = document.getElementById("num6")?.value;
        const code = num1 + num2 + num3 + num4 + num5 + num6;
        handlePostToServer("email/verify", {
            email: new URLSearchParams(location.search).get("email"),
            code: code,
        }).then((res) => {
            if (res.status === 200) setNotify(res.data.message);
            else setNotify(res.message);
            dispatch(setLoading(false));
        });
    };

    React.useEffect(() => {
        if (userSlice) navigate(-1 || "/home");
    }, []);

    const handleGetNewCode = () => {
        dispatch(setLoading(true));
        handleGetFromServer(`email/verify${location.search}`).then((res) => {
            document.getElementById("num1").value = "";
            document.getElementById("num2").value = "";
            document.getElementById("num3").value = "";
            document.getElementById("num4").value = "";
            document.getElementById("num5").value = "";
            document.getElementById("num6").value = "";
            setNotify("A NEW VERIFICATION CODE WAS SEND");
            dispatch(setLoading(false));
        });
    };

    const handleEnterCode = (e) => {
        const value = e.target.value;
        if (Number(value) < 10 && Number(value) >= 0) {
            const nextInput = e.target.nextElementSibling;
            if (nextInput && value.length > 0) {
                nextInput.focus();
            } else if (!nextInput) handleSentVerificationCode();
        } else {
            e.target.value = value[value.length - 1];
        }
    };

    return (
        <Skeleton>
            <div className="verificationCode">
                <h1>
                    Verification code was sent to{" "}
                    <strong>
                        {new URLSearchParams(location.search).get("email")}
                    </strong>
                </h1>
                <div className="code">
                    <input
                        type="text"
                        id="num1"
                        onChange={(e) => handleEnterCode(e)}
                    />
                    <input
                        type="text"
                        id="num2"
                        onChange={(e) => handleEnterCode(e)}
                    />
                    <input
                        type="text"
                        id="num3"
                        onChange={(e) => handleEnterCode(e)}
                    />
                    <input
                        type="text"
                        id="num4"
                        onChange={(e) => handleEnterCode(e)}
                    />
                    <input
                        type="text"
                        id="num5"
                        onChange={(e) => handleEnterCode(e)}
                    />
                    <input
                        type="text"
                        id="num6"
                        onChange={(e) => handleEnterCode(e)}
                    />
                </div>
                <p
                    className="mt-4 underline text__main cursor-pointer text-lg"
                    onClick={() => handleGetNewCode()}
                >
                    Get new code
                </p>
                {notify && <p>{notify}</p>}
            </div>
        </Skeleton>
    );
};

export default VerificationCode;
