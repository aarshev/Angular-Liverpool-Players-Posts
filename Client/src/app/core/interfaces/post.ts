import { IBase } from './base';
import { IUser } from './user';

export interface IPost extends IBase {
  playerName: string;
  postContent: string;
  author: IUser;
}