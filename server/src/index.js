
import {GraphQLServer, PubSub} from "graphql-yoga"
import  db from './data.js'

import resolvers  from "./graphql/resolvers/index.js"



const pubsub = new PubSub()
const server = new GraphQLServer({
    typeDefs: `src/graphql/schema.graphql`, 
    resolvers, 
    context: {
        pubsub,
        db
    }
})
server.start(() => console.log("Server is running on 4000!"))

