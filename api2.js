const API_URL = "https://api.github.com/users/SubhamJoshi18";
async function handlePromise() {
  try {
    const data = await fetch(API_URL);
    const jsonvalue = await data.json();
    console.log(jsonvalue);
  } catch (err) {
    console.log(err);
  }
  //fetch return the respond
}

handlePromise().catch((err) => console.log(err));
