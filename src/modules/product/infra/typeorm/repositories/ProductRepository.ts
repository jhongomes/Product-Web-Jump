import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepository";
import { IProductRepository } from "../../../repositories/IProductRepository";
import { Product } from "../entities/Product";

class ProductRepository extends BaseRepository<Product> implements IProductRepository {
    constructor() {
        super(Product);
    }

    async all(): Promise<Product[]> {
        const products = await this.repository.find({
            relations: ["category"]
        });
        return products;
    }

    async findById(id: string): Promise<Product> {
        const product = await this.repository.findOne({ id }, {
            relations: ["category"]
        });
        return product;
    }

    async findByName(name: string): Promise<Product> {
        const product = await this.repository.findOne({ name }, {
            relations: ["category"]
        });
        return product;
    }

    async searchForProduct(id?: string, name?: string, category_id?: string): Promise<Product[]> {
        const productsQuery = await this.repository
            .createQueryBuilder("p")
            .select("p")

        if (id) {
            productsQuery.andWhere("id = :id", { id })
        }

        if (name) {
            productsQuery.andWhere("name = :name", { name })
        }

        if (category_id) {
            productsQuery.andWhere("category_id = :category_id", { category_id })
        }

        const products = await productsQuery.getMany();

        return products;
    }
}
export { ProductRepository }