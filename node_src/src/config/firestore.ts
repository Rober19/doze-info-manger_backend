import { credentials } from './config';
import { characters, generate } from 'shortid';
import moment from 'moment';
import { Firestore } from '@google-cloud/firestore';

const { project_id, private_key, client_email } = (credentials as any).rober19_firebase;

console.log(project_id);

export const firestore = new Firestore({
  projectId: project_id,
  credentials: {
    private_key,
    client_email,
  },
});

characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
export const id_generator = generate;

export async function saveOne(document: any, value: any) {
  return await document.doc(generate()).set(value);
}

export async function getOne(document: any, id: string) {
  const oneResult = await document.doc(id).get();
  return oneResult.data();
}

export async function deleteOne(document: any, id: string) {
  return await document.doc(id).delete();
}

export async function updateOne(document: any, id: string, value: any) {
  return await document.doc(id).update(value);
}
export async function getAll(document: any, value: any) {
  const data = await document.get();
  return data.docs.map((doc: { data: () => void }) => doc.data());
}

export function validatorResponse(res: any, data: any) {
  if (!moment(res._writeTime).isValid()) return new Error('Break');
  return { data, status: 200 };
}
