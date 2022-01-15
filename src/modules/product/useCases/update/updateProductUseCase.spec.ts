import { CategoryRepositoryInMemory } from "../../../category/repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../../../category/useCases/create/createCategoryUseCase";
import { ProductRepositoryInMemory } from "../../repositories/in-memory/ProductRepositoryInMemory";
import { CreateProductUseCase } from "../create/createProductUseCase";
import { UpdateProductUseCase } from "./updateProductUseCase";

let createProductUseCase: CreateProductUseCase;
let productRepositoryInMemory: ProductRepositoryInMemory;
let updateProductUseCase: UpdateProductUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let createCategoryUseCase: CreateCategoryUseCase;

describe("Update product", () => {
    beforeEach(() => {
        productRepositoryInMemory = new ProductRepositoryInMemory();
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
        createProductUseCase = new CreateProductUseCase(productRepositoryInMemory);
        updateProductUseCase = new UpdateProductUseCase(productRepositoryInMemory, categoryRepositoryInMemory);
    });

    it("Should be able to update one product", async () => {

        await createCategoryUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            code: 22,
            name: "category name"
        });
        const product = await createProductUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Addidas",
            price: 222,
            description: "tenis de couro preto",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac130003"
        })
        await productRepositoryInMemory.findById(product.id);

        const updateProduct = await updateProductUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            SKU: "SKU PRODUCT",
            name: "Addidas",
            price: 222,
            description: "tenis de couro preto cano longo",
            the_amount: 100,
            category_id: "29d2b86a-0679-11ec-9a03-0242ac130003"
        })
        expect(updateProduct.description).toBe("tenis de couro preto cano longo");
    });
})