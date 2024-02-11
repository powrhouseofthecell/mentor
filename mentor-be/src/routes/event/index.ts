import express from 'express';
const router = express.Router();

import events_controller from '../../controllers/events';
import auth_controller from '../../controllers/auth';

// router.post('/create', auth_controller.protect, events_controller.create);
// router.route('/create').post(auth_controller.protect, events_controller.create);

router.get('/create', auth_controller.protect, events_controller.create);
// 127.0.0.1:8000/api/v1/events/create

export default router;
