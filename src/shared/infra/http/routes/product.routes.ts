import Router from "express";
import multer from "multer";
import uploadConfig from "../../../../config/upload";
import { CreateProductController } from "../../../../modules/product/useCases/create/createProductController";
import { DeleteProductController } from "../../../../modules/product/useCases/delete/deleteProductController";
import { GetProductController } from "../../../../modules/product/useCases/get/getProductController";
import { GetSearchProductController } from "../../../../modules/product/useCases/getSearchProduct/getSearchProductController";
import { UpdateProductController } from "../../../../modules/product/useCases/update/updateProductController";
import { UploadProductImageController } from "../../../../modules/product/useCases/uploadProductImage/uploadProductImageController";

const productRoutes = Router();
const uploadImage = multer(uploadConfig);

const createProductController = new CreateProductController();
const getProductController = new GetProductController();
const getSearchProductController = new GetSearchProductController();
const updateProductController = new UpdateProductController();
const uploadProductImageController = new UploadProductImageController();
const deleteProductController = new DeleteProductController();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", getProductController.handle);
productRoutes.get("/search", getSearchProductController.handle);
productRoutes.put("/:id", updateProductController.handle);
productRoutes.patch("/image/:id", uploadImage.single("image"), uploadProductImageController.handle);
productRoutes.delete("/:id", deleteProductController.handle);

export { productRoutes }