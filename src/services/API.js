import axios from "axios";
export const uri = "http://localhost:8000";

export const handleGetFromServer = async (pathname, accessToken = "") => {
    const headers = {};
    if (accessToken) headers["Authorization"] = "Bearer " + accessToken;
    return await axios
        .get(`${uri}/${pathname}`, {
            headers: headers,
        })
        .then((res) => res.data)
        .catch((err) => err);
};

export const handlePostToServer = async (pathname, data, accessToken = "") => {
    const headers = {};
    if (accessToken) headers["Authorization"] = "Bearer " + accessToken;
    return await axios
        .post(`${uri}/${pathname}`, data, {
            headers: { ...headers },
            withCredentials: true,
        })
        .then((res) => {
            return { data: res.data, status: res.status };
        })
        .catch((err) => {
            return {
                status: err.response.status,
                message: err.response.data.message,
            };
        });
};
