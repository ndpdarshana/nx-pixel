import { User } from './user.model';

export class Timecard{
  public id:number;
  public dateIn: string;
  public timeIn: string;
  public timeOut: string;
  public project: string;
  public comment: string;
  // public user:User;
}