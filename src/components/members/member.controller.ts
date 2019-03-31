import { Request, Response } from 'express';
import { Create as _Create, FindAll as _FindAll, DeleteOne as _DeleteOne, UpdateOne as _UpdateOne, FindOneById as _FindOneById } from './members.service';

export async function Create(req: Request, res: Response) {   
  res.send(await _Create(req.body));
}

export async function FindAll(req: Request, res: Response) {
  res.status(200).send(await _FindAll(req.params.id));
}

export async function DeleteOne(req: Request, res: Response) {
  res.status(200).send(await _DeleteOne(req.params.id));
}

export async function UpdateOne(req: Request, res: Response) {
  res.status(200).send(await _UpdateOne(req.params.id, req.body));
}

export async function FindOne(req: Request, res: Response) {
  res.status(200).send(await _FindOneById(req.params.id));
}
