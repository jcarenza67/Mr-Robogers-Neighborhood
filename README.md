# Mr. Roboger's Neighborhood

#### By _**Joseph Wilfong**_

## Technologies Used

* _HTML_
* _CSS_
* _JAVASCRIPT_
* _TDD_

## Description

_A web application that takes a number from the user and returns a list of values from 0 to the users inputted number and replaces certain numbers with Boop, Beep, or Wont you be my neighbor?_

## Links

[This is the link to the Github repository](https://github.com/jcarenza67/Mr-Robogers-Neighborhood) 

## Setup/Installation Requirements

* _Click the link provided above_
* _Click the green dropdown button that says "Code"_
* _Copy the repository HTTPS, clone it to your Desktop directory by typing ***git clone***, paste the copied URL right after **clone**, and then press enter_
* _Open the **index.html** in your browser_

## Tests
  ```
  _Describe: beepBoop()_

    Test: "It should return an array of numbers from 0 to the user's inputted number"
    Code: beepBoop(5)
    Expected Output: [0, 1, 2, 3, 4, 5]
  
    Test: "It should replace the number 1 with "Beep!""
    Code: beepBoop(11)
    Expected Output: [0, "Beep!", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Beep!"]
  
    Test: "It should replace the numbers 1 and 2 with "Beep!" and "Boop!""
    Code: beepBoop(12)
    Expected Output: [0, "Beep!", "Boop!", 3, 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!"]
  
    Test: "It will replace the numbers 1, 2, and 3 with "Beep!", "Boop!", and finally "Won't you be my neighbor?"
    Code: beepBoop(13)
    Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep", "Boop!", "Won't you be my neighbor?"]
  ```

## Known Bugs

* _Unknown_

# License

_Please contact me at josephwilfong91@gmail.com if you have any questions, ideas, or concerns._

_Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:_

_The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software._

_THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

_Copyright (c) _2023_ _Joseph Wilfong_
