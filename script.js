let api = "https://randomuser.me/api";

async function fetchUser() {
  try {
    let fetchedData = await fetch(api);
    // console.log(fetchedData);

    let fetchedUser = await fetchedData.json();
    // console.log(fetchedUser);

    let users = fetchedUser.results[0];
    // console.log(user);

    localStorage.setItem("random-user", users);
    JSON.stringify(users);

    displayUser(users);
  } catch (error) {
    console.log(error);
  }
}

function displayUser(user) {
  document.querySelector("#user-image").src = user.picture.large;
  document.querySelector(
    "#user-name"
  ).innerHTML = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`;

  document.querySelector("#user-email").innerHTML = `Email: ${user.email}`;
  document.querySelector("#user-gender").innerHTML = `Gender: ${user.gender}`;
  document.querySelector(
    "#user-address"
  ).innerHTML = `Address: ${user.location.city}, ${user.location.state}, ${user.location.country}`;
}

let btn = document.querySelector("#new-user");

btn.addEventListener("click", fetchUser);

fetchUser()
