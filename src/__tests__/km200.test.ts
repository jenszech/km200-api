import { Km200 } from '../km200';

const key = '1234567890123456789012345678901234567890123456789012345678901234'
const km200 = new Km200('1.1.1.1', 80, key);
const get = jest.spyOn(km200, 'get');
beforeEach(() => {
  get.mockReset();
});

test('Km200 Api Constructor', () => {
  const km200 = new Km200('1.1.1.1', 80, key);
  expect(km200.host).toBe('1.1.1.1');
  expect(km200.port).toBe(80);
});