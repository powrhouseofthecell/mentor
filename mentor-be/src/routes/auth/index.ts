import express from 'express';
import auth_controller from '../../controllers/auth';

const router = express.Router();

router.route('/signup').post(auth_controller.signup);

export default router;
