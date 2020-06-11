export class Invoice{
  id: number;
  to: string;
  amount_total: number;
  amount_balance: number;
  due_date: string;
  new_due_date: string;
  reminders: number;
}