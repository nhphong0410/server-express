import express from 'express';

import helloWorldRouter from './hello-world';

const router = express.Router();

router.use('/', helloWorldRouter)

export default router;
