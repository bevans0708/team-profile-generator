const employee = require("../lib/employee");

test("Can create employee instance", () => {
  const event = new employee();
  expect(typeof(event)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const name = "Alice";
  const event = new employee(name);
  expect(event.name).toBe(name);
});

test("Can set id via constructor argument", () => {
  const testValue = 10;
  const event = new employee("Foobar", testValue);
  expect(event.id).toBe(testValue);
});

test("Can set email via constructor argument", () => {
  const testValue = "test@test.com";
  const event = new employee("Foobar", 1, testValue);
  expect(event.email).toBe(testValue);
});

test("Can get name via getName()", () => {
  const testValue = "Alice";
  const event = new employee(testValue);
  expect(event.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
  const testValue = 10;
  const event = new employee("Foobar", testValue);
  expect(event.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
  const testValue = "test@example.com";
  const event = new employee("Foobar", 1, testValue);
  expect(event.getEmail()).toBe(testValue);
});

test("getRole() should return \"employee\"", () => {
  const testValue = "employee";
  const event = new employee("Alice", 1, "test@example.com");
  expect(event.getRole()).toBe(testValue);
});
