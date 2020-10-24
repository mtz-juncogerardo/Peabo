import { auth, provider } from '../../config/firebase';
import { error } from '../stores/error.store';

export default class Auth {

   static async newEmailUser(email: string, password: string) {
      if (!email || !password) return;

      try {
         await auth.createUserWithEmailAndPassword(email, password);
      } catch (err) {
         error.set(err.message);
         return;
      }
   }

   static async emailAuth(email: string, password: string) {
      if (!email || !password) return;

      try {
         await auth.signInWithEmailAndPassword(email, password);
      } catch (err) {
         error.set(err.message);
      }
   };

   static async googleAuth() {
      try {
         await auth.signInWithPopup(provider.google);
      } catch (err) {
         error.set(err.message);
         return;
      }
   }

   static async facebookAuth() {
      try {
         await auth.signInWithPopup(provider.facebook);
      } catch (err) {
         error.set(err.message);
         return;
      }
   }

   static async logOut() {
      await auth.signOut();
   }
}


