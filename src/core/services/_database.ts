import type { User } from '../types/user.type';
import { db } from '../../config/firebase';
import _ from 'lodash';

export default class Database {

   static async createUser(user: User, id: string) {
      if (_.isEmpty(user)) return;
      await db.collection('users').doc(id).set(user);
   }

   static saveEntity(collection, data) {
      if (_.isEmpty(data) || !collection) return;

      return db.collection(collection).add(data);
   }

   static updateEntity(collection, id, data) {
      if (_.isEmpty(data) || !collection) return;

      return db.collection(collection).doc(id).update(data);
   }

   static getEntity(collection: string, document: string) {
      if (!collection || !document) return;

      return db.collection(collection).doc(document).get();
   }

   static searchEntity(collection: string, keyValue: string, operator: any, value: string) {
      if (!collection || !keyValue || !operator || !value) return;

      return db.collection(collection).where(keyValue, operator, value).get();
   }
}
