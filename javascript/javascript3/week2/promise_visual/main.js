
    const redBox = document.querySelector('ul.marks li:nth-child(1)');
    const blueBox = document.querySelector('ul.marks li:nth-child(2)');
    const greenBox = document.querySelector('ul.marks li:nth-child(3)');
    const boxes = [redBox, blueBox, greenBox];

async function translateOneByOne(){
    await delay(2)
    await moveElement(redBox,{  x: 20, y: 300})
    await delay(2)
    await moveElement(blueBox,{x: 400, y: 300})
    await delay(2)
    await moveElement(greenBox,{x: 400, y: 20})

}


//   async function translateOneByOne(){
//       await delay(2)
//       await moveElement(redBox,{x: 20, y: 300})
//       await moveElement(blueBox,{x: 400, y: 300})
//       await moveElement(greenBox,{x: 400, y: 20})
    
// }

// function translateOneByOne(){
//     delay(2)
//     .then(()=>moveElement(redBox,{x: 20, y: 300}))
//     .then(()=>moveElement(blueBox,{x: 400, y: 300}))
//     .then(()=>moveElement(greenBox,{x: 400, y: 20}))
// }


function delay(delayTime) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, delayTime*1000);
    });
  }

  //translateOneByOne()

function translateAllAtOnce(){
    delay(2).then(()=>  
    allPromise = [
      moveElement(redBox,{x: 20, y: 300}),
      moveElement(blueBox,{x: 400, y: 300}),
      moveElement(greenBox,{x: 400, y: 20})])
}

//   async function translateAllAtOnce(){
//       await delay(2)
//       moveElement(redBox,{x: 20, y: 300})
//       moveElement(blueBox,{x: 400, y: 300})
//        moveElement(greenBox,{x: 400, y: 20})
// }

  translateAllAtOnce()