import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class DeleteCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository) { }

    async execute(id: string): Promise<void> {
        const category = await this.categoryRepository.findById(id);

        if (!category) throw new AppError("Category does not exists!")

        await this.categoryRepository.Delete(category);
    }
}
export { DeleteCategoryUseCase }