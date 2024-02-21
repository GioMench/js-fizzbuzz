//console.log('test');

let ulElement = document.getElementById("list");

for (let i = 1; i < 101; i++) {
    //console.log(i);
    //ulElement.innerHTML += `<li> ${i} </li>`

    let threeMultiple = 'Fizz'
    
    let fiveMultiple = 'Buzz'

    let bothMultiple = 'FizzBuzz'


    if(i % 3 === 0){
        ulElement.innerHTML += threeMultiple
        //console.log(i);
    } else if(i % 5 === 0){
        ulElement.innerHTML += fiveMultiple
    } else if(i % 3 === 0 && i % 5 === 0){
        ulElement.innerHTML += bothMultiple
    } else{
        ulElement.innerHTML += `<li> ${i} </li>`
    }
    


   

}