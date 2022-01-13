import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Category } from "../infra/typeorm/entities/Category";

export interface ICategoryRepository extends IBaseRepository<Category> {
    all(): Promise<Category[]>;
    findById(id: string): Promise<Category>;
    findByName(name: string): Promise<Category>;
}