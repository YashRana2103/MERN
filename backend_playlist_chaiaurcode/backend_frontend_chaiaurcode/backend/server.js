import express from "express";
import cors from "cors";

const app = express();

// app.use(cors());

// app.get("/", (req, res) => {
//   //   console.log("Server is ready");
//   res.send("Server is ready");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "Content of Joke 1",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "Content of Joke 2",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "Content of Joke 3",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "Content of Joke 4",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "Content of Joke 5",
    },
  ];
  res.status(200).send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at http://localhost:${port}`);
});
