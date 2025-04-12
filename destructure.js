// Array destructuring
const colors = ["red", "green", "blue"];
const [primaryColor, secondaryColor, TertaryColor] = colors;

// Object destructuring
const user = {
  username: "johnDoe",
  email: "john@example.com",
  password: "securepassword123"
};
const { username, email } = user;

// Print all the variables
console.log("Primary Color:", primaryColor);
console.log("Secondary Color:", secondaryColor);
console.log("Username:", username);
console.log("Email:", email);