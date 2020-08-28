import Add from './Add.js'

describe('Add Function', () => {

  test('function should add two values', () => {
    const output = Add(1, 2);

    expect(output).toBe(3);
  })

  test('function should add two values and output should be 5', () => {
    const output = Add(3, 2);

    expect(output).toBe(5);
  })
})