import { Request, Response } from 'express';

import {
  Create as _Create,
  FindAll as _FindAll,
  DeleteOneByID,
  FindOneById,
  UpdateOneByID,
} from './members.service';

export async function Create(req: Request, res: Response) {
  res.send(await _Create(req.body));
}

export async function FindAll(req: Request, res: Response) {
  res.status(200).send(await _FindAll());
}

export async function DeleteOne(req: Request, res: Response) {
  res.status(200).send(await DeleteOneByID(req.query.id));
}

export async function UpdateOne(req: Request, res: Response) {
  res.status(200).send(await UpdateOneByID(req.query.id, req.body));
}

export async function FindOne(req: Request, res: Response) {
  res.status(200).send(await FindOneById(req.query.id));
}
