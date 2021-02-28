const { gql } = require('apollo-server-express')
const controller = require('./controller')

const typeDefs = gql`
  type City {
    id: String
    city: String
  }

  type Place {
    id: String
    place: String
    cityId: String
  }

  type Query {
    cities: [City]
    places(cityId: String): [Place]
  }

  type Mutation {
    addPlace(place: String, cityId: String): Place
  }
`
const resolvers = {
  Query: {
    async cities() {
      return await controller.getCities()
    },
    async places(_, { cityId }) {
      return await controller.getPlaces(cityId)
    },
  },
  Mutation: {
    async addPlace(_, { place, cityId }) {
      return await controller.addPlace(place, cityId)
    },
  },
}

module.exports = { typeDefs, resolvers }
