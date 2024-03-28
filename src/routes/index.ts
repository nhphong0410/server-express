import express from 'express';

import helloWorldRouter from './hello-world.route';
import authRouter from './auth.route';

const router = express.Router();

router.use('/', helloWorldRouter);
router.use('/auth', authRouter);

export default router;
