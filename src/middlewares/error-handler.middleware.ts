import { ErrorRequestHandler } from 'express';
import { StatusCodes, ReasonPhrases } from 'http-status-codes';
import { ValidationError } from 'joi';

export class CustomError extends Error {
  constructor(message?: string) {
    super(message);
    Object.setPrototypeOf(this, CustomError.prototype);
  }
}

export const commonErrorHandler: ErrorRequestHandler = (error, _, response, __) => {
  if (error instanceof ValidationError) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      code: StatusCodes.BAD_REQUEST,
      message: ReasonPhrases.BAD_REQUEST,
      details: error.details
    });
  }

  if (error instanceof CustomError) {
    return response.status(StatusCodes.BAD_REQUEST).json({
      code: StatusCodes.BAD_REQUEST,
      message: StatusCodes.BAD_REQUEST,
      details: {
        message: error.message ?? 'Something went wrong'
      }
    });
  }

  response.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR,
    details: {
      message: error.message ?? 'Something went wrong'
    }
  });
};
