import { inject, injectable } from "tsyringe";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository } from "../../repositories/ICategoryRepository";

@injectable()
class GetCategoryUseCase {
    constructor(
        @inject("CategoryRepository")
        private categoryRepository: ICategoryRepository) { }

    async execute(): Promise<Category[]> {
        const all = await this.categoryRepository.all();

        return all;
    }
}
export { GetCategoryUseCase }