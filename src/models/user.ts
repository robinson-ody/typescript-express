export default class User {
  constructor(public email: string, public name: string, private password: string) {}

  get getPassword() {
    return this.password;
  }

  set setPassword(newPassword: string) {
    this.password = newPassword;
  }
}
