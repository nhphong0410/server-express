import express from 'express';
import { configDotenv } from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import router from '../src/routes';
import { DEFAULT_PORT } from '../src/utils/constants';
import { errorHandler } from '../src/middlewares';

configDotenv();

const app = express();
const port = process.env.PORT || DEFAULT_PORT;
const corsOptions = {
  origin: ['*']
};

app.use(cors(corsOptions));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.get('/', (request, response) => {
  response.send('Server is running!');
});

app.use(errorHandler.commonErrorHandler);

app.listen(port);

module.exports = app;
