import { RequestHandler } from 'express';

import { mongodbTestService } from '../services';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

export const mongodbTest: RequestHandler = async (request, response, next) => {
  try {
    const result = await mongodbTestService.getSampleText();

    if (!result) {
      return response
        .status(StatusCodes.NOT_FOUND)
        .send(ReasonPhrases.NOT_FOUND);
    }

    return response.send(result);
  } catch (error) {
    next(error);
  }
};
