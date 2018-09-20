export class RequestFilter {


  constructor(login: string, name: string, ip: string) {
    this.login = login;
    this.name = name;
    this.ip = ip;
  }

  login: string;
  name: string;
  ip: string;

}
