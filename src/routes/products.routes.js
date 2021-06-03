import { Router } from 'express'

import {
  getProducts,
  getCountProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById
} from '../controllers/products.controller'

const router = Router()

router.get('/products', getProducts)
router.get('/products/count', getCountProducts)
router.get('/products/:id', getProductById)
router.post('/products', createProduct)
router.put('/products/:id', updateProductById)
router.delete('/products/:id', deleteProductById)

export default router
