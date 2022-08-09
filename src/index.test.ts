import { expect, test } from 'vitest';
import env from './';

test('exports', () => {
  expect(env).toBeTypeOf('function');
});

const name = 'FOO_BAR_BANANA_BAZ';

test('variable defined', () => {
  process.env[name] = 'bears://apples';
  expect(env(name)).toBe(process.env[name]);
  delete process.env[name];
});

test('variable not defined', () => {
  expect(() => env(name)).toThrow(`${name} is not defined in process.env!`);
});
