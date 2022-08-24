export const currencyRUB = (value: number | string): string => {
    value = Number(value);
    if (isNaN(value)) throw new TypeError('value is NaN');

    return `${value.toLocaleString()} ₽`;
};

export const id = (value: number | string): string => {
    value = Number(value);
    if (isNaN(value)) throw new TypeError('value is NaN');

    return value < 1000 ? `00${value}`.slice(-3) : `${value}`;
};
