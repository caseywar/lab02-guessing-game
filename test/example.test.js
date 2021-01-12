// IMPORT MODULES under test here:
import { compareNumbers } from '../utils.js';

const test = QUnit.test;

test('when guessing 5, while the correct number is 7, the test will return a -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 5;
    const correctNumber = 7;
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guessing 2, while the correct number is 19, the test will return a -1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 2;
    const correctNumber = 19;
    const expected = -1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guessing 12, while the correct number is 9, the test will return a 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 12;
    const correctNumber = 9;
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guessing 18, while the correct number is 17, the test will return a 1', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 18;
    const correctNumber = 17;
    const expected = 1;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guessing 8, while the correct number is 8, the test will return a 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 8;
    const correctNumber = 8;
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('when guessing 12, while the correct number is 12, the test will return a 0', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const guess = 12;
    const correctNumber = 12;
    const expected = 0;

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = compareNumbers(guess, correctNumber);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});