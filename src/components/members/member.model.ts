import Joi from 'joi';
import { firestore } from '../../config/firestore';


export const Member_joi_body = Joi.object({
  nombre: Joi.string().required(),
  apellido: Joi.string().required(),
  rama: Joi.string().required(),
  rama_id: Joi.string().required(),
  semestre: Joi.string().required(),
  id_ciudadania: Joi.string().required(),
  email: Joi.string()
    .email()
    .required(),
});

export const Member_joi_params = Joi.object({
  id: Joi.string().required()
});

export const Member_Doc = firestore.collection('members');
