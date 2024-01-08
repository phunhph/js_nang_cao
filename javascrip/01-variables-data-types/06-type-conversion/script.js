let amount = "hello";

// chuển từ chuỗi thành số
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);

// chuyển từ số thành chuổi
amount = amount.toString();
amount = String(amount);

// Convert string to decimal
amount = parseFloat(amount);

// chuyển thừ số thành đúng sai
amount = Boolean(amount);

// Ways to get NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log("foo" / 3);

console.log(amount, typeof amount);
