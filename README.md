# cloady-samples

Minimal apps for exercising every Cloady deploy path. Each folder is self-contained.

| Sample | Stack | Path it exercises |
|---|---|---|
| `node-http` | Node.js, zero deps | railpack build from git (`--subdir node-http`) or folder upload |
| `nextjs-app` | Next.js (JS, app router) | railpack framework build |
| `python-web` | Python stdlib | railpack build |
| `php-page` | PHP | railpack build |
| `go-docker` | Go + Dockerfile | Dockerfile build (railpack skipped) |
| `devcontainer-app` | Node, `.devcontainer` + package.json | env-dependent: **development** builds `.devcontainer/Dockerfile` (and gets `GREETING` from `containerEnv`), **production** ignores the devcontainer and builds with railpack |
| `compose-stack` | Node + Redis via docker-compose | native compose template: build service, expose, named volume, `${VAR}` interpolation |

Deploy a folder with the CLI:

```sh
cloady deploy ./node-http
cloady deploy ./compose-stack
```

or from git with a subdirectory:

```sh
cloady deploy --type=git https://github.com/Cloady/samples --subdir node-http
```

Every app listens on `PORT` (default 3000) and echoes its env so you can verify vars end to end.

## Broken samples

Each one fails to deploy in a different way, for trying **Ask AI to fix** on a failed deploy.

| Sample | What goes wrong | What fixes it |
|---|---|---|
| `broken-start` | The build succeeds, but there's no start script and no entry file Railpack can find, so the container exits as soon as it starts | Set `RAILPACK_START_CMD` to `node app/server.js`, which Magic fix can do |
| `broken-memory` | It fills a 1.2 GB cache at startup in a 1 GB container and is killed for running out of memory | `CACHE_MB` below about 900, or a higher memory scale; Magic fix can do either, and the scale costs money |
| `broken-build` | `routes.json` has a trailing comma, so `npm run build` fails | Delete the comma: a change to the code, which the AI explains but can't make |

```sh
cloady deploy --type=git https://github.com/Cloady/samples --subdir broken-memory
```
