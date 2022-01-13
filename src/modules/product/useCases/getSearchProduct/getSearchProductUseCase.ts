import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

interface IRequest {
    id?: string;
    name?: string;
    category_id?: string;
}

@injectable()
class GetSearchProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository) { }

    async execute({
        id,
        name,
        category_id,
    }: IRequest): Promise<Product[]> {
        const products = await this.productRepository.searchForProduct(
            id,
            name,
            category_id,
        );

        return products;
    }
}
export { GetSearchProductUseCase }