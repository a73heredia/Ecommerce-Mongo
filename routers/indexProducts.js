import { Router  } from "express";
import ProductController from "../controllers/products.js";


const routerProducts = Router();

routerProducts
    .get('/products', ProductController.get)
    .get('/products/:id', ProductController.getById)
    .post('/products', ProductController.create)
    .put('/products/:id', ProductController.updateById)
    .delete('/products/:id', ProductController.deleteById)

export default routerProducts;