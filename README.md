#guess a number game

#HTML setup
    need:
        1)INPUT for number
        2)BUTTON
        3) guesses remaing text span area
        4)empty div to show too high/low/correct
- grab DOM elements with id tags
-initialize state (let)
    -random number: n
    -guesses reamining: 4 (--)

-add event listener to button
    on click
        1) state: remaining guesses decreases by 1 --
        2)store user guesses in a variable (Number(someIput.value))
        3)compare the user guesses with RN

        4)View:
            a)if user guess is greater than RN inject too high into result span
            b) '' less than RN, too loow into result span
            c) if guess = RN congratulate
            d) change remaining guesses text content box if applicable
