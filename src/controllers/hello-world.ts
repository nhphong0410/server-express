import { RequestHandler } from 'express';

import { helloWorldService } from '../services';

export const helloWorld: RequestHandler = async (request, response) => {
  const result = await helloWorldService.hello();

  response.send(result);
};
