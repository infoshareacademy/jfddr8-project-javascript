const containerData = document.querySelector(".data");
const addButton = document.querySelector("#addMe");
const inputUser = document.querySelector("#username");

const fetchUser = () => {
  fetch("https://reqres.in/api/users")
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result.data);
      const userData = result.data;
      const userElement = userData.map((element) => {
        const innerUserElement = document.createElement("div");
        innerUserElement.innerHTML = `
      <img src=${element.avatar}></img>${element.first_name} ${element.last_name}
      `;
        return innerUserElement;
      });
      containerData.append(...userElement);
    })
    .catch((error) => console.log(error));
};
fetchUser();

addUsers = () => {
  const name = inputUser.value;
  const innerUserElement = document.createElement("div");
  if (name !== "") {
    innerUserElement.innerHTML = "LOADING........";
    setTimeout(() => {
      innerUserElement.innerHTML = `
        <img width='128px' height='128px'src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img> ${name} `;
    }, 5000);
    containerData.append(innerUserElement);
  }

  fetch("https://reqres.in/api/users", {
    method: inputUser.value === "" ? "PSOT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  }).catch(() => {
    alert("Podaj nazwę użytkownika");
    innerUserElement.innerHTML = "";
  });
};

addButton.addEventListener("click", addUsers);
fetchUsers();
