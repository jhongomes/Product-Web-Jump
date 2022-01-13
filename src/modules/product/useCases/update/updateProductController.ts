import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateProductUseCase } from "./updateProductUseCase";

class UpdateProductController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const { SKU, name, price, description, the_amount, category_id } = request.body;

        const updateProductUseCase = container.resolve(UpdateProductUseCase);

        const product = await updateProductUseCase.execute({
            id,
            SKU,
            name,
            price,
            description,
            the_amount,
            category_id,
        })

        return response.status(201).json(product);
    }
}
export { UpdateProductController }