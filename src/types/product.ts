export interface IProdcut {
    id: number;
    title: string;
    image: string;
    price: string;
    quantity?: number;
}

export interface IProdcutProp {
    key: number;
    product: IProdcut;
}
