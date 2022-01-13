import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateCategoryUseCase } from "./updateCategoryUseCase";

class UpdateCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { name } = request.body;

        const updateCategoryUseCase = container.resolve(UpdateCategoryUseCase);

        const category = await updateCategoryUseCase.execute({ id, name })

        return response.status(201).json(category);
    }
}
export { UpdateCategoryController }