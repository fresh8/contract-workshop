package main

import (
	"fmt"
	"net/http"
)

func main() {
	fmt.Println("Starting Customer API")

	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Welcome to my website!")
	})

	http.ListenAndServe(":3003", nil)
}
