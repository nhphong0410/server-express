import express from 'express';

import { authController } from '../controllers';

const router = express.Router({ mergeParams: true });

router.post('/sign-up', authController.signup);

export default router;
