const onRoundTwoNumbers = (number) => {
    return number > 9 ? number : "0" + number;
};

export const convertDate = (stringDate) => {
    const date = new Date(stringDate);
    return (
        onRoundTwoNumbers(date.getDate()) +
        "/" +
        onRoundTwoNumbers(date.getMonth() + 1) +
        "/" +
        date.getFullYear()
    );
};

export const convertTime = (stringDate) => {
    const date = new Date(stringDate);
    return (
        onRoundTwoNumbers(date.getHours()) +
        ":" +
        onRoundTwoNumbers(date.getMinutes()) +
        ":" +
        onRoundTwoNumbers(date.getSeconds())
    );
};
