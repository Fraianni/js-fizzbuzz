const grid = document.getElementById('grid');


for (let i = 1; i <= 100; i++) {
    const new_div = document.createElement('div');

    if (i % 3 === 0 && i % 5 === 0) {
        console.log('fizz-buzz');
        new_div.append("fizz-buzz");
        new_div.style.backgroundColor = "red";
    }

    else if (i % 3 === 0) {
        console.log('fizz');
        new_div.append("fizz");
        new_div.style.backgroundColor = "green";

    }


    else if (i % 5 === 0) {
        console.log('buzz');
        new_div.append("buzz");
        new_div.style.backgroundColor = "pink";

    }


    else {
        console.log(i);
        new_div.append(i);
    }

    grid.append(new_div);



}