const fs = require("node:fs");

const routes = JSON.parse(fs.readFileSync("routes.json", "utf8"));
fs.mkdirSync("dist", { recursive: true });
fs.writeFileSync("dist/routes.json", JSON.stringify(routes, null, 2));
fs.copyFileSync("server.js", "dist/server.js");
console.log(`built ${Object.keys(routes).length} routes`);
