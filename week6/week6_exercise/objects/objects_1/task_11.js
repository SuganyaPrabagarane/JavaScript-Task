/* Task 11
Define a `userProfiles` array containing objects representing users.
Each user should have a `username`, `email`, and `isAdmin` property.
Write a function that filters and returns only the users who are administrators.
*/

const userProfiles = [
  { username: "john_doe", email: "john.doe@example.com", isAdmin: true },
  { username: "jane_smith", email: "jane.smith@example.com", isAdmin: false },
  { username: "alice_williams", email: "alice.williams@example.com", isAdmin: false },
  { username: "bob_johnson", email: "bob.johnson@example.com", isAdmin: true },
  { username: "mary_brown", email: "mary.brown@example.com", isAdmin: true }
];

const adminAccess = userProfiles.filter(user => user.isAdmin);
console.log(adminAccess);
