let x;

// tạo 1 mảng object
const person = {
  name: "John Doe",
  age: 30,
  isAdmin: true,
  address: {
    street: "123 Main st",
    city: "Boston",
    state: "MA",
  },
  hobbies: ["music", "sports"],
};

// Accessing object properties
x = person.name; //lấy tên
x = person["age"]; //  lấy tuổi
x = person.address.state;
x = person.hobbies[0];

// thay đổi tên, quyền hạn
person.name = "Jane Doe";
person["isAdmin"] = false;

// xoá tuổi
delete person.age;

// tạo thêm thuộc tinh
person.hasChildren = true;

//
person.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

person.greet();

// tạo thuộc tinh bàng chuỗi
const person2 = {
  "first name": "Brad",
  "last name": "Traversy",
};

x = person2["first name"];

console.log(x);
