import path from "path"
import * as grpc from "@grpc/grpc-js"
import * as protoLoader from "@grpc/proto-loader"
import { ProtoGrpcType } from "./proto/news"

const server = new grpc.Server()
const PROTO_FILE = "./proto/news.proto"
const packageDef = protoLoader.loadSync(path.resolve(__dirname, PROTO_FILE))
const grpcObj = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType
const newsPackage = grpcObj.newsPackage

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    server.start()
    console.log("server is running on 0.0.0.0:50051")
  }
)

const news = {
  id: "2",
  title: "Note 2",
  body: "Content 2",
  postImage: "Post image 2"
}
server.addService(newsPackage.NewsService.service, {
  GetAllNews: (req: any, res: any) => {
    res(null, news)
  }
})
