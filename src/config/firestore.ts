import { credentials } from './config';
import { characters, generate } from 'shortid';
import moment from 'moment';
import { Firestore, CollectionReference, FieldPath, WhereFilterOp } from '@google-cloud/firestore';

const { project_id, private_key, client_email } = (credentials as any).rober19_firebase;

export default class Firestore_ {
  private document_: CollectionReference;

  constructor(document: CollectionReference) {
    this.document_ = document;
  }

  async saveOne(value: any) {
    return await this.validatorResponse(this.document_.doc(generate()).set(value), value);
  }

  async getOne(fieldPath: string|FieldPath, opStr: WhereFilterOp, value: any) {
    const oneResult = await this.document_.where(fieldPath, opStr, value);
    return oneResult;
  }

  async deleteOne(id: string) {
    return await this.document_.doc(id).delete();
  }

  async updateOne(id: string, value: any) {
    return await this.document_.doc(id).update(value);
  }
  async getAll(value: any) {
    const data = await this.document_.get();
    return data.docs.map((doc: { data: () => void }) => doc.data());
  }

  validatorResponse(res: any, data: any) {
    if (!moment(res._writeTime).isValid()) return new Error('Break');
    return { data, status: 200 };
  }
}

export const instance = new Firestore({
  projectId: project_id,
  credentials: {
    private_key,
    client_email,
  },
});

characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');
export const id_generator = generate;
