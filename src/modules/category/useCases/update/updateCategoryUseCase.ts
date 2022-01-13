import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class UpdateCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository) { }

    async execute({
        id,
        name
    }: ICreateCategoryDTO): Promise<Category> {
        const category = await this.categoryRepository.findById(id);

        if (!category) throw new AppError("Category does not exists!")

        if (name !== category?.name) {
            const categoryAlredyExists = await this.categoryRepository.findByName(name);

            if (categoryAlredyExists) {
                throw new AppError("Category Already exists!")
            }
        }

        category.name = name;

        const updateCategory = await this.categoryRepository.Update(category);

        return updateCategory;

    }
}
export { UpdateCategoryUseCase }