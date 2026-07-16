function SetUsername(username) {
    // Imagine some complex work like database calls
    this.username = username;
    console.log("Username Set");
}

function createUser(username, email, password) {

    // Call SetUsername and make its 'this'
    // point to the current object being created
    SetUsername.call( username);

    this.email = email;
    this.password = password;
}

// Create two users
const user1 = new createUser("Ali", "ali@gmail.com", "123");
const user2 = new createUser("Ahmed", "ahmed@gmail.com", "456");

console.log(user1);
console.log(user2);

