export const init = {
    classify: "",
    min: 0,
    sortBy: "",
    max: Infinity,
    sortType: 0,
    name: "",
    products: [],
    pages: [],
};

const shopReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case "setProducts":
            // payload => products, pages
            let pages = [];
            for (let i = 0; i < payload.pages; i++) {
                pages[i] = i + 1;
            }
            return {
                ...state,
                products: payload.products,
                pages: pages,
            };
        case "setSortProducts":
            return {
                ...state,
                sortBy: payload.sortBy,
                sortType: payload.sortType,
            };
        case "setMaxMinPrice":
            return {
                ...state,
                max: payload.max,
                min: payload.min,
            };
        case "setFilterClassify":
            return {
                ...state,
                classify: payload.classify,
            };
        default:
            return {
                ...init,
            };
    }
};

export default shopReducer;
