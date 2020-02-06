import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-boost";
import App from "./App";

const httpLink = createHttpLink({
  uri: "http://localhost:1337/graphql"
});

const cache = new InMemoryCache();
const client = new ApolloClient({
  link: httpLink,
  cache
});
const rootElement = document.getElementById("root");
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  rootElement
);
