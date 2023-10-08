export const listNavigator = [
    {
        id: 1,
        title: "Home",
        path: "/home",
        type: null,
    },
    {
        id: 2,
        title: "Blog",
        path: "/blog",
        type: null,
    },
    {
        id: 3,
        title: "Shop",
        path: "/shop",
        type: null,
    },
    {
        id: 4,
        title: "Sign in",
        path: "/sign/sign-in",
        type: "unauth",
    },
    {
        id: 5,
        title: "Sign on",
        path: "/sign/sign-on",
        type: "unauth",
    },
    {
        id: 6,
        title: "Portfolio",
        path: "/portfolio",
        type: "auth",
    },
    {
        id: 7,
        title: "Sign out",
        path: "/sign/sign-out",
        type: "auth",
    },
];

export const filterPriceList = [
    { id: 1, min: 0, max: 20, title: "updown 20" },
    { id: 2, min: 20, max: 40, title: "from 20 to 40" },
    { id: 3, min: 40, max: 60, title: "from 40 to 60" },
    { id: 4, min: 60, max: 80, title: "from 60 to 80" },
    { id: 5, min: 80, max: Infinity, title: "upon 80" },
];

export const sortByList = [
    { id: 1, title: "Price increase", sortBy: "price", sortType: 1 },
    { id: 2, title: "Price decrease", sortBy: "price", sortType: -1 },
    { id: 3, title: "A - Z", sortBy: "name", sortType: 1 },
    { id: 4, title: "Z - A", sortBy: "name", sortType: -1 },
];

export const classifyProductList = [
    { id: 1, title: "Drinks", classify: "drink" },
    { id: 2, title: "Food", classify: "food" },
];
