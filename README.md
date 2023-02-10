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