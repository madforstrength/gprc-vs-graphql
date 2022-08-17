import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./proto/news"
const PROTO_FILE = "./proto/news.proto"

const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType

const client = new grpcObj.newsPackage.NewsService(
  `localhost:50051`,
  grpc.credentials.createInsecure()
)

const deadline = new Date()
deadline.setSeconds(deadline.getSeconds() + 5)
client.waitForReady(deadline, (err) => {
  if (err) {
    console.error(err)
    return
  }
  sendRequest()
})
const sendRequest = async () => {
  console.time()
  for (let a = 0; a < 10000; a++) {
    await new Promise((resolve) => {
      client.GetAllNews({}, (error: any, news: any) => {
        resolve(null)
      })
    })
  }
  console.timeEnd()
}
