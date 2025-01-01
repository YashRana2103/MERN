async function fetchAllData() {
  const [data1, data2] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
      res.json()
    ),
    fetch("https://jsonplaceholder.typicode.com/users/2").then((res) =>
      res.json()
    ),
  ]);

  console.log("Data 1:", data1.name);
  console.log("Data 2:", data2.name);
}

fetchAllData();
