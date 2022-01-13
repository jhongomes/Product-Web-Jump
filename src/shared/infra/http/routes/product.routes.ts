import Router from "express";
import { CreateProductController } from "../../../../modules/product/useCases/create/createProductController";
import { DeleteProductController } from "../../../../modules/product/useCases/delete/deleteProductController";
import { GetProductController } from "../../../../modules/product/useCases/get/getProductController";
import { UpdateProductController } from "../../../../modules/product/useCases/update/updateProductController";

const productRoutes = Router();
const createProductController = new CreateProductController();
const getProductController = new GetProductController();
const updateProductController = new UpdateProductController();
const deleteProductController = new DeleteProductController();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", getProductController.handle);
productRoutes.put("/:id", updateProductController.handle);
productRoutes.delete("/:id", deleteProductController.handle);

export { productRoutes }