// ==============================
//  Sample calculator file
//  Not part of anything related to the project
//  HRS 2025-02-23
// ==============================

test("Test Name", callbackFunction);

function callbackFunction() {
  // Test code - pass as blank for now
  console.log("Yes, this test is being called, and passed in this case");
}

// test using arrow function
test("Test with Arrow Function 1", () => {
  console.log("This is a test with an arrow function");
});

// validate the syntax expect and toBe
test(" 1 is equal 1", () => {
  // In this case, the problem is the hardcoded test
  expect(1).toBe(1);
});
