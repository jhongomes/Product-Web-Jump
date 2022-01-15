import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductRepository } from "../IProductRepository";

class ProductRepositoryInMemory implements IProductRepository {
    product: Product[] = [];

    async all(): Promise<Product[]> {
        const all = this.product;
        return all;
    }

    async findById(id: string): Promise<Product> {
        const product = this.product.find((product) => product.id === id)
        return product
    }

    async findByName(name: string): Promise<Product> {
        const product = this.product.find((product) => product.name === name)
        return product
    }

    async Create({
        id,
        SKU,
        name,
        price,
        description,
        the_amount,
        category_id,
    }: ICreateProductDTO): Promise<Product> {
        const product = new Product();

        Object.assign(product, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU,
            name,
            price,
            description,
            the_amount,
            category_id,
        });
        this.product.push(product);

        return product;
    }

    async searchForProduct(
        id?: string,
        name?: string,
        category_id?: string): Promise<Product[]> {
        let searchProducts = this.product;

        if (!id && !name && !category_id) return searchProducts;

        searchProducts = searchProducts.filter((product) => {
            if (product.id === id) return true;
            if (product.name === name) return true;
            if (product.category_id === category_id) return true;

            return false;
        })

        return searchProducts;
    }

    async Update(product: Product): Promise<Product> {
        this.product.push(product);
        return product;
    }

    async Delete(product: Product): Promise<void> {
        const findIndex = this.product.findIndex(product => product === product)

        this.product.splice(findIndex, 1)
    }
}
export { ProductRepositoryInMemory }