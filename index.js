const rect = require('./rectangle');

function solveRect(l, b) {
    if (l <= 0 || b <= 0) {
        console.log("Rectangle dimensions should be greater than 0");
    } else {
        console.log("The area of the rectangle is: " + rect.area(l, b));
        console.log("The perimeter of the rectangle is: " + rect.perimeter(l, b));
    }
}

solveRect(4, 5);
solveRect(5, 12);
solveRect(-4, 3);
solveRect(0, 4);