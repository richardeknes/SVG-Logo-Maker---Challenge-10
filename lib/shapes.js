class Shape {
    constructor(userLetters, textColor, shapeColor) {
        this.userLetters = userLetters;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(userLetters, textColor, shapeColor) {
   super(userLetters, textColor, shapeColor) 
}
render(){
    return`
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.userLetters}</text>

 </svg>
    `
}
}
class Square extends Shape {
    constructor(userLetters, textColor, shapeColor) {
   super(userLetters, textColor, shapeColor) 
}
render(){
    return`
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.userLetters}</text>

 </svg>
    `
}
}
class Triangle extends Shape {
    constructor(userLetters, textColor, shapeColor) {
   super(userLetters, textColor, shapeColor) 
}
render(){
    return`
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />
  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.userLetters}</text>

 </svg>
    `
}
}

module.exports = {Circle, Triangle, Square};