import { ErrorRequestHandler } from "express";
import { StatusCodes, ReasonPhrases } from "http-status-codes";

export const commonErrorHandler: ErrorRequestHandler = (err, _, res, __) => {
  console.error(err.stack);
  res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    errorCode: StatusCodes.INTERNAL_SERVER_ERROR,
    message: ReasonPhrases.INTERNAL_SERVER_ERROR
  });
};
