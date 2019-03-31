import Joi from 'joi';
import Firestore,{ instance, id_generator as _id_gen } from '../../config/firestore';


export const Member_joi_body = Joi.object({
  id: Joi.string(),
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

export const dbMember = new Firestore(instance.collection('members'));

export const id_generator = _id_gen;
