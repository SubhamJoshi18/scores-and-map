const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the first Promise");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is the secon Promise");
  }, 5000);
});

async function getData() {
  console.log("Hello world");
  const val = await p1;
  console.log("This is the first await");
  console.log(val);

  const val2 = await p2;
  console.log("This is the second await");
  console.log(val2);
}

getData();

function getData2() {
  p1.then(function (res) {
    console.log(res);
  });
  console.log(";");
}
