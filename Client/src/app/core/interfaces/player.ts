
import { IBase } from './base';


export interface IPlayer<T = string> extends IBase {
    playerName: string;
    shirtNumber: number;
    posts: T[];
    position: string;
    playerImage: string;
  }