import { IBase } from './base';

export interface IPost extends IBase {
  playerName: string;
  postContent: string;
  author: string;
  likes: string[];
}