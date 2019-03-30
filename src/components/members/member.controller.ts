import { Request, Response } from 'express';
import { Member_Doc } from './member.model';
import { saveOne, validatorResponse, getOne, getAll, deleteOne, updateOne } from '../../config/firestore';

function Member_(req: Request) {
  const { nombre, apellido, rama, rama_id, semestre, email } = req.body;
  return { nombre, apellido, rama, rama_id, semestre, email };
}

export async function Create(req: Request, res: Response) {
  res.send(validatorResponse(await saveOne(Member_Doc, Member_(req)), Member_(req)));
}

export async function FindAll(req: Request, res: Response) {
  res.status(200).send(await getAll(Member_Doc, req.params.id));
}

export async function DeleteOne(req: Request, res: Response) {
  res.status(200).send(await deleteOne(Member_Doc, req.params.id));
}

export async function UpdateOne(req: Request, res: Response) {
  res.status(200).send(await updateOne(Member_Doc, req.params.id, Member_(req)));
}

export async function FindOne(req: Request, res: Response) {
  res.status(200).send(await getOne(Member_Doc, req.params.id));
}


