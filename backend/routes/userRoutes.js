import express from 'express';

import {
  loginUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/login', loginUser);
router.post('/register', registerUser);
router.post('/logout', logoutUser);
router.route('/me').get(getUserProfile).put(updateUserProfile);

export default router;
