import express from 'express';
// import controller
import { getPosts, createPost, updatePost } from '../controllers/posts.js';

/** start */
const router = express.Router();


/** router */
router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost);



/** export */
export default router;