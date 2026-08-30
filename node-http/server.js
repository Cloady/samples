const http = require("node:http");

const port = Number(process.env.PORT) || 3000;

http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({
    app: "node-http",
    stack: "node " + process.version,
    path: req.url,
    greeting: process.env.GREETING || "no GREETING set",
  }, null, 2));
}).listen(port, () => console.log(`node-http listening on :${port}`));
