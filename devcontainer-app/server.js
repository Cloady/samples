const http = require("node:http");

const port = Number(process.env.PORT) || 3000;

http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({
    app: "devcontainer-app",
    stack: "node " + process.version + " via .devcontainer",
    path: req.url,
    greeting: process.env.GREETING || "no GREETING set",
  }, null, 2));
}).listen(port, () => console.log(`devcontainer-app listening on :${port}`));
