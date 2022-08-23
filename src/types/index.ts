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

export interface Image {
    id: number;
    src: string;
    alt: string;
}

export interface Video {
    id: number;
    name: string;
    src: string;
    poster: string;
}

export interface PDF {
    id: number;
    src: string;
}

export interface CommercialOffer {
    id: number;
    name: string;
    content: string;
    PDF: PDF;
}
