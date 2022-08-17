import { gql } from "apollo-server"

const Main = gql`
  type News {
    id: String
    title: String
    body: String
    postImage: String
  }

  type Query {
    news: News
  }

  type Mutation {
    clearGraph: Boolean
  }

  schema {
    query: Query
    mutation: Mutation
  }
`

export default Main
