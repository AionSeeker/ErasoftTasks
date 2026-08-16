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
    let areaOfRectangle = this.Width * this.Height
    console.log(`The Area is ${areaOfRectangle}cm other info color: ${this.color} fontWeight: ${this.fontWeight}`)
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
    console.log(`The Area is ${circleArea}cm other info color: ${this.color} fontWeight: ${this.fontWeight}`)
  }
}

let newShape = new Shape("black", "15px")
//console.log(newShape.ColorAndWeight())

let newCircle = new circle("black", "15px", 17)
console.log(newCircle.PrintCircelData())

