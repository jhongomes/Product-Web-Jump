import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetCategoryUseCase } from "./getCategoryUseCase";

class GetCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getCategoryUseCase = container.resolve(GetCategoryUseCase);
        const categories = await getCategoryUseCase.execute();

        return response.status(201).json(categories);
    }
}
export { GetCategoryController }