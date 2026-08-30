import json
import os
import sys
from http.server import BaseHTTPRequestHandler, HTTPServer

PORT = int(os.environ.get("PORT", "3000"))


class Handler(BaseHTTPRequestHandler):
    def do_GET(self):
        body = json.dumps({
            "app": "python-web",
            "stack": "python " + sys.version.split()[0],
            "path": self.path,
            "greeting": os.environ.get("GREETING", "no GREETING set"),
        }, indent=2).encode()
        self.send_response(200)
        self.send_header("content-type", "application/json")
        self.end_headers()
        self.wfile.write(body)


if __name__ == "__main__":
    print(f"python-web listening on :{PORT}", flush=True)
    HTTPServer(("", PORT), Handler).serve_forever()
