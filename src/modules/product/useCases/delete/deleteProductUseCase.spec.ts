import { ProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory";
import { CreateProductUseCase } from "../create/createProductUseCase";
import { DeleteProductUseCase } from "./deleteProductUseCase";

let createProductUseCase: CreateProductUseCase;
let productRepositoryInMemory: ProductRepositoryInMemory;
let deleteProductUseCase: DeleteProductUseCase;

describe("Delete product", () => {
    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        createProductUseCase = new CreateProductUseCase(productRepositoryInMemory);
        deleteProductUseCase = new DeleteProductUseCase(productRepositoryInMemory);
    });

    it("Should be able to exclude one product", async () => {
        const product = await createProductUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Addidas",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        })
        const findId = await deleteProductUseCase.execute(product.id);
        expect(findId).toBe(undefined);
    });
})