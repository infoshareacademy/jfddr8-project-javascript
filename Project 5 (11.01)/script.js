const containerData = document.querySelector("#data");
const addButton = document.querySelector("#addMe");
const inputUser = document.querySelector("#username");

const fetchUsers = () => {
  fetch("https://reqres.in/api/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      console.log(result.data);
      const usersData = result.data;
      const userElement = usersData.map((element) => {
        const innerUserElement = document.createElement("div");
        innerUserElement.innerHTML = `
        <img src=${element.avatar}></img> ${element.first_name}  ${element.last_name}  
    `;
        return innerUserElement;
      });
      containerData.append(...userElement);
    })
    .catch(function (error) {
      console.log(error);
    });
};

addUsers = (username) => {
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username }),
  }).then(() => {
    fetchUsers()
  });
};

addButton.addEventListener("click", addUsers);
fetchUsers()