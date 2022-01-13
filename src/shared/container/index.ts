import { container } from "tsyringe";
import { CategoryRepository } from "../../modules/category/infra/typeorm/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/category/repositories/ICategoryRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
)