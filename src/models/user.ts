export default class User {
  // * Email
  private email: string;

  get getEmail() {
    return this.email;
  }

  set setEmail(newEmail: string) {
    this.email = newEmail;
  }

  // * Name
  private name: string;

  get getName() {
    return this.name;
  }

  set setName(newName: string) {
    this.name = newName;
  }

  // * Password Hash
  private passHash: string;

  get getPassHash() {
    return this.passHash;
  }

  set setPassHash(newPassHash: string) {
    this.passHash = newPassHash;
  }

  constructor(email: string, name: string, passHash: string) {
    this.email = email;
    this.name = name;
    this.passHash = passHash;
  }

  static getAllSafeInformation() {
    return 'userId, email, name';
  }
}
