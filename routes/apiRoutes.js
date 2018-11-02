//apiRoutes.js

const employeeList = require("../app/data/employees");

module.exports = (app) => {
  app.get("/api/employees", (req, res) => { 
    res.json(employeeList);
  });

  app.post("/api/employees", (req, res) => {
   

    //puts each employee's score array's sum into an array
    const sum = (a, b) => Number(a) + Number(b);
    const sumsArray = employeeList.map(({ scores }) => scores.reduce(sum));

    //get the difference between last number in the array(user input) & each number in output array
    let newArray = sumsArray.map( (value) => { 
        return Math.abs(value - sumsArray[sumsArray.length -1]);//Math.abs gets absolute value so that there's no negative values when getting diffferences
    } );

    //finding the user in the array with the smallest difference
    const firstMatchIndex = newArray.slice(0, newArray.length - 1).findIndex((value, i, array) => {
        return value === Math.min(...array);
    });
    const firstMatch = employeeList[firstMatchIndex];
   
    employeeList.push(req.body);
    return res.json(firstMatch);

  });
};



