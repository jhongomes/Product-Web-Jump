import { Request, Response } from "express";
import { container } from "tsyringe";
import { UploadProductImageUseCase } from "./uploadProductImageUseCase";

class UploadProductImageController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const image_file = request.file.filename;

        const uploadProductImageUseCase = container.resolve(UploadProductImageUseCase);

        await uploadProductImageUseCase.execute({ id, image_file });

        return response.status(204).send();
    }
}
export { UploadProductImageController };
