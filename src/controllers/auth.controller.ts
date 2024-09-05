import { RequestHandler } from 'express';

import { authService } from '../services';

export const signup: RequestHandler = async (request, response, next) => {
  try {
    const result = await authService.signup(request);

    response.send(result);
  } catch (error) {
    next(error);
  }
};
