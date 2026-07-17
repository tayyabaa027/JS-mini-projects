class User {
  constructor(email) {
    this.email = email;
  }

  get email() {
    return this._email.toUpperCase();
  }

  set email(value) {
    this._email = value;
  }
}

const user = new User("tayyaba@gmail.com");

console.log(user.email); // Getter

user.email = "new@gmail.com"; // Setter

console.log(user.email);
//FOR SECURITY PURPOSE