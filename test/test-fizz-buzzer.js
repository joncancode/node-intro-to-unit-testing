const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `fizzBuzzer` function
describe('fizzBuzzer', function () {

    // test the normal case
    it('return fizz for multiples of 3, buzz for multiples of 5, and fizz-buzz for multiples of 15',
        function () {
            // range of normal inputs, including
            // notable cases like multiples of 3, 5, or 15
            const normalCases = [
                { a: 1, expected: 1 },
                { a: 2, expected: 2 },
                { a: 3, expected: 'fizz' },
                { a: 5, expected: 'buzz' },
                { a: 45, expected: 'fizz-buzz' },
            ];

        // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input.a);
      answer.should.equal(input.expected);
    });
  });

  it('should raise error if args not numbers', function() {
    // range of bad inputs where not both are numbers
    const badInputs = [
      ['a', '1'],
      ['1', '2'],
      ['2', false]
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      (function() {
          fizzBuzzer(input[0])
      }).should.throw(Error);
    });
  });
});