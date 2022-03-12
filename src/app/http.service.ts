import {HttpClient, HttpHandler} from "@angular/common/http";

export class HttpService extends HttpClient{
  private API: string = '';

  constructor(handler: HttpHandler) {
    super(handler);
  }

  async login(body: {login: string, password: string}) {
    await this.post(`${this.API}/user`, body, {observe: 'response'});
  }

  async sendRecoveryEmail(body: {email: string}) {
    await this.post(`${this.API}/recovery`, body, {observe: 'response'});
  }

  async updatePassword(body: {password: string}) {
    await this.put(`${this.API}/recovery`, body, {observe: 'response'});
  }

  async getProfile() {  // TODO
    await this.get(`${this.API}/user`, {observe: 'response'});
  }
}

