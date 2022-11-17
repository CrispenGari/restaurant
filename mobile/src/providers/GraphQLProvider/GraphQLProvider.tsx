import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { __graphQLURI__ } from "../../constants";

const client = new ApolloClient({
  uri: __graphQLURI__,
  cache: new InMemoryCache(),
  credentials: "include",
});

interface Props {
  children: React.ReactNode;
}
const GraphQLProvider: React.FC<Props> = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default GraphQLProvider;
