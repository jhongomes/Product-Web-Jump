import { CategoryRepositoryInMemory } from "../../repositories/in-memory/CategoryRepositoryInMemory";
import { CreateCategoryUseCase } from "../create/createCategoryUseCase";
import { GetCategoryUseCase } from "./getCategoryUseCase";

let createCategoryUseCase: CreateCategoryUseCase;
let categoryRepositoryInMemory: CategoryRepositoryInMemory;
let getCategoryUseCase: GetCategoryUseCase;

describe("List category", () => {
    beforeEach(() => {
        categoryRepositoryInMemory = new CategoryRepositoryInMemory();
        createCategoryUseCase = new CreateCategoryUseCase(categoryRepositoryInMemory);
        getCategoryUseCase = new GetCategoryUseCase(categoryRepositoryInMemory)
    });

    it("Should be able to list all events", async () => {
        await createCategoryUseCase.execute({
            code: 22,
            name: "category name"
        })
        const all = await getCategoryUseCase.execute();

        expect(all[0]).toHaveProperty("id");
        expect(all.length).toEqual(1);
    });
})