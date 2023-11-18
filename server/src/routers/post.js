// liên kết Post data

import express from 'express'
import * as postController from '../controllers/post'


const router = express.Router()

router.get('/all', postController.getPosts)
// router.get('/newpost', postController.getNewPosts)


export default router