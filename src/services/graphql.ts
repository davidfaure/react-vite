import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

export const getShips = () =>
  client
    .query({
      query: gql`
        query Ships {
          ships {
            id
            name
            type
            model
            image
            url
            active
            year_built
            weight_kg
          }
        }
      `,
    })
    .then((res) => res.data.ships);
