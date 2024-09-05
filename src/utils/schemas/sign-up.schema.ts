import Joi from 'joi';

export const requestBody = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(24).required(),
  repeatPassword: Joi.ref('password')
});
