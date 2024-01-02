const p = new Promise((resolve, reject) => {
  resolve("Can restored the value");
});

async function getData() {
  return "Namaste";
}

const data = getData();
console.log(data);

data.then((res) => console.log(res));
