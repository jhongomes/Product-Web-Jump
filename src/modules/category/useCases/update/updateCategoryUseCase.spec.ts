import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../create/createCategoryUseCase";
import { UpdateCategoryUseCase } from "./updateCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let updateCategoryUseCase: UpdateCategoryUseCase;

describe("Update category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
        updateCategoryUseCase = new UpdateCategoryUseCase(categoryRepositoryInMemory)

    });

    it("Should be able to update one category", async () => {
        const category = await createCategoryUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            code: 22,
            name: "category name"
        });
        await categoryRepositoryInMemory.findById(category.id);

        const updateCategory = await updateCategoryUseCase.execute({
            id: '29d2b86a-0679-11ec-9a03-0242ac130003',
            code: 22,
            name: "SAPATOS"
        })
        expect(updateCategory.name).toBe("SAPATOS")
    });
})