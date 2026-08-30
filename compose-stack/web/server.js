const http = require("node:http");
const net = require("node:net");

const port = Number(process.env.PORT) || 3000;
const redisHost = process.env.REDIS_HOST || "redis";

function pingRedis() {
  return new Promise((resolve) => {
    const sock = net.connect({ host: redisHost, port: 6379, timeout: 1500 });
    const done = (result) => { sock.destroy(); resolve(result); };
    sock.on("connect", () => sock.write("PING\r\n"));
    sock.on("data", (buf) => done(buf.toString().trim()));
    sock.on("timeout", () => done("timeout"));
    sock.on("error", (err) => done("error: " + err.code));
  });
}

http.createServer(async (req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({
    app: "compose-stack",
    stack: "node " + process.version + " + redis",
    path: req.url,
    greeting: process.env.GREETING || "no GREETING set",
    redis: await pingRedis(),
  }, null, 2));
}).listen(port, () => console.log(`compose-stack web listening on :${port}`));
