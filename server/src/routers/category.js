import express from 'express'
import * as cotrollers from '../controllers/category'


const router = express.Router()

router.get('/all', cotrollers.getCategories)

export default router