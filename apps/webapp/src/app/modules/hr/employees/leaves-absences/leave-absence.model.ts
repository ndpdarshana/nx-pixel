import { User } from '../../administration/users/user.model';


export class LeaveAbsence{
  public id: number;
  // public User: User,
  public date: string;
  public leaveType: string;
  public note: string;
}