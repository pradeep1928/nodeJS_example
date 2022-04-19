const rect = require("./rectangle");

function solveRect(l, b) {
  console.log("solving for rectangle");
  rect(l, b, (err, rectangle) => {
    if (err) {
      console.log("error: ", err.message);
    } else {
      console.log("The area of the rectangle is: ", rectangle.area());
      console.log("The perimeter of rectangle is: ", rectangle.perimeter());
    }
  });
  console.log("this line is after callback function")
}

solveRect(4, 5);
solveRect(5, 12);
solveRect(-4, 3);
solveRect(0, 4);
