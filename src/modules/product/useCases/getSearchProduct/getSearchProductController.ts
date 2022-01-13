import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetSearchProductUseCase } from "./getSearchProductUseCase";

class GetSearchProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, category_id } = request.query;
        const getSearchProductUseCase = container.resolve(GetSearchProductUseCase);

        const products = await getSearchProductUseCase.execute({
            id: id as string,
            name: name as string,
            category_id: category_id as string,
        });

        return response.json(products);
    }
}
export { GetSearchProductController };