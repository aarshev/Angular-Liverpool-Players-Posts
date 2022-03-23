import { IBase } from './base';

export interface IUser extends IBase {
  posts: string[];
  email: string;
  password: string;
}