import express from 'express';

import helloWorldRouter from './hello-world.route';
import authRouter from './auth.route';
import mongodbTestRouter from './mongodb-test.route';

const router = express.Router();

router.use('/hello-world', helloWorldRouter);
router.use('/auth', authRouter);
router.use('/test', mongodbTestRouter);

export default router;
