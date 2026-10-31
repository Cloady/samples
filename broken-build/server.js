const http = require("node:http");
const routes = require("./routes.json");

const port = Number(process.env.PORT) || 3000;

http.createServer((req, res) => {
  const body = routes[req.url];
  res.statusCode = body ? 200 : 404;
  res.end(body ? `${body}\n` : "not found\n");
}).listen(port, () => console.log(`broken-build listening on :${port}`));
