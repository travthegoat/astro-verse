import express from 'express';
import { createProduct, deleteProduct, getProduct, getProducts, updateProduct } from '../controllers/products.controller.js';

const productRouter = express.Router();

// GET //
productRouter.get('/', getProducts);
productRouter.get('/:id', getProduct);

// POST //
productRouter.post('/', createProduct);

// PUT //
productRouter.put('/:id', updateProduct);

// DELETE //
productRouter.delete('/:id', deleteProduct);

export default productRouter;