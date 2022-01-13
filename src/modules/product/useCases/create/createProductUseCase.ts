import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
class CreateProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository) { }

    async execute({
        SKU,
        name,
        price,
        description,
        the_amount,
        category_id,
    }: ICreateProductDTO): Promise<Product> {
        const product = new Product();

        const productExists = await this.productRepository.findByName(name);

        if (productExists) {
            throw new AppError("Product already exists!");
        }

        Object.assign(product, {
            SKU,
            name,
            price,
            description,
            the_amount,
            category_id,
        });

        const createProduct = await this.productRepository.Create(product);

        return createProduct;
    }
}
export { CreateProductUseCase } 
