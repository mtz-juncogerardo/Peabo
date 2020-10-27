import type { User } from './user.type';

export type Category = {
   createdAt: Date,
   createdBy: User,
   color: string;
   name: string;
}
