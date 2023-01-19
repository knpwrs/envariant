import { expect, expectTypeOf, test } from 'vitest';
import env from './';

test('exports', () => {
  expect(env).toBeTypeOf('function');
});

const name = 'FOO_BAR_BANANA_BAZ';

test('variable defined', () => {
  process.env[name] = 'bears://apples';
  const res = env(name);
  expect(res).toBe(process.env[name]);
  expectTypeOf(res).toBeString();
  delete process.env[name];
});

test('variable not defined', () => {
  expect(() => env(name)).toThrow(`${name} is not defined in environment!`);
});

test('variable defined in provided bag', () => {
  const res = env('foo', { foo: 'bar' });
  expect(res).toBe('bar');
  expectTypeOf(res).toBeString();
});

test('variable not defined in provided bag', () => {
  expect(() => env('foo', {})).toThrow('foo is not defined in environment!');
});
