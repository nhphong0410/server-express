import express from 'express';

import { helloWorldController } from '../controllers';

const router = express.Router({ mergeParams: true });

router.get('/', helloWorldController.helloWorld);

export default router;
