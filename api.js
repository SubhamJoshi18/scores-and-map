const GITHUB_API = "https://api.github.com/users/SubhamJoshi18";

const user = fetch(GITHUB_API);
//capture promise in the object

console.log(user);

user.then((data) => {
  console.log(data);
});
