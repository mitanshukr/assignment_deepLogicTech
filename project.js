const http = require("http");
const data = require("./data.json");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
      "<h1>Welcome here!</h1><p>Please <a href='/getTimeStories'>click here</a> to get Data.</p>"
    );
  } else if (req.url === "/getTimeStories") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(8000, () => {
  console.log("server started...on 8000");
});
