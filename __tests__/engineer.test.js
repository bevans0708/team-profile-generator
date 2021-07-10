const engineer = require("../lib/engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const event = new engineer("Foobar", 1, "test@example.com", testValue);
  expect(event.github).toBe(testValue);
});

test("getRole() should return \"engineer\"", () => {
  const testValue = "engineer";
  const event = new engineer("Foo", 1, "test@example.com", "GitHubUser");
  expect(event.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const event = new engineer("Foobar", 1, "test@example.com", testValue);
  expect(event.getGithub()).toBe(testValue);
});
