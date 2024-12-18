try {
  const result = JSON.parse("Invalid JSON");
  console.log(result);
} catch (err) {
  console.log("Error occurred: ", err.message);
}
