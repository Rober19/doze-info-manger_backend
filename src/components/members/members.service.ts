import { dbMember, id_generator } from './member.model';

export async function Create(Member: object) {
  try {
    (Member as any).id = id_generator();
    return await dbMember.saveOne(Member);
  } catch (error) {
    return error;
  }
}

export async function FindAll() {
  try {
    return await dbMember.getAll();
  } catch (error) {
    return error;
  }
}

export async function DeleteOneByID(MemberID: string) {
  try {
    return await dbMember.deleteByQuery('id', '==', MemberID);
  } catch (error) {
    return error;
  }
}

export async function UpdateOneByID(MemberID: string, Member: object) {
  try {
    return await dbMember.updateOne(MemberID, Member);
  } catch (error) {
    return error;
  }
}

export async function FindOneById(MemberID: string) {
  try {
    //el valor de la propiedad id del objeto
    //return await dbMember.getByQuery('id', '==', MemberID);
    return await dbMember.getByQuery('id', '==', MemberID);
  } catch (error) {
    return error;
  }
}
