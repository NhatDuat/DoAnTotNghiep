import express from 'express';
import CartController from '../controllers/cartController.js';

const router = express.Router();

router.post('/addToCart', CartController.addToCart);

router.get('/get-by-id/:id', CartController.getbyUserId);

router.delete('/delete-cart/:id', CartController.DeleteFromCart);

export default router;
