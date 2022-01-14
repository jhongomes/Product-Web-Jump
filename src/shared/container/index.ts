import { container } from "tsyringe";
import "../container/provider"
import { CategoryRepository } from "../../modules/category/infra/typeorm/repositories/CategoryRepository";
import { ICategoryRepository } from "../../modules/category/repositories/ICategoryRepository";
import { IProductRepository } from "../../modules/product/repositories/IProductRepository"
import { ProductRepository } from "../../modules/product/infra/typeorm/repositories/ProductRepository";

container.registerSingleton<ICategoryRepository>(
    "CategoryRepository",
    CategoryRepository
);

container.registerSingleton<IProductRepository>(
    "ProductRepository",
    ProductRepository);