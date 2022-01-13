import { IBaseRepository } from "../../../shared/infra/repositories/IBaseRepository";
import { Product } from "../infra/typeorm/entities/Product";

export interface IProductRepository extends IBaseRepository<Product> {
    all(): Promise<Product[]>;
    findById(id: string): Promise<Product>;
    findByName(name: string): Promise<Product>;
}