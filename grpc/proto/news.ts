import type * as grpc from "@grpc/grpc-js"
import type { MessageTypeDefinition } from "@grpc/proto-loader"

import type {
  NewsServiceClient as _newsPackage_NewsServiceClient,
  NewsServiceDefinition as _newsPackage_NewsServiceDefinition
} from "./newsPackage/NewsService"

type SubtypeConstructor<
  Constructor extends new (...args: any) => any,
  Subtype
> = {
  new (...args: ConstructorParameters<Constructor>): Subtype
}

export interface ProtoGrpcType {
  newsPackage: {
    Empty: MessageTypeDefinition
    News: MessageTypeDefinition
    NewsService: SubtypeConstructor<
      typeof grpc.Client,
      _newsPackage_NewsServiceClient
    > & { service: _newsPackage_NewsServiceDefinition }
  }
}
