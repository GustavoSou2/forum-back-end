import Joi from 'joi';

const createUserSchema = Joi.object({
  title: Joi.string().required(),
  message: Joi.string().required(),
  has_links: Joi.boolean().optional(),
  has_tags: Joi.boolean().optional(),
  has_images: Joi.boolean().optional(),
});

export default createUserSchema.options({
  abortEarly: false,
  allowUnknown: true,
  stripUnknown: true,
});
