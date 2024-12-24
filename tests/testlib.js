export function createStub() {
  const stubs = {}
  return {
    stub(object, methodName, implementation) {
      if (!object) {
        throw new TypeError("Should wrap property of object");
      }
      
      if (typeof implementation !== "function" && typeof implementation !== "object") {
        throw new TypeError(
            "Return value should be a function or a property descriptor",
        );
      }
      if (typeof object[methodName] !== "function") {
        throw new Error(`Method ${methodName} does not exist on the object.`);
      }
      stubs[methodName] = object[methodName];
      object[methodName] = (...args) => implementation; 

      return this;
    },

    restore(object, methodName) {
      if (stubs[methodName]) {
        object[methodName] = stubs[methodName];
        delete stubs[methodName];
      }
    }
  };
}

export function assert(express, errmsg) {
  try {
    if((express != null) && (typeof express == "string")) {
      const func = new Function(`return (${expression})`);
      if (func()) {
        return;
      } else {
        throw new Error(errmsg);
      }
    } else {
      if (expression) {
        return;
      } else {
        throw new Error(errmsg);
      }
    }
  } catch (e) {
    console.log(e);
    throw new Error(errmsg);
  }
}

assert.equal = function (actual, expected) {
  if ((actual != null) && (expected != null) && actual == expected) {
    return;
  } else {
    throw new Error('not equal');
  }
}

assert.strictEqual = function (actual, expected) {
  if ((actual != null) && (expected != null) && (actual === expected)) {
    return;
  } else {
    throw new Error('not strict equal');
  }
}

assert.deepEqual = function (actual, expected) {
  if (actual === expected) {
    return true;
  } 
  else if ((typeof actual == "object" && actual != null) && (typeof expected == "object" && expected != null)) {
    if (Object.keys(actual).length != Object.keys(expected).length) {
      return false;
    }

    for (var prop in actual) {
      if (expected.hasOwnProperty(prop)) {
        if (! assert.deepEqual(actual[prop], expected[prop]))
          return false;
      }
      else
        return false;
    }

    return true;
  } else {
    return false;
  }
}

const state = {
  tests: [],
  currentSuite: null,
};

export function before(fn) {
  if (!state.currentSuite) throw new Error('No active suite to define a before hook.');
  state.currentSuite.before = fn;
}

export function after(fn) {
  if (!state.currentSuite) throw new Error('No active suite to define an after hook.');
  state.currentSuite.after = fn;
}

export function beforeEach(fn) {
  if (!state.currentSuite) throw new Error('No active suite to define a beforeEach hook.');
  state.currentSuite.beforeEach = fn;
}

export function afterEach(fn) {
  if (!state.currentSuite) throw new Error('No active suite to define an afterEach hook.');
  state.currentSuite.afterEach = fn;
}

export function describe(suiteName, fn) {
  const suite = {
    name: suiteName,
    tests: [],
    before: null,
    after: null,
    beforeEach: null,
    afterEach: null,
  };

  state.currentSuite = suite;
  console.log(`\nSuite: ${suiteName}`);

  try {
    fn(); // Define suite and tests
  } catch (e) {
    console.log(` ✖ Suite definition failed: ${e.message}`);
  }

  if (suiteName) {
    const testResult = document.getElementById('test-results')
    const testSuite = document.createElement('div');
    testSuite.id = "test-suite";
    testSuite.className = "test-suite";
    const sName = document.createElement('h2');
    sName.textContent = `Suite: ${suiteName}`;
    testSuite.appendChild(sName);
    testResult.appendChild(testSuite);

    try {
      if (suite.before) suite.before();
      for (const test of suite.tests) {
        try {
          if (suite.beforeEach) suite.beforeEach();
        } catch (e) {
          console.log(` ✖ beforeEach failed: ${e.message}`);
        }
  
        const testCase = document.createElement('div');
        testSuite.appendChild(testCase);
        try {
          console.log(`  Test: ${test.name}`);
          test.fn();
          console.log(`    ✔ ${test.name}`);
          const testName = document.createElement('h3');
          testName.textContent = `  Test: ${test.name}`;
          const caseResult = document.createElement('p');
          caseResult.textContent = `    ✔ ${test.name}`;
          caseResult.className = "pass";
          testCase.appendChild(testName);
          testCase.appendChild(caseResult);
        } catch (e) {
          console.log(`    ✖ ${test.name} - ${e.message}`);
          const testName = document.createElement('h3');
          testName.textContent = `  Test: ${test.name}`;
          const caseResult = document.createElement('p');
          caseResult.textContent = `    ✖ ${test.name} - ${e.message}`;
          caseResult.className = "fail";
          testCase.appendChild(testName);
          testCase.appendChild(caseResult);
        }
  
        try {
          if (suite.afterEach) suite.afterEach();
        } catch (e) {
          console.log(` ✖ afterEach failed: ${e.message}`);
        }
      }
      if (suite.after) suite.after();
    } catch (e) {
      console.log(` ✖ Suite execution failed: ${e.message}`);
    }
  }

  state.currentSuite = null; // Reset current suite
}

export function it(testName, fn) {
  if (!state.currentSuite) throw new Error('No active suite to define a test.');
  state.currentSuite.tests.push({ name: testName, fn });
}
