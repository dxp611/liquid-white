// Sample JavaScript code to showcase VSCode themes

// Constants and Variables
const PI = 3.14159;
let radius = 5;

// Function to calculate the area of a circle
function calculateArea(r) {
    if (r <= 0) {
        return "Radius must be positive";
    }
    return PI * r * r;
}

// Array of circle radii
let radii = [1, 2, 3, 4, 5];

// Loop through the array and log the areas
for (let i = 0; i < radii.length; i++) {
    let area = calculateArea(radii[i]);
    console.log(`Area of circle with radius ${radii[i]}: ${area}`);
}

// Object representing a circle
let circle = {
    radius: 10,
    getDiameter: function() {
        return this.radius * 2;
    },
    getCircumference: function() {
        return 2 * PI * this.radius;
    }
};

// Log circle properties
console.log(`Diameter of circle: ${circle.getDiameter()}`);
console.log(`Circumference of circle: ${circle.getCircumference()}`);

// Asynchronous function to simulate fetching data
async function fetchData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        console.log('Fetched data:', data);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

// Fetch data from a sample API
fetchData('https://api.example.com/data');

// Class representing a geometric shape
class Shape {
    constructor(type) {
        this.type = type;
    }

    getType() {
        return this.type;
    }
}
const file = /test123(0123)?\:/g

// Class representing a square, extending Shape
class Square extends Shape {
    constructor(sideLength) {
        super('Square');
        this.sideLength = sideLength;
    }

    getArea() {
        return this.sideLength * this.sideLength;
    }
}

// Create a square and log its properties
let square = new Square(4);
console.log(`Type of shape: ${square.getType()}`);
console.log(`Area of square: ${square.getArea()}`);
