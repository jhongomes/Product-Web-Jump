import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./createProductUseCase";

class CreateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { SKU, name, price, description, the_amount, category_id } = request.body;

        const createProductUseCase = container.resolve(CreateProductUseCase);
        const product = await createProductUseCase.execute({
            SKU,
            name,
            price,
            description,
            the_amount,
            category_id,
        });

        return response.json(product);
    }
}
export { CreateProductController }