import { Request } from "express";
import { SignUpSchema } from "../utils/schemas";

export const signup = async (request: Request) => {
  const { body } = request;

  const result = await SignUpSchema.requestBody.validateAsync(body);
  return result;
};
