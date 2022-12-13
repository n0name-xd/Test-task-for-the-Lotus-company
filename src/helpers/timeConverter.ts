export const timeConverter = (digit: number | string): string => {
    if (String(digit).length < 2) {
        return `0${digit}`;
    };

    return String(digit);
};