export const currency = (value: number | string, currency = 'RUB'): string => {
    value = Number(value);
    if (isNaN(value)) throw new TypeError('value is NaN');

    return value.toLocaleString('ru-RU', { style: 'currency', currency, maximumFractionDigits: 0 });
};

export const number = (value: number | string, digits = 3): string => {
    value = Number(value);
    if (isNaN(value)) throw new TypeError('value is NaN');

    return value.toString().split('').length < digits ? `${Array(digits).fill(0).join('')}${value}`.slice(-digits) : `${value}`;
};
