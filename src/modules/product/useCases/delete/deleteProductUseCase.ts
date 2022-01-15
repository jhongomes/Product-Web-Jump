import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/provider/StorageProvider/IStorageProvider";
import { AppError } from "../../../../shared/errors/AppError";
import { IProductRepository } from "../../repositories/IProductRepository";

@injectable()
class DeleteProductUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider) { }

    async execute(id: string): Promise<void> {
        const product = await this.productRepository.findById(id);

        if (product.image) {
            await this.storageProvider.delete(product.image, "image")
        }

        if (!product) {
            throw new AppError("Product does not exist!")
        }

        await this.productRepository.Delete(product)
    }
}
export { DeleteProductUseCase }