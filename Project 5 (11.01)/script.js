const containerData = document.querySelector("#data");

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













