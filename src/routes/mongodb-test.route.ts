import express from 'express';

import { mongodbTestController } from '../controllers';

const router = express.Router({ mergeParams: true });

router.get('/mongodb', mongodbTestController.mongodbTest);

export default router;
