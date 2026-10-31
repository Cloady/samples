const http = require("node:http");

const port = Number(process.env.PORT) || 3000;

http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ app: "broken-start", stack: "node " + process.version, path: req.url }, null, 2));
}).listen(port, () => console.log(`broken-start listening on :${port}`));
