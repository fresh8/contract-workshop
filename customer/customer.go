package main

import (
	"context"

	"github.com/fresh8/contract-workshop/customer/client/order"
)

type customer struct {
	ID              int           `json:"id"`
	Name            name          `json:"name"`
	Age             int           `json:"age"`
	FavouriteColour string        `json:"favourite_colour"`
	FavouriteShape  string        `json:"favourite_shape"`
	Orders          []order.Order `json:"orders,omitempty"`
}

type name struct {
	First string `json:"first"`
	Last  string `json:"last"`
}

var customers = []customer{
	customer{
		ID: 5000,
		Name: name{
			First: "Dom",
			Last:  "Udall",
		},
		Age:             32,
		FavouriteColour: "Grey",
		FavouriteShape:  "Pentagon",
	},
	customer{
		ID: 5005,
		Name: name{
			First: "Chris",
			Last:  "Augier",
		},
		Age:             42,
		FavouriteColour: "Burnt Orange",
		FavouriteShape:  "Rhombus",
	},
}

func (c *customer) PopulateOrders() error {
	orders, err := orderClient.GetCustomerOrders(context.Background(), c.ID)
	if err != nil {
		return err
	}
	c.Orders = orders
	return nil
}
