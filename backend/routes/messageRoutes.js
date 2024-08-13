import express from 'express';
import protectRoute from '../middlewares/protectRoute.js';
import { sendMessage, getMessages } from '../Controllers/messageController.js';

const router = express.Router()

router.get("/:otherUserId", protectRoute, getMessages)
router.get("/:otherUserId", protectRoute, getMessages)
router.post("/", protectRoute, sendMessage)

export default router;