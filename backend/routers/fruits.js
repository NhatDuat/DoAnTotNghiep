import express from 'express';
import {
  createFruit,
  deleteFruit,
  getAllFruit,
  getFeaturedFruit,
  getFruitBySearch,
  getFruitCount,
  getSingleFruit,
  updateFruit,
} from '../controllers/fruitController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

// create new fruit
router.post('/',verifyAdmin, createFruit);
// update  fruit
router.put('/:id',verifyAdmin, updateFruit);
// delete fruit
router.delete('/:id',verifyAdmin, deleteFruit);
// get single fruit
router.get('/:id', getSingleFruit);
// getAll fruit
router.get('/', getAllFruit);

// get fruit by search
router.get('/search/getFruitBySearch', getFruitBySearch);
router.get('/search/getFeaturedFruits',getFeaturedFruit);
router.get('/search/getFruitCount',getFruitCount);



export default router;
