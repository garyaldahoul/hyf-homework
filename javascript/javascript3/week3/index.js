// circle 1

const canvas_1 = document.getElementById("canvas_1")

const context_1 = canvas_1.getContext('2d');
const centerX_1= canvas_1.width / 2;
const centerY_1= canvas_1.height / 2;
const radius_1 = 50;

context_1.beginPath();
context_1.arc(centerX_1, centerY_1, radius_1, 0, 2 * Math.PI, false);
context_1.fillStyle = 'green';
context_1.fill();
context_1.lineWidth = 10;
context_1.strokeStyle = '#000';
context_1.stroke();


const context_12 = canvas_1.getContext('2d');
const centerX_12= canvas_1.width / 2;
const centerY_12= canvas_1.height / 2;
const radius_12 = 25;

context_12.beginPath();
context_12.arc(centerX_12, centerY_12, radius_12, 0, 2 * Math.PI, false);
context_12.fillStyle = 'green';
context_12.fill();
context_12.lineWidth = 10;
context_12.strokeStyle = '#000';
context_12.stroke();


// circle 2


const canvas_2 = document.getElementById("canvas_2")

const context_2= canvas_2.getContext('2d');
const centerX_2= canvas_2.width / 2;
const centerY_2 = canvas_2.height / 2;
const radius_2 = 50;

context_2.beginPath();
context_2.arc(centerX_2, centerY_2, radius_2, 0, 2 * Math.PI, false);
context_2.fillStyle = 'green';
context_2.fill();
context_2.lineWidth = 10;
context_2.strokeStyle = '#000';
context_2.stroke();



// circle canvas

const class_canvas = document.getElementById("class_canvas")

class Circle{
    constructor(x,y,r,color,lineWidth,strokeStyle){
        this.x=x,
        this.y=y,
        this.r=r,
        this.color= color,
        this.color=lineWidth,
        this.strokeStyle=strokeStyle
    }
    createCircle(){
        const context = class_canvas.getContext('2d');
        context.beginPath()
        context.arc(this.x,this.y,this.r,0,2*Math.PI,false)
        context.fillStyle =this.color;
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle=this.strokeStyle;
        context.stroke()
    }
}

const c1= new Circle(50,100,10,"#000",5,"#f00")
c1.createCircle();

const c2= new Circle(100,50,10,"#000",5,"#f00");
c2.createCircle();

const c3= new Circle(75,75,10,"#000",5,"#f00");
c3.createCircle();

const c4= new Circle(25,25,10,"#000",5,"#f00");
c4.createCircle();

const c5= new Circle(50,50,10,"#000",5,"#f00");
c5.createCircle();

const c6= new Circle(100,100,10,"#000",5,"#f00");
c6.createCircle();



// class Circle 

const class_circle = document.getElementById("class_circle")
class classCircle{
    constructor(x, y, r, startAngle, endAngle, fillColor){
        this.x=x,
        this.y=y,
        this.r=r,
        this.startAngle=startAngle,
        this.endAngle=endAngle,
        this.fillColor=fillColor
    }

    draw(){
        const context = class_circle.getContext('2d');
        context.beginPath()
        context.arc(this.x,this.y,this.r,0,2*Math.PI,false)
        context.fillStyle =this.fillColor;  
        context.fill();
        context.lineWidth = this.lineWidth;
        context.strokeStyle=this.strokeStyle;
        context.stroke()
    }
  
}

const c12 = new classCircle(50, 50, 20, 0, 2 * Math.PI, "#f00");
c12.draw();




// Getting into promises


// fetch("https://api.github.com/search/repositories?q=user:benna100").then((req)=>req.json()).then((data)=>console.log(data))


// function fetching(url) {
//     fetch(`https://api.github.com/search/repositories?q=user:${url}`).then((rep) => createData(rep));
//   }
//   function createData(rep) {
//     rep
//       .json()
//       .then((d) => d.items.forEach((el) => console.log(el.full_name, el.url)));
//   }
//   function delay(time) {
//     return new Promise((resolve, reject) => {
//       isNaN(time)
//         ? reject(new Error("delay requires a valid number"))
//         : setTimeout(resolve, time);
//     });
//   }
//   function fetchingAll() {
//     delay(1000)
//       .then(() => {
//         fetching(
//           "https://api.github.com/search/repositories?q=user:garyaldahoul"
//         );
//       })
//       .then(() => {
//         fetching(
//           "https://api.github.com/search/repositories?q=user:mohamedaldahoul"
//         );
//       })
//       .then(() => {
//         fetching("https://api.github.com/search/repositories?q=user:benna100");
//       });
//   }
//   fetchingAll();




  // const names= ["garyaldahoul","mohamedaldahoul","benna100"]


  // function fetchAll() {
  //   return new Promise((resolve) => {
  //       resolve(
  //           Promise.all(names).then((names)=>fetching(names.forEach((name)=>fetching(name))))
  //       )
  //   });
  // }

  // fetchAll()




  // random circle


  const randomCircleCanvas = document.getElementById("randomCircleCanvas")

  class randomCircle{
    
    constructor(){
        this.x=Math.floor(Math.random()*100)
        this.y=Math.floor(Math.random()*100)
        this.r=Math.floor(Math.random()*10)
        this.fillColor=getRandomColor()
    }

    draw(){
      console.log("Random Circle")
        const context = randomCircleCanvas.getContext('2d');
        context.beginPath()
        context.arc(this.x,this.y,this.r,0,2*Math.PI,false)
        context.fillStyle =this.fillColor;  
        context.fill();
        context.lineWidth = Math.floor(Math.random()*5)
        context.stroke()
    }
 
  
}


// cursorRandomCircleCanvas.width="800px"
// cursorRandomCircleCanvas.height="400px"

const cursorRandomCircleCanvas = document.getElementById("cursorRandomCircleCanvas")
cursorRandomCircleCanvas.width="800"
cursorRandomCircleCanvas.height="800"



cursorRandomCircleCanvas.addEventListener("mousemove",function drawCursorCircle(e){

  const x = e.clientX
  const y = e.clientY
  
  const r=Math.floor(Math.random()*10)
  
  const fillColor=getRandomColor()
  const strokeStyle = getRandomColor()
  const context = cursorRandomCircleCanvas.getContext("2d")
  context.beginPath()
    context.arc(x,y,r,0,2*Math.PI,false)
    context.fillStyle =fillColor;  
    context.fill();
    context.lineWidth = Math.floor(Math.random()*5)
    context.strokeStyle = strokeStyle
    context.stroke()
    console.log(x,y)
    console.log(r)
    console.log("c")
    console.log(strokeStyle)
    console.log(fillColor)  
   

})

// setInterval(()=>{
//   const c = new randomCircle()
// c.draw()
// },100)

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



