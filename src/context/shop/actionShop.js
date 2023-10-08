export const setProductShop = (payload) => {
    return {
        type: "setProducts",
        payload,
    };
};

export const setSortProducts = (payload) => {
    return {
        type: "setSortProducts",
        payload,
    };
};

export const setMaxMinPrice = (payload) => {
    return {
        type: "setMaxMinPrice",
        payload,
    };
};

export const setFilterClassify = (payload) => {
    return {
        type: "setFilterClassify",
        payload,
    };
};
