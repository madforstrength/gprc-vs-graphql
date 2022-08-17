// Original file: grpc/proto/news.proto

import type * as grpc from "@grpc/grpc-js"
import type { MethodDefinition } from "@grpc/proto-loader"
import type {
  Empty as _newsPackage_Empty,
  Empty__Output as _newsPackage_Empty__Output
} from "../newsPackage/Empty"
import type {
  News as _newsPackage_News,
  News__Output as _newsPackage_News__Output
} from "../newsPackage/News"

export interface NewsServiceClient extends grpc.Client {
  GetAllNews(
    argument: _newsPackage_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  GetAllNews(
    argument: _newsPackage_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  GetAllNews(
    argument: _newsPackage_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  GetAllNews(
    argument: _newsPackage_Empty,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  getAllNews(
    argument: _newsPackage_Empty,
    metadata: grpc.Metadata,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  getAllNews(
    argument: _newsPackage_Empty,
    metadata: grpc.Metadata,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  getAllNews(
    argument: _newsPackage_Empty,
    options: grpc.CallOptions,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
  getAllNews(
    argument: _newsPackage_Empty,
    callback: grpc.requestCallback<_newsPackage_News__Output>
  ): grpc.ClientUnaryCall
}

export interface NewsServiceHandlers extends grpc.UntypedServiceImplementation {
  GetAllNews: grpc.handleUnaryCall<
    _newsPackage_Empty__Output,
    _newsPackage_News
  >
}

export interface NewsServiceDefinition extends grpc.ServiceDefinition {
  GetAllNews: MethodDefinition<
    _newsPackage_Empty,
    _newsPackage_News,
    _newsPackage_Empty__Output,
    _newsPackage_News__Output
  >
}
