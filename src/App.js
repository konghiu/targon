import React from "react";
import "./App.css";
import Headers from "./components/layout/header/Headers";
import IndexRouter from "./route/IndexRouter";
import TitlePage from "./components/layout/title page/TitlePage";
import { useDispatch, useSelector } from "react-redux";
import { handlePostToServer } from "./services/API";
import { signIn } from "./reducers/userSlice";
import Loading from "./components/layout/loading/Loading";

function App() {
    const [load, setLoad] = React.useState(true);
    const isLoading = useSelector((state) => state.loadSlice);
    const dispatch = useDispatch();

    React.useEffect(() => {
        handlePostToServer("v/auth/refresh-token", null)
            .then((res) => {
                if (res.status === 200) dispatch(signIn(res.data));
            })
            .catch((err) => dispatch(signIn(undefined)))
            .finally(() => setLoad(false));
    }, []);

    return (
        <React.Fragment>
            {!load && (
                <React.Fragment>
                    {isLoading && <Loading />}
                    <Headers />
                    <TitlePage />
                    <IndexRouter />
                </React.Fragment>
            )}
        </React.Fragment>
    );
}

export default App;
