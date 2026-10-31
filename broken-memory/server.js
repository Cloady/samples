const http = require("node:http");

const port = Number(process.env.PORT) || 3000;
const cacheMb = Number(process.env.CACHE_MB) || 1200;

console.log(`warming the cache: ${cacheMb} MB`);
const cache = Buffer.alloc(cacheMb * 1024 * 1024, 1);
console.log("cache ready");

http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  res.end(JSON.stringify({ app: "broken-memory", cacheMb, cachedBytes: cache.length }, null, 2));
}).listen(port, () => console.log(`broken-memory listening on :${port}`));
