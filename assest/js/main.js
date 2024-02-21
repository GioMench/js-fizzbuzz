//console.log('test');

let ulElement = document.getElementById("list");

for (let i = 1; i < 101; i++) {
    //console.log(i);

    // document.createElement()
    // append()

    // const li = document.createLement("li")
    //li.

    // ullElement.append(elemntoLiCreatoSopra)
 

    if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
    } else if (i % 3 === 0){
        console.log('fizz');
    } else if(i % 5 === 0){
        console.log('buzz');
    } else{
        console.log(i);
    }
    
    let markupElement = `<li> ${i} </li>`
    ulElement.insertAdjacentHTML("beforeend", markupElement)

}

