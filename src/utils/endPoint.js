export class Endpoints {
  // Auth
  static authBase = (id) => (id ? `v1/auth/${id}` : 'v1/auth');

  static signup = {
    method: 'POST',
    url: this.authBase('signup'),
  };
}
