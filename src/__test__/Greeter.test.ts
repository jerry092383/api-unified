import { Greeter } from '../index';

test('My Greeter', () => {
    expect(Greeter('Jerry')).toBe('Hello Jerry');
});
