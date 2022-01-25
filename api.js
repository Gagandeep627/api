// get request using an api####################################>>>>>>
function getrequest() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      // console.log(json);

      let li = `<t><th>Name</th> <th>Email</th></t>`;
      json.forEach((user) => {
        // console.log(user);

        li += `<div>${user.name} ${user.email}</div>`;
        // console.log(user.name);
        // console.log(user.email);
      });

      document.querySelector(".main").innerHTML = li;
    });
}

getrequest();

//   post requst in an api##########################>>>>

function postrequest() {
  // main.js

  // POST request using fetch()
  fetch("https://jsonplaceholder.typicode.com/posts", {
    // Adding method type
    method: "POST",

    // Adding body or contents to send
    body: JSON.stringify({
        userId: 11,
        id: 100,
        title: "Gagu",
        body: "test post api"
    }),

    // Adding headers to the request
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    // Converting to JSON
    .then((response) => response.json())

    // Displaying results to console
    .then((json) => console.log(json));
}

postrequest();
