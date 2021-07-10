const intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "UofU";
  const event = new intern("Foobar", 1, "test@example.com", testValue);
  expect(event.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "intern";
  const event = new intern("Foobar", 1, "test@example.com", "UofU");
  expect(event.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "UofU";
  const event = new intern("Foobar", 1, "test@example.com", testValue);
  expect(event.getSchool()).toBe(testValue);
});