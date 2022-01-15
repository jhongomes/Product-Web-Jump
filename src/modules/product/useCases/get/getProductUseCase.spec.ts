import { ProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory";
import { CreateProductUseCase } from "../create/createProductUseCase";
import { GetProductUseCase } from "./getProductUseCase";

let createProductUseCase: CreateProductUseCase;
let productRepositoryInMemory: ProductRepositoryInMemory;
let getProductUseCase: GetProductUseCase;

describe("List products", () => {
    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productRepositoryInMemory);
        getProductUseCase = new GetProductUseCase(productRepositoryInMemory);
    });

    it("Should be able to list all product", async () => {
        await createProductUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Addidas",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        })
        const all = await getProductUseCase.execute();

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });
})