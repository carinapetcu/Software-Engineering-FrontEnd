export class CMSUser{
  id: number;
  fullName: string;
  username: string;
  email: string;
  password: string;

  constructor(id: number, fullName: string, username: string, email: string, password: string) {
    this.id = id;
    this.fullName = fullName;
    this.username = username;
    this.email = email;
    this.password = password;
  }
}
