export class Endpoints {
  // Auth
  static authBase = (id) => (id ? `v1/auth/${id}` : 'v1/auth');

  static login = {
    method: 'POST',
    url: this.authBase('login'),
  };
}
