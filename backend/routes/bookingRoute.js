import express from 'express'
import authUser from '../middlewares/authUser.js'
import { getCheckoutSession } from '../controllers/bookingController.js'

const router = express.Router()

router.post('/checkout-session/:doctorId', authUser, getCheckoutSession)

export default router;