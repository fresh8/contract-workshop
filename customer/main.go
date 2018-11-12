package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
	"time"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"

	"github.com/fresh8/contract-workshop/customer/client/order"
)

var orderClient *order.Client

func main() {
	fmt.Println("Starting Customer API")

	orderClient = order.NewClient("http://order:3001", time.Second*10)

	r := mux.NewRouter()
	r.HandleFunc("/customers", customersHandler)
	r.HandleFunc("/customers/{id:[0-9]+}", customerHandler)
	http.Handle("/", r)

	headersOk := handlers.AllowedHeaders([]string{"X-Requested-With"})
	originsOk := handlers.AllowedOrigins([]string{"*"})
	methodsOk := handlers.AllowedMethods([]string{"GET", "HEAD", "POST", "PUT", "OPTIONS"})

	http.ListenAndServe(":3003", handlers.CORS(originsOk, headersOk, methodsOk)(r))
}

func customersHandler(w http.ResponseWriter, r *http.Request) {
	payload, err := json.Marshal(customers)
	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "[]")
		return
	}

	w.WriteHeader(http.StatusOK)
	w.Write(payload)
}

func customerHandler(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	customerID, err := strconv.Atoi(vars["id"])
	if err != nil {
		fmt.Println(err)
		w.WriteHeader(http.StatusInternalServerError)
		fmt.Fprintf(w, "[]")
		return
	}

	for _, customer := range customers {
		if customer.ID == customerID {
			err = customer.PopulateOrders()
			if err != nil {
				fmt.Println(err)
				w.WriteHeader(http.StatusInternalServerError)
				fmt.Fprintf(w, "[]")
				return
			}

			payload, err := json.Marshal(customer)
			if err != nil {
				fmt.Println(err)
				w.WriteHeader(http.StatusInternalServerError)
				fmt.Fprintf(w, "[]")
				return
			}

			w.WriteHeader(http.StatusOK)
			w.Write(payload)
			return
		}
	}

	w.WriteHeader(http.StatusNotFound)
	fmt.Fprintf(w, "{}")
}
