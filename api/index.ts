import express from 'express';
import dotenv from 'dotenv';

import router from '../src/routes';
import { DEFAULT_PORT } from '../src/utils/constants';

dotenv.config();

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

app.use(express.static('public'));
app.use('/api', router);
app.get('/', (request, response) => {
  response.send('Server is running!');
});

app.listen(port);

module.exports = app;
