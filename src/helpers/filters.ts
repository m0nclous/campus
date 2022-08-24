export const currency = (value: number | string, currency = 'RUB'): string => {
    value = Number(value);
    if (isNaN(value)) throw new TypeError('value is NaN');

    return value.toLocaleString('ru-RU', { style: 'currency', currency, maximumFractionDigits: 0 });
};
