import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
})

export const getCities = async () => {
  const results = await client.query({
    query: gql`
      query GetCities {
        cities {
          id
          city
        }
      }
    `,
  })

  return results
}

export const getPlaces = async (cityId) => {
  const query = `query GetPlaces {
    places(cityId : "${cityId}"){
     id, 
     place
   }
 }`

  const results = await client.query({
    query: gql`
    query GetPlaces {
      places(cityId : "${cityId}"){
       id, 
       place
     }
   }
    `,
  })

  return results
}
