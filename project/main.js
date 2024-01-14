const url = "http://localhost:4000/users";
const table = document.getElementById("table");
const userForm = document.querySelector(".form-user");
getAllUsers();
function getAllUsers() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      data = data.data;
      data.forEach((element) => {
        renderUser(element);
      });
    });
}

const renderUser = (user) => {
  const output = `
    <tr data-id="${user._id}">
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.password}</td>
      <td>
        <a class="btn-edit btn btn-primary btn-sm" data-target="#exampleModalCenter" data-toggle="modal">Edit</a> |
        <a class="btn-del btn btn-danger btn-sm">Del</a>
      </td>
    </tr>`;
  table.insertAdjacentHTML("beforeend", output);

  // delete event
  const btndel = document.querySelector(`[data-id='${user._id}'] .btn-del`);
  if (btndel) {
    btndel.addEventListener("click", (event) => {
      if (confirm("Are you sure you want to delete this user?")) {
        fetch(`${url}/${user._id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then(() => {
            // Remove the deleted user from the UI
            const deletedRow = document.querySelector(
              `[data-id='${user._id}']`
            );
            if (deletedRow) {
              deletedRow.remove();
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error.message);
          });
      }
    });
  } else {
    console.error(
      `Button with class 'btn-del' not found for user with id ${user._id}`
    );
  }

  // edit event
  const btnEdit = document.querySelector(`[data-id='${user._id}'] .btn-edit`);
  if (btnEdit) {
    btnEdit.addEventListener("click", (event) => {
      fetch(`${url}/${user._id}`, {
        method: "GET",
      })
        .then((res) => res.json())
        .then((data) => {
          data = data.data;
          userForm.name.value = data.name;
          userForm.email.value = data.email;
          userForm.password.value = data.password;
          userForm.id.value = data._id;
        });
    });
  } else {
    console.error(
      `Button with class 'btn-edit' not found for user with id ${user._id}`
    );
  }
};
// create user

// Thêm lắng nghe sự kiện cho sự kiện nộp biểu mẫu
userForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn hành vi mặc định của việc nộp biểu mẫu
  if (userForm.id) {
    updateUser(userForm);
  } else {
    createUser(userForm);
  }
});

// Hàm để tạo mới người dùng
const createUser = (userData) => {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name.value,
      email: userData.email.value,
      password: userData.password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      const newUser = data.data;
      renderUser(newUser);
    })
    .catch((error) => {
      console.error("Lỗi tạo mới người dùng:", error.message);
    });
};

// hàm sửa người dùng
const updateUser = (userData) => {
  fetch(`${url}/${userData.id.value}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userData.name.value,
      email: userData.email.value,
      password: userData.password.value,
    }),
  })
    .then((res) => res.json())
    .then((data) => {})
    .catch((error) => {
      console.error("Error updating user:", error.message);
    });
};
