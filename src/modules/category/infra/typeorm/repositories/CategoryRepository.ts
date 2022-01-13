import { BaseRepository } from "../../../../../shared/infra/repositories/BaseRepository";
import { ICategoryRepository } from "../../../repositories/ICategoryRepository";
import { Category } from "../entities/Category";

class CategoryRepository extends BaseRepository<Category> implements ICategoryRepository {
    constructor() {
        super(Category);
    }

    async all(): Promise<Category[]> {
        const all = await this.repository.find();
        return all;
    }

    async findById(id: string): Promise<Category> {
        const category = await this.repository.findOne({ id });
        return category;
    }

    async findByName(name: string): Promise<Category> {
        const category = await this.repository.findOne({ name })
        return category;
    }
}
export { CategoryRepository }