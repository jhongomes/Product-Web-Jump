import { ICreateCategoryDTO } from "../../dtos/ICreateCategoryDTO";
import { Category } from "../../infra/typeorm/entities/Category";
import { ICategoryRepository } from "../ICategoryRepository";

class CategoryRepositoryInMemory implements ICategoryRepository {
    category: Category[] = [];

    async all(): Promise<Category[]> {
        const all = this.category;
        return all;
    }

    async findById(id: string): Promise<Category> {
        const category = this.category.find((category) => category.id === id)
        return category
    }

    async findByName(name: string): Promise<Category> {
        const category = this.category.find((category) => category.name === name)
        return category
    }

    async Create({id, code ,name}: ICreateCategoryDTO): Promise<Category> {
        const category = new Category();

        Object.assign(category, {
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            code,
            name,
        });
        this.category.push(category);

        return category;
    }

    async Update(category: Category): Promise<Category> {
        this.category.push(category);
        return category;
    }

    async Delete(category: Category): Promise<void> {
        const findIndex = this.category.findIndex(category => category === category)

        this.category.splice(findIndex, 1)
    }
}
export { CategoryRepositoryInMemory }