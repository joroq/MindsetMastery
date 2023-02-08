const Fibonacci = require('./fibonacci');

let fibonacci;

beforeEach(() => {
    fibonacci = new Fibonacci();
});

test('next(): When not initialised, next number is returned', () => {
    expect(fibonacci.next()).toBe(1);
});

test('next(): When not initialised, next number is returned', () => {
    fibonacci.next();
    fibonacci.next();
    fibonacci.next();
    expect(fibonacci.next()).toBe(5);
});

test('next(): When initialized the next number can be returned', () => {
    fibonacci.init(8);
    expect(fibonacci.next()).toBe(13);
});
// test('next(): When initialized with a non-fibonacci number an error is thrown', () => {
//     fibonacci.init(7); //code will fail at this point! will never get to next line
//     expect(() => {
//         fibonacci.next();
//     }).toThrow();
// });

test('init(seed): can not be initialised to a non-fibonacci number', () => {
    expect(() => {
        fibonacci.init(7);
    }).toThrow('Not a fibonacci number');
});

test('init(seed): can not be initialised to zero', () => {
    expect(() => {
        fibonacci.init(0);
    }).toThrow('Not a fibonacci number');
});

test('init(seed): can not be initialised to a non-number', () => {
    expect(() => {
        fibonacci.init('a');
    }).toThrow('Not a fibonacci number');
});

test('init(seed): can not be initialised to nothing', () => {
    expect(() => {
        fibonacci.init();
    }).toThrow('Not a fibonacci number');
});

test('skip(forward): can be skipped by 1 to a fibonacci number', () => {
    fibonacci.init(8);
    expect(fibonacci.skip(1)).toBe(13);
});

test('skip(forward): can be skipped by 2 to a fibonacci number', () => {
    fibonacci.init(8);
    expect(fibonacci.skip(2)).toBe(21);
});

test('skip(forward): cannot be skipped by -1 to a fibonacci number', () => {
    fibonacci.init(8);
    expect(() => {
        fibonacci.skip(-1);
    }).toThrow('Cannot skip backwards');
});

test('skip(forward): can not be skipped by a non-number', () => {
    fibonacci.init(8);
    expect(() => {
        fibonacci.skip('a');
    }).toThrow('Must be an integer');
});
