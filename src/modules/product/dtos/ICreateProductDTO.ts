export interface ICreateProductDTO {
    id?: string;
    SKU: string;
    name: string;
    price: number;
    image?: string;
    description: string;
    the_amount: number;
    category_id: string;
}