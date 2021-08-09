// function getNewId() {
//   return Math.floor(Math.random());
// }

function getRandomId(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// test('returns a random number', () => {
//   const originalMath = Object.create(global.Math);

//   // You can create a "mockup" to simulate a behavior of unpredicted piece of code,
//   // such as Math.random() and HTTP response.
//   const mockMath = Object.create(global.Math);
//   mockMath.random = jest.fn(() => 0.75);
//   global.Math = mockMath;

//   const id = getRandomId();

//   expect(id).toBe(0.75);

//   // Customizing the Math.random() method will also affect the other parts of the
//   // test suite. That said if necessary, you can reset it too.
//   global.Math = originalMath;
// });

test('returns a random number', () => {
  jest.spyOn(Math, 'floor');

  const originalMath = Object.create(global.Math);

  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.75;
  global.Math = mockMath;

  getRandomId();

  expect(Math.floor).toHaveBeenCalledWith(0.75);

  global.Math = originalMath;
});

/* ===================================================================== */

// Using "Boolean assertion test" is not encouraged for its unproductive feedbacks.
// Expecting Boolean and see the test fails without knowing "why" is really not helpful.
// test('returns an integer', () => {
//   const id = getRandomId();

//   expect(Number.isInteger(id)).toBe(true);
// });

// Instead, you can use "Value assertion test". If the test fails, it will tell us
// "why" our test fails. It's because we're giving it invalid values.
test('returns an integer', () => {
  const id = getRandomId();

  expect(id).toBe(Math.floor(id));
});

/* ===================================================================== */

test('generates a number within specified range', () => {
  const id = getRandomId(10, 100);

  expect(id).toBeLessThanOrEqual(100);
  expect(id).toBeGreaterThanOrEqual(10);
});
