import express from 'express';

import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController.js';

const router = express.Router();

router.post('/', authUser);
router.post('/auth', registerUser);
router.post('/logout', logoutUser);
router.route('/me').get(getUserProfile).put(updateUserProfile);

export default router;
