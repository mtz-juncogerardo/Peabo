import type { User } from '../types/user.type';
import { readable } from 'svelte/store';
import { auth } from '../../config/firebase';
import _database from '../services/_database';

const userMapper = (claims): User => ({
   picture: claims.picture ? claims.picture : '',
   name: claims.name ? claims.name : '',
   createdAt: new Date(),
   email: claims.email,
   id: claims.user_id
});


export const user = readable(null, set => {
   return auth.onAuthStateChanged(async fireUser => {
      if (fireUser) {
         const token = await fireUser.getIdTokenResult();
         const user = userMapper(token.claims);

         _database.getEntity('users', user.id)
            .then(doc => {
               if (doc.exists) {
                  set(doc.data());
                  return;
               }
               _database.createUser(user, user.id);
            });

         set(user);
         return;
      }

      set(null);
   });
});
