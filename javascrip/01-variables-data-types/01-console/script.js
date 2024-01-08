// hiển thị số
console.log(100);

// hiển thị chữ
console.log("Hello World");

// hiển thị nhiều loại dữ liệu
console.log(20, "Hello", true);

// hiển thị giá trị của biến a
const x = 100;
console.log(x);

// hiển hị lỗi và cảnh báo
console.error("Alert");
console.warn("Warning");

// hiển thị đối tội dạng bảng
console.table({ name: "Brad", email: "brad@gmail.com" });

// hiển thị theo nhóm
console.group("simple");
console.log(x);
console.error("Alert");
console.warn("Warning");
console.groupEnd();

// thêm dữ liệu vào console
const styles = "padding: 10px; background-color: white; color: green";
console.log("%cHello World", styles);
