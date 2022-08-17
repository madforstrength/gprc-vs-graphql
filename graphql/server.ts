import { ApolloServer } from "apollo-server"
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core"
import typeDefs from "./schema"
import resolvers from "./resolvers"

const startApolloServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })]
  })
  const { url } = await server.listen()
  console.log(`🚀 Server ready at ${url}`)
}

startApolloServer()
