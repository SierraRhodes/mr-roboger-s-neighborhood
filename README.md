# _Mr. Rodoger's Neighborhood_

#### By _*Sierra Rhodes*_

#### _This application takes the user's inputted number and returns numbers as well as words substituted for some numbers._

## Technologies Used

* _HTML5_
* _CSS_
* _JavaScript_
* _Bootstrap_

## Description

_This application acts much like a number generator. The user inputs a number and it returns all the numbers up until the user's selected number. In addition to that, the application substitutes numbers 1,2, and 3 with the words "Beep!", "Boop!", and "Won't you be my neighbor?" When a number contains 1 and 2, in any order, the application substitutes it for the word "Boop!" When it contains numbers 2 and 3, in any order, the application returns the words "Won't you be my neighbor?"_

## Setup/Installation Requirements

* _Open up new browser_
* _Go to https://github.com/lilbitsnpieces/mr-roboger-s-neighborhood_
* _Click on code and copy link_
* _In the command line, type git clone and attach the copied link_
* _Press enter/return on keyboard_
* _Find the folder on your computer's desktop and open index.html link with preferred browser_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this application depends on? We recommend deleting the project from your desktop, re-cloning the project from GitHub, and writing down all the steps necessary to get the project working again.}_

## Known Bugs

* _None_


## License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE._

Copyright (c) _2023_ _Sierra Rhodes_


Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: beepBoop(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should substitute 1 for "beep"
Code:
beepBoop(5);
Expected Output: [0, Beep!, 2, 3, 4, 5]

Test: "It should substitute 2 for "Boop!" 
Code:
beepBoop(5);
Expected Output: [0,"Beep!","Boop", 3, 4, 5]

Test: "It should substitute 3 for "Won't you be my neighbor?" 
Code:
beepBoop(5);
Expected Output: [0,"Beep!","Boop", "Won't you be my neighbor?", 4, 5]

Test: "It should substitute any number containing 1 with beep, any number containing 2 that doesn't contain 1, and any number containing 3 that doesn't contain 1 or 2" 
Code:
beepBoop(20)
Expected Output: [0,"Beep!","Boop!,"Won't you be my neighbor?",4,5,6,7,8,9,"Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!, "Beep!", "Beep!", "Beep!", "Boop!]

Test: It should substitute any number not only containing 1 but also 2. 
Code:beepBoop(21) 
Expected Output: [0,"Beep!","Boop!,"Won't you be my neighbor?",4,5,6,7,8,9,"Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!, "Beep!", "Beep!", "Beep!", "Boop!, "Beep!"]  


Test: It should substitute any number not only containing 1 but also 3. 
Code: beepBoop(15) 
Expected Output: [0,"Beep!","Boop!,"Won't you be my neighbor?",4,5,6,7,8,9,"Beep!", "Beep!", "Beep!", "Won't you be my neighbor?", "Beep!", "Beep!"]

Test: It should substitute any number containing 2 and 3. 
Code: beepBoop(23)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?"]