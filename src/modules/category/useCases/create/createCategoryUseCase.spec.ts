import { AppError } from "../../../../shared/errors/AppError";
import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "./createCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;

describe("Create category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory)
    });

    it("should be able to create a new category", async () => {
        const category = await createCategoryUseCase.execute({
            code: 22,
            name: "category name"
        })
        expect(category).toHaveProperty("id")

    });

    it("should not be able to create a category with exists name", async () => {
        expect(async () => {
            const category = await createCategoryUseCase.execute({
                code: 22,
                name: "category name"
            });
            await createCategoryUseCase.execute(category);
            await createCategoryUseCase.execute(category);

        }).rejects.toBeInstanceOf(AppError)
    });
})