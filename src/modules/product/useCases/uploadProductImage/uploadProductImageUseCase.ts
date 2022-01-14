import { inject, injectable } from "tsyringe";
import { IStorageProvider } from "../../../../shared/container/provider/StorageProvider/IStorageProvider";
import { IProductRepository } from "../../repositories/IProductRepository";

interface IRequest {
    id: string;
    image_file: string;
}

@injectable()
class UploadProductImageUseCase {
    constructor(
        @inject("ProductRepository")
        private productRepository: IProductRepository,
        @inject("StorageProvider")
        private storageProvider: IStorageProvider) { }

    async execute({ id, image_file }: IRequest): Promise<void> {
        const product = await this.productRepository.findById(id);

        if (product.image) {
            await this.storageProvider.delete(product.image, "image");
        }
        await this.storageProvider.save(image_file, "image");

        product.image = image_file;

        await this.productRepository.Create(product)
    }
}
export { UploadProductImageUseCase }