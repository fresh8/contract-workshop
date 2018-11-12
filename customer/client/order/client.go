package order

import (
	"context"
	"encoding/json"
	"net"
	"net/http"
	"net/url"
	"strconv"
	"time"
)

type Client struct {
	baseURL    string
	httpClient *http.Client
}

type Order struct {
	CustomerID int     `json:"customerID"`
	Products   []int   `json:"products"`
	Total      float64 `json:"total"`
}

func NewClient(address string, httpClientTimeout time.Duration) *Client {
	return &Client{
		baseURL: address,
		httpClient: &http.Client{
			Transport: &http.Transport{
				Dial: (&net.Dialer{
					Timeout:   httpClientTimeout,
					KeepAlive: 30 * time.Second,
				}).Dial,

				TLSHandshakeTimeout:   httpClientTimeout,
				ResponseHeaderTimeout: httpClientTimeout,
				DisableKeepAlives:     false,
				MaxIdleConns:          500,
			},

			Timeout: httpClientTimeout,
		},
	}
}

func (c *Client) GetCustomerOrders(ctx context.Context, customerID int) ([]Order, error) {
	req, err := http.NewRequest("GET", c.baseURL+"/orders", nil)
	if err != nil {
		return nil, err
	}
	req.Header.Set("Accept", "application/json")

	var qp = url.Values{}
	qp.Add("customerID", strconv.Itoa(customerID))
	req.URL.RawQuery = qp.Encode()

	resp, err := c.httpClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer resp.Body.Close()

	var orders []Order
	err = json.NewDecoder(resp.Body).Decode(&orders)

	return orders, err
}
