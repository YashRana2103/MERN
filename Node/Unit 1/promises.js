function getUsers(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id == 1) {
        resolve({ id: 1, name: "rahul" });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

getUsers(2)
  .then((user) => {
    console.log("user: ", user);
  })
  .catch((err) => console.log(err));
