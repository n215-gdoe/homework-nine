class UserModel {
  constructor() {
    this.users = [];
  }

  getUsers() {
    return this.users;
  }

  addUser(user) {
    this.users.push(user);
  }
}
