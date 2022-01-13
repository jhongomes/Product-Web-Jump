import { inject, injectable } from "tsyringe";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
class GetProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository) { }

    async execute(): Promise<Product[]> {
        const products = await this.productRepository.all();
        return products;
    }
}
export { GetProductUseCase }