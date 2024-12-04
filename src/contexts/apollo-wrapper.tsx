import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

type ApolloWrapperProps = {
  children: React.ReactNode;
};

const ApolloWrapper = ({ children }: ApolloWrapperProps) => {
  const client = new ApolloClient({
    uri: "https://netflix-server-one.vercel.app/graphql",
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
