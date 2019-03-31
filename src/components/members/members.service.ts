import { dbMember, id_generator } from './member.model';

export async function Create(Member: object) {
  try {
    (Member as any).id = id_generator();
    return await dbMember.saveOne(Member);
  } catch (error) {
    return error;
  }
}

export async function FindAll(MemberID: string) {
  try {
    return await dbMember.getAll(MemberID);
  } catch (error) {
    return error;
  }
}

export async function DeleteOne(MemberID: string) {
  try {
    return await dbMember.deleteOne(MemberID);
  } catch (error) {
    return error;
  }
}

export async function UpdateOne(MemberID: string, Member: object) {
  try {
    return await dbMember.updateOne(MemberID, Member);
  } catch (error) {
    return error;
  }
}

export async function FindOneById(MemberID: string) {
  try {
    return await dbMember.getOne('id', '==', MemberID);
  } catch (error) {
    return error;
  }
}
