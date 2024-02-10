import express from 'express';
const router = express.Router();

import auth_controller from '../../controllers/auth';

router.route('/signup').post(auth_controller.signup);
router.route('/login').post(auth_controller.login);
router.route('/logout').post(auth_controller.logout);

export default router;
