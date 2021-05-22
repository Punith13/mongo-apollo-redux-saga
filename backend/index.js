require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const { ApolloServer, makeExecutableSchema } = require('apollo-server-express')
const router = require('./routes')

const app = express()
app.use(bodyParser.json())
app.use(router)

//connect to mongodb
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const { MONGO_USER, MONGO_PASSWORD } = process.env

mongoose.connect(`mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:27017/`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const { typeDefs, resolvers } = require('./apollo')
const schema = makeExecutableSchema({ typeDefs, resolvers })

const server = new ApolloServer({
  schema,
  context: ({ req, res }) => ({ req, res }),
})
server.applyMiddleware({ app })

app.listen(5000, () => {
  console.log('Listening on port 5000')
  console.log(`🚀 Server ready at http://localhost:5000${server.graphqlPath}`)
})
