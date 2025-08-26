let number = prompt("nhập vào dãy số bất kỳ");

let array = number.split('');

for (let i = 0; i < number.length;i++ ) {
    array[i] = Number(array[i]); // ép kiêu từ string sang number
} 

let max = array[0];

for (let i = 1; i < number.length; i++){
    if (array[i] > max) {
        max = array[i];
    }
}

alert(`phần tử có giá trị lớn nhất trong mảng là ${max}`);



