export interface PriceListItem {
    [key: string]: string | number;

    name: string;
    wholesalePrice: number;
    recommendedRetailPrice: number;
}
