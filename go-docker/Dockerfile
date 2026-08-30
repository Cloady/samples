FROM golang:1.23-alpine AS build
WORKDIR /src
COPY go.mod main.go ./
RUN CGO_ENABLED=0 go build -o /out/server .

FROM alpine:3.20
COPY --from=build /out/server /server
EXPOSE 3000
CMD ["/server"]
