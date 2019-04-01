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

  async saveOne(value: object) {
    return await this.validatorResponse(this.document_.doc(generate()).set(value), value);
  }

  async getByQuery(fieldPath: string | FieldPath, opStr: WhereFilterOp, value: string) {
    const Result = await this.document_.where(fieldPath, opStr, value).get();
    return Result.docs.map((doc: { data: () => void }) => doc.data());
  }

  async deleteByQuery(fieldPath: string | FieldPath, opStr: WhereFilterOp, value: string) {
    //return await this.document_.doc(id).delete();
    const del_result = await this.document_.where(fieldPath, opStr, value).get();
    let deleted = del_result.docs.map((doc: { data: () => void }) => doc.data());
    del_result.forEach(doc => doc.ref.delete());
    return deleted;
  }

  async updateOne(id: string, value: object) {
    return await this.document_.doc(id).update(value);
  }
  async getAll() {
    const data = await this.document_.get();
    return data.docs.map((doc: { data: () => void }) => doc.data());
  }

  validatorResponse(res: object, data: object) {
    if (!moment((res as any)._writeTime).isValid()) return new Error('Break');
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
