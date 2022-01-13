import { Request, Response } from "express";
import { container } from "tsyringe";
import { GetProductUseCase } from "./getProductUseCase";

class GetProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const getProductUseCase = container.resolve(GetProductUseCase);
        const product = await getProductUseCase.execute()

        return response.json(product);
    }
}
export { GetProductController }