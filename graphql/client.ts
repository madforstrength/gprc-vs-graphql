import { GraphQLClient } from "graphql-request"
const client = new GraphQLClient(`http://localhost:4000`)

const getNews = async () => {
  console.time()
  const query = `
      query {
        news {
            id
            title
            body
            postImage
        }
      }
    `
  for (let a = 0; a < 10000; a++) {
    const res: any = await client.request(query)
  }
  console.timeEnd()
}

getNews()
