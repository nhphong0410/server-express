import { Request } from "express";
import { signupBodySchema } from "../utils/schema";

export const signup = async (request: Request) => {
  const { body } = request;

  const result = await signupBodySchema.validateAsync(body)
  return result;
};
