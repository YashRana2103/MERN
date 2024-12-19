const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/contact" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const parsedData = JSON.parse(body);
      console.log("Form Data:", parsedData);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Form submitted successfully!" }));
    });
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found!");
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
