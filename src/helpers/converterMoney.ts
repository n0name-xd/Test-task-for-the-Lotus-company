export const converterMoney = (digit: number): string => {
    const thousands = String(digit / 1000).slice(String(digit / 1000).length - 7);
    const millions = Math.floor(digit / 1000000);

    if (digit > 1_000_000) {
        return `${millions},${thousands},000 руб.`;
    };

    return `${thousands},000 руб.`;
};