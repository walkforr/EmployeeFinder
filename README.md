# EmployeeFinder

This app works basically like a dating app. It takes in a user's input and finds the compatibility compared with other employees in the company roster.

Behind the scenes, what is happening:

- When a user submits the form with all the input fields filled out, it adds them as an employee object to the employeeList array making the user's input the last item in the array.

- Each employee's score is summed up and put into an array.
- Then, every item in the array is subracted from the last array in the list(which is the user input).
(doing Math.abs to get the absolute value so there's no negative values).

- After the above steps are completed, a newArray is created that contains the differences between the user input and the other employees' inputs.

- Then we find the item in the array with the smallest difference. It will always be the user input, equaling to zero, so we have to do newArray.slice(0, newArray.length -1) to return the lowest value in the array excluding the last number in the array(the user input.)

- Finally, we push the employeeList to the req.body and return the response so it is accesible to use in our ajax function.
