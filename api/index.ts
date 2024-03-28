import 'module-alias/register';
import express from 'express';
import { configDotenv } from 'dotenv';

import router from '@routes';
import { DEFAULT_PORT } from '@utils/constants';

configDotenv();

const app = express();
const port = process.env.PORT || DEFAULT_PORT;

app.use(express.static('public'));
app.use('/api', router);
app.get('/', (request, response) => {
  response.send('Server is running!');
});

app.listen(port);

module.exports = app;
