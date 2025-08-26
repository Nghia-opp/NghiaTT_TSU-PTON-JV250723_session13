let number = [25, 36, 85, 75, 96];

let random = Number(prompt("Mời viết số ngẫu nhiên"));

let falesNumber = false;
for (let i = 0; i < number.length; i++){
    if (number[i] === random) {
        falesNumber = true; 
    } 
}

if (falesNumber) {
        alert("Binggo");
    } else {
        alert("Chúc bạn may mắn lần sau");
    }
