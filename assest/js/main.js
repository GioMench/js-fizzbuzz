//console.log('test');

let ulElement = document.getElementById("list");

for (let i = 1; i < 101; i++) {
    //console.log(i);

    if (i % 3 === 0 && i % 5 === 0) {
        //console.log('fizzbuzz');
        const both = document.createElement('li');
        both.innerText = 'FizzBuzz';
        both.setAttribute("class", "fizzbuzz")
        ulElement.append(both)


    } else if (i % 3 === 0) {
        //console.log('fizz');
        const three = document.createElement('li');
        three.innerText = 'Fizz';
        three.setAttribute("class", "fizz")
        ulElement.append(three)

    } else if (i % 5 === 0) {
        //console.log('buzz');
        const five = document.createElement('li');
        five.innerText = 'Buzz';
        five.setAttribute("class", "buzz")
        ulElement.append(five)

    } else {
        const other = document.createElement('li');
        other.innerText = i ;
        other.setAttribute("class", "other")

        ulElement.append(other)
    }

    

}

