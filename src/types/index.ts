export interface PriceListItem {
    [key: string]: string | number;

    name: string;
    wholesalePrice: number;
    recommendedRetailPrice: number;
}

export interface Sale {
    id: number;
    name: string;
    label: string;
    content: string;
}
