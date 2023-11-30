import express from 'express'
import verifyToken from '../middlewares/verifyToken'
import * as useController from '../controllers/User'

const router = express.Router()

router.use(verifyToken)
router.get('/getcurrent', useController.getCurrent)

export default router