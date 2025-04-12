const userInfo = { name: "John", age: 30 }
const userContact = { email: "john@example.com", phone: "1234567890" }

const userProfile = { ...userInfo, ...userContact };
console.log(userProfile);