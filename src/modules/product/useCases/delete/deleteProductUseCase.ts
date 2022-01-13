import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
class DeleteProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository) { }

    async execute(id: string): Promise<void> {
        const product = await this.productRepository.findById(id);

        if (!product) {
            throw new AppError("Product does not exist!")
        }

        await this.productRepository.Delete(product)
    }
}
export { DeleteProductUseCase }