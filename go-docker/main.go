package main

import (
	"encoding/json"
	"log"
	"net/http"
	"os"
	"runtime"
)

func main() {
	port := os.Getenv("PORT")
	if port == "" {
		port = "3000"
	}
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("content-type", "application/json")
		greeting := os.Getenv("GREETING")
		if greeting == "" {
			greeting = "no GREETING set"
		}
		json.NewEncoder(w).Encode(map[string]string{
			"app":      "go-docker",
			"stack":    "go " + runtime.Version(),
			"path":     r.URL.Path,
			"greeting": greeting,
		})
	})
	log.Printf("go-docker listening on :%s", port)
	log.Fatal(http.ListenAndServe(":"+port, nil))
}
