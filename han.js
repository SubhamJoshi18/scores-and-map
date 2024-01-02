const p = new Promise((resolve, reject) => {
  resolve("Asyc await");
});
/*
function handleError() {
  p.then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => {
      console.log("handle");
    });
}

console.log(handleError());
*/

async function handlePromise() {
  const value = await p;
  console.log(value);
}

console.log(handlePromise());
