document.addEventListener("DOMContentLoaded", function () {
  const addButton = document.querySelector('button[value="Add User"]');
  const filterButton = document.querySelector('button[value="Filter"]');
  const professionSelect = document.getElementById("prof");
  const userContainer = document.getElementById("user-container");
  const bottomInputs = document.querySelector(".bottom-inputs");

  const users = [];

  addButton.addEventListener("click", function () {
    const nameInput = bottomInputs.querySelector('input[name="name"]');
    const professionInput = bottomInputs.querySelector(
      'input[name="profession"]'
    );
    const ageInput = bottomInputs.querySelector('input[name="age"]');

    const user = {
      name: nameInput.value,
      profession: professionInput.value,
      age: ageInput.value,
    };

    users.push(user);

    nameInput.value = "";
    professionInput.value = "";
    ageInput.value = "";

    displayUsers();
  });

  filterButton.addEventListener("click", function () {
    const selectedProfession = professionSelect.value;
    const filteredUsers = users.filter(function (user) {
      return user.profession === selectedProfession;
    });

    displayUsers(filteredUsers);
  });

  function displayUsers(filteredUsers) {
    userContainer.innerHTML = "";

    const userList = filteredUsers || users;

    userList.forEach(function (user) {
      const userElement = document.createElement("p");
      userElement.textContent = `Name: ${user.name}, Profession: ${user.profession}, Age: ${user.age}`;
      userContainer.appendChild(userElement);
    });
  }
});
