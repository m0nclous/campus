export const currencyRUB = (value: number | string): string => {
    value = Number(value);
    if (isNaN(value)) throw new TypeError('value is NaN');

    return `${(+value).toLocaleString()} ₽`;
};
