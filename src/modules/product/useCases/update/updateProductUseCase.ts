import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICategoryRepository } from "../../../category/repositories/ICategoryRepository";
import { ICreateProductDTO } from "../../dtos/ICreateProductDTO";
import { Product } from "../../infra/typeorm/entities/Product";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
class UpdateProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository) { }

    async execute({
        id,
        SKU,
        name,
        price,
        description,
        the_amount,
        category_id,
    }: ICreateProductDTO): Promise<Product> {
        const product = await this.productRepository.findById(id);

        if (!product) throw new AppError("Product does not exists!")

        if (name !== product?.name) {
            const categoryAlredyExists = await this.productRepository.findByName(name);

            if (categoryAlredyExists) {
                throw new AppError("Product Already exists!")
            }
        }

        const category = await this.categoryRepository.findById(category_id);

        if (!category) {
            throw new AppError("Category does not exists!")
        }

        product.SKU = SKU;
        product.name = name;
        product.price = price;
        product.description = description;
        product.the_amount = the_amount;
        product.category_id = category_id;

        const updateProduct = await this.productRepository.Update({
            ...product,
            category
        });

        return updateProduct;
    }
}
export { UpdateProductUseCase }