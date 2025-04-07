# Test Framework Documentation

==========================

## Overview

This is a testing microframework written in JavaScript. It provides a simple and concise way to write unit tests
for your application.

## Classes

### `TestFramework`

- **Description**: The main class of the framework.
- **Methods**:
  _ `describe(description, callback)`: Defines a test suite with the given description and runs the provided
  callback function.
  _ `test(name, callback)`: Registers a new test case with the given name and callback function.
  _ `expect(received)`: Returns an object with various assertion methods (e.g., `toBe`, `toEqual`, etc.).
  _ `run()`: Runs all registered tests.

## Assertions

The `expect` method returns an object with various assertion methods:

- `toBe(expected)`: Checks if the received value is equal to the expected value.
- `toEqual(expected)`: Checks if the received value is deeply equal to the expected value.
- `toThrow(expected)`: Checks if the received value throws an error that matches the expected error message.
- `toBeTruthy()`: Checks if the received value is truthy.
- `toBeFalsy()`: Checks if the received value is falsy.
- `toBeGreaterThan(expected)`: Checks if the received value is greater than the expected value.
- `toBeLessThan(expected)`: Checks if the received value is less than the expected value.
- `toBeInstanceOf(expected)`: Checks if the received value is an instance of the expected class.
- `toMatch(expected)`: Checks if the received value matches the expected pattern.
- `toContain(expected)`: Checks if the received array contains the expected value.
- `HaveLength(expected)`: Checks if the received array has the expected length.
- `toBeCloseTo(expected, precision = 2)`: Checks if the received value is close to the expected value with the
  given precision.
- `toBeDefined()`: Checks if the received value is defined (i.e., not null or undefined).
- `toBeUndefined()`: Checks if the received value is undefined.
- `BeNull()`: Checks if the received value is null.
- `BeNaN()`: Checks if the received value is NaN (Not a Number).
- `notToBe(expected)`: Checks if the received value does not equal the expected value.

## Example Usage

```javascript
const testFramework = new TestFramework();

testFramework.describe("Example Tests", () => {
  testFramework.test("Test 1", () => {
    expect(2).toBe(2);
  });

  testFramework.test("Test 2", () => {
    expect([1, 2, 3]).toContain(2);
  });
});

testFramework.run();
```

## Running Tests

To run the tests, call the `run()` method on the `TestFramework` instance.

```javascript
const testFramework = new TestFramework();
testFramework.run();
```
