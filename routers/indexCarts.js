import { Router } from 'express';
import CartsController from '../controllers/carts.js';

const routerCarts = Router();

routerCarts
    .post('/carts', CartsController.createCarts)
    .get('/carts', CartsController.getCarts)
    .get('/carts/:cid', CartsController.getCartById)
    .post('/carts/:cid', CartsController.addProductToCart)
    .put('/carts/:cid', CartsController.removeProductFromCart)
    .delete('/carts/:cid', CartsController.deleteCart)



export default routerCarts;