import { User } from './user.model';

interface Payment{
  entitlement: string;
  rate: number;
  total: number;
}

export class Payslip{
  public id: number;
  // public user: User;
  public dateOfPayment: string;
  public payPeriod: string;
  // public payments: Payment[];
}