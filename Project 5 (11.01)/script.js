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
      console.log("error:", error);
    });
};

addUsers = () => {
  const name = inputUser.value;
  console.log(name);
  const innerUserElement = document.createElement("div");
  innerUserElement.innerHTML = `
        <img width='128px' height='128px'src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'></img> ${name} 
    `;
    containerData.append(innerUserElement)
  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name }),
  });
};

addButton.addEventListener("click", addUsers);
fetchUsers();

