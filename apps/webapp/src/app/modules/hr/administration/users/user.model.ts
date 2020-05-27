export class User{
  public id: number;
  public name: string;
  public email: string;
  public password: string;

  constructor(){
    this.id = -1;
    this.name = "";
    this.email = "";
    this.password = "";
  }
}