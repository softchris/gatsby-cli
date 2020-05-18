const create = require('../createPlugin')
jest.mock('fs-extra');

const fsExtra = require('fs-extra');

describe('createPlugin', () => {
  afterEach(() => {
    fsExtra.copySync.mockClear();
  });
  test('should create plugin', () => {
    create('source')
    expect(fsExtra.copySync).toHaveBeenCalled();
  })

  test("should not create plugin", () => {
    create("abc");
    expect(fsExtra.copySync).not.toHaveBeenCalled();
  });
})