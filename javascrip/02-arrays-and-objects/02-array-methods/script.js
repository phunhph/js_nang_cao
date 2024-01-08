let x;

const arr = [28, 38, 44, 29, 109];

// push() - thêm vào cuối mảng
arr.push(100);

// pop() - xoá cuối mảng
arr.pop();

// unshift() - thêm vào đầu mảng
arr.unshift(99);

// shift() - xoá đầu mảng
arr.shift();

// reverse() -
arr.reverse();

// includes() - kiểm tra xem có tồn tại trong mảng không
x = arr.includes(445);

// indexOf() - tìm kiếm vị trí của phần tử trong mảng
x = arr.indexOf(28);

// Return đổi mảng thảnh chuỗi
x = arr.toString();
x = arr.join();

// slice() lấy giá trị từ vị trí số 1 đến số 4 nhưng k lấy vị trí số 4
x = arr.slice(1, 4);

// splice() lấy toàn bộ giá trị tự 1 - 4
x = arr.splice(1, 4);

// Remove a từ vị trí số 4 xoá 1 phần tử
x = arr.splice(4, 1);

// Chainin lấy giá trị cửa các phần từ từ 1-4 và đổi thành chuỗi đảo ngược rồi lấy giá trị đầu tiên
x = arr.slice(1, 4).reverse().toString().charAt(0);

console.log(x);
