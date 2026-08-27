//this is a class 
class Shape {
  constructor(_color, _fontWeight) {
    this.color = _color
    this.fontWeight = _fontWeight
  }
  static oopExapmle() {
    console.log("hello this is oop example using java scrip")
  }

  ColorAndWeight(_color, _fontWeight) {
    console.log(`the color is ${this.color}`)
    console.log(`the fontWeight is ${this.fontWeight}`)
  }
}

class Rectangel extends Shape {
  constructor(_color, _fontWeight, _Width, _Height) {
    super(_color, _fontWeight)
    this.Width = _Width
    this.Height = _Height
  }
  PrintArea() {
    let areaOfRectangle = this.width * this.height
    console.log(`The Area of the rectangle is ${areaOfRectangle}cm the color: ${this.color} the fontWeight is: ${this.fontWeight}`)
  }
}

class circle extends Shape {
  constructor(_color, _fontWeight, _radus) {
    super(_color, _fontWeight)
    this.radus = _radus
  }
  PrintCircelData() {
    const pi = 3.14159265359;
    let circleArea = this.radus * 2 * pi
    console.log(`The Area of the circle is ${circleArea}cm the color is: ${this.color} the fontWeight is: ${this.fontWeight}`)
  }
}

let newShape = new Shape("black", "15px")
let newRectangel = new Rectangel("black", 15, 20, 8)
let newCircle = new circle("black", "15px", 17)
// newShape.ColorAndWeight()
// newCircle.PrintCircelData()
// newRectangel.PrintArea()
console.log(Object.getPrototypeOf(newRectangel))

