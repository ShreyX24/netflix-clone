import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type ApolloWrapperProps = {
  children: React.ReactNode;
};

const ApolloWrapper = ({ children }: ApolloWrapperProps) => {
  const client = new ApolloClient({
    uri: "http://localhost:3001/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
