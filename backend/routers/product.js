import express from 'express';
import { ProductController } from '../controllers/productControllers.js';

const router = express.Router();


router.post("/addproduct", ProductController.addProducts);

router.get("/allproduct", ProductController.getAll);

router.get("/all_product_admin", ProductController.getAllAdmin);

router.get("/:id", ProductController.GetAnProducts);

router.put("/:id", ProductController.UpdateProducts);

router.delete("/:id", ProductController.deleteProducts);

module.exports = router;
