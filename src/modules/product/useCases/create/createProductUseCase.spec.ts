import { AppError } from "../../../../shared/errors/AppError";
import { ProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory";
import { CreateProductUseCase } from "./createProductUseCase";

let createProductUseCase: CreateProductUseCase;
let productRepositoryInMemory: ProductRepositoryInMemory;

describe("Create product", () => {
    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productRepositoryInMemory);
    });

    it("should be able to create a new product", async () => {
        const product = await createProductUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Addidas",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        })
        expect(product).toHaveProperty("id")
    });

    it("should not be able to create a product with exists name", async () => {
        expect(async () => {
            const product = await createProductUseCase.execute({
                id: '29d2b86a-0679-11ec-9a03-0242ac130003',
                SKU: "SKU PRODUCT",
                name: "Addidas",
                price: 222,
                description: "tenis de couro preto",
                the_amount: 100,
                category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
            });
            await createProductUseCase.execute(product);
            await createProductUseCase.execute(product);

        }).rejects.toBeInstanceOf(AppError)
    });
})