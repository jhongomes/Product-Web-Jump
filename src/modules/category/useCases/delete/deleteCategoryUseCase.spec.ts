import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../create/createCategoryUseCase";
import { DeleteCategoryUseCase } from "./deleteCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let deleteCategoryUseCase: DeleteCategoryUseCase;

describe("Delete category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
        deleteCategoryUseCase = new DeleteCategoryUseCase(categoryRepositoryInMemory)

    });

    it("Should be able to exclude one category", async () => {
        const category = await createCategoryUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            code: 22,
            name: "category name"
        });
        const findId = await deleteCategoryUseCase.execute(category.id);
        expect(findId).toBe(undefined)
    });

    
})