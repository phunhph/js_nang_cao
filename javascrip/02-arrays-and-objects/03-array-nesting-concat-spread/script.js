let x;

const fruits = ["apple", "pear", "orange"];
const berries = ["strawberry", "blueberry", "rasberry"];

fruits.push(berries);

// lấy giá trị từ bàng 2 chiều có tạo độ 3;1
x = fruits[3][1];

// khai báo 1 mảng 2 chiều
const allFruits = [fruits, berries];

x = allFruits[1][2];

// concat() -
x = fruits.concat(berries);

// sao chép mảng, nối 2 mảng thành 1
x = [...fruits, ...berries];

// flat() - chuyển toàn bộ thành mảng 1 chiều
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat();

// isArray() - kiểm tra xem có phải array hay không
x = Array.isArray(fruits);

// from() - tạo mảng từ chuỗi
x = Array.from("12345");

// of() - taonj mảng từ các biến riêng biệt
const a = 1;
const b = 2;
const c = 3;

x = Array.of(a, b, c);

console.log(x);
