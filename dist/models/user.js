export default class User {
    constructor(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    get getPassword() {
        return this.password;
    }
    set setPassword(newPassword) {
        this.password = newPassword;
    }
}
