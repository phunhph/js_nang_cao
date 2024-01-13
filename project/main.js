const url = "http://localhost:4000/users";
const table = document.getElementById("table");
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
        <a class="btn-edit btn btn-primary btn-sm">Edit</a> |
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
      // Implement edit logic here
      console.log("Edit button clicked for user with id:", user._id);
    });
  } else {
    console.error(
      `Button with class 'btn-edit' not found for user with id ${user._id}`
    );
  }
};
