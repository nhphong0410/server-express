import Joi from 'joi';

export const signupBodySchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(24).required(),
  repeatPassword: Joi.ref('password')
})
