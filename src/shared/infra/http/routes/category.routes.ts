import Router from "express";
import { CreateCategoryController } from "../../../../modules/category/useCases/create/createCategoryController";
import { DeleteCategoryController } from "../../../../modules/category/useCases/delete/deleteCategoryController";
import { GetCategoryController } from "../../../../modules/category/useCases/get/getCategoryController";
import { UpdateCategoryController } from "../../../../modules/category/useCases/update/updateCategoryController";

const categoryRoutes = Router();
const getCategoryController = new GetCategoryController();
const createCategoryController = new CreateCategoryController();
const updateCategoryController = new UpdateCategoryController();
const deleteCategoryController = new DeleteCategoryController();

categoryRoutes.get("/", getCategoryController.handle);
categoryRoutes.post("/", createCategoryController.handle);
categoryRoutes.put("/:id", updateCategoryController.handle);
categoryRoutes.delete("/:id", deleteCategoryController.handle);

export { categoryRoutes }