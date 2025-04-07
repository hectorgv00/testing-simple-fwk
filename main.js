class TestFramework {
  tests = [];

  describe(description, callback) {
    console.log(`\n${description}`);
    callback();
  }

  test(name, callback) {
    this.tests.push({ name, callback });
  }

  expect(received) {
    return {
      toBe(expected) {
        if (received === expected) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
      toEqual(expected) {
        if (JSON.stringify(received) === JSON.stringify(expected)) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: ${JSON.stringify(expected)}`);
          console.error(`   Received: ${JSON.stringify(received)}`);
        }
      },
      toThrow(expected) {
        try {
          received();
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: ${expected}`);
          console.error(`   Received: No error thrown`);
        } catch (error) {
          if (error.message === expected) {
            console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
          } else {
            console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
            console.error(`   Expected: ${expected}`);
            console.error(`   Received: ${error.message}`);
          }
        }
      },
      toBeTruthy() {
        if (received) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: truthy`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeFalsy() {
        if (!received) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: falsy`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeGreaterThan(expected) {
        if (received > expected) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: greater than ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeLessThan(expected) {
        if (received < expected) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: less than ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeInstanceOf(expected) {
        if (received instanceof expected) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: instance of ${expected.name}`);
          console.error(`   Received: ${received.constructor.name}`);
        }
      },
      toMatch(expected) {
        if (received.match(expected)) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: match ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
      toContain(expected) {
        if (Array.isArray(received) && received.includes(expected)) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: contain ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
      toHaveLength(expected) {
        if (Array.isArray(received) && received.length === expected) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: length ${expected}`);
          console.error(`   Received: ${received.length}`);
        }
      },
      toBeCloseTo(expected, precision = 2) {
        if (Math.abs(received - expected) < Math.pow(10, -precision)) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: close to ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeDefined() {
        if (received !== undefined) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: defined`);
          console.error(`   Received: undefined`);
        }
      },
      toBeUndefined() {
        if (received === undefined) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: undefined`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeNull() {
        if (received === null) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: null`);
          console.error(`   Received: ${received}`);
        }
      },
      toBeNaN() {
        if (Number.isNaN(received)) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: NaN`);
          console.error(`   Received: ${received}`);
        }
      },
      notToBe(expected) {
        if (received !== expected) {
          console.log(`✔️  ${this.tests[this.tests.length - 1].name}`);
        } else {
          console.error(`❌  ${this.tests[this.tests.length - 1].name}`);
          console.error(`   Expected: not ${expected}`);
          console.error(`   Received: ${received}`);
        }
      },
    };
  }

  run() {
    this.tests.forEach(({ callback }) => {
      try {
        callback();
      } catch (error) {
        console.error(`❌  Error: ${error.message}`);
      }
    });
  }
}
