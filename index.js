// Code your solutions in this file
const list = ["Emily", "Zoey", "Anastasia"];

function writeCards(list, event) {
    let thanksList = [];
    for (let i = 0; i < list.length; i++) {
         thanksList.push(`Thank you, ${list[i]}, for the wonderful ${event} gift!`)
         debugger;
  }

    return thanksList;
}

writeCards(list, 'birthday'); 


function countDown(number){
    let count = number;
    debugger;
    while (count > -1) {   
        debugger;    
        console.log(count);
        count -= 1;
        debugger;
    }
}

countDown(8);