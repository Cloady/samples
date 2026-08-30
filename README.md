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
cloady deploy --type=git https://github.com/NeptoLab/cloady-samples --subdir node-http
```

Every app listens on `PORT` (default 3000) and echoes its env so you can verify vars end to end.
