import express from 'express';

import { helloWorld } from '../controllers';

const router = express.Router({ mergeParams: true });

router.get('/', helloWorld);

export default router;
