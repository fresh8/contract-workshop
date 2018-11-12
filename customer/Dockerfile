FROM golang:1.11.2-alpine

RUN apk update; apk upgrade
RUN apk add git

RUN go get -u github.com/golang/dep/cmd/dep

WORKDIR /go/src/github.com/fresh8/contract-workshop/customer

CMD go build && go get github.com/pilu/fresh && fresh

EXPOSE 3003
