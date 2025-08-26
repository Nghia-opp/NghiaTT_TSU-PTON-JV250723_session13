let number = [];

for (let i = 1; i <= 20; i++) {
    number.push(Math.floor(Math.random()* 100));
}
alert(number);

let evenNumber = 0;
let oddNumber = 0;
for (let i = 0; i < number.length-1; i++ ) {
    if(number[i]%2 === 0){
        evenNumber += number[i];
    } else {
        oddNumber += number[i]; 
    }
}

alert(`tổng các số lẻ bằng ${oddNumber}`);
alert(`tổng các số chẵn bằng ${evenNumber}`);