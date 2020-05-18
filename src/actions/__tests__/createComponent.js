jest.mock("fs", () => {
  return {
    existsSync: (name) => name.endsWith('exists.js') ? true : false,
    writeFileSync: jest.fn(),
    readFileSync: jest.fn()
  };
});

const create = require('../createComponent');
const fs = require('fs')

describe('createComponent', () => {
  afterEach(() => {
    fs.writeFileSync.mockClear();
  });

  test('should create component', () => {
    create('hello');
    // console.info("mock", fs.writeFileSync);
    expect(fs.writeFileSync.mock.instances.length).toBe(1);
  })

  test("should not create component - when it already exist", () => {
    create("exists");
    // console.info("mock", fs.writeFileSync.mock.calls[0][0]);
    expect(fs.writeFileSync).not.toHaveBeenCalled();
  });
})