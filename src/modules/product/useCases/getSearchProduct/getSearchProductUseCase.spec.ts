import { ProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory";
import { CreateProductUseCase } from "../create/createProductUseCase";
import { GetSearchProductUseCase } from "./getSearchProductUseCase";

let productRepositoryInMemory: ProductRepositoryInMemory;
let getSearchProductUseCase: GetSearchProductUseCase;

describe("Search products", () => {
    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        getSearchProductUseCase = new GetSearchProductUseCase(productRepositoryInMemory);
    });

    it("should be able to list all search product by id", async () => {
        const product = await productRepositoryInMemory.Create({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Addidas",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        });

        const products = await getSearchProductUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
        })

        expect(products).toEqual([product]);
    });

    it("should be able to list all search product by name", async () => {
        const product = await productRepositoryInMemory.Create({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Nike",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        });

        const products = await getSearchProductUseCase.execute({
            name: "Nike"
        })

        expect(products).toEqual([product]);
    });

    it("should be able to list all search product by category", async () => {
        const product = await productRepositoryInMemory.Create({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "VANS",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        });

        const products = await getSearchProductUseCase.execute({
            category_id: "29d2b86a-0679-11ec-9a03-0242ac13000444"
        })

        expect(products).toEqual([product]);
    });
})