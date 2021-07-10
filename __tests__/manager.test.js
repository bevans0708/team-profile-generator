const manager = require("../lib/manager");
const employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
  const testValue = 10;
  const event = new manager("Foobar", 1, "test@example.com", testValue);
  expect(event.officeNumber).toBe(testValue);
});

test('getRole() should return "manager"', () => {
  const testValue = "manager";
  const event = new manager("Foobar", 1, "test@example.com", 10);
  expect(event.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 10;
  const event = new manager("Foobar", 1, "test@example.com", testValue);
  expect(event.getOfficeNumber()).toBe(testValue);
});
