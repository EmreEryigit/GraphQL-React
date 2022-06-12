"use strict";var _graphqlYoga=require("graphql-yoga");var _data=_interopRequireDefault(require("./data"));var _resolvers=_interopRequireDefault(require("./graphql/resolvers"));function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{"default":obj}}var pubsub=new _graphqlYoga.PubSub;var server=new _graphqlYoga.GraphQLServer({typeDefs:"".concat(__dirname,"/graphql/schema.graphql"),resolvers:_resolvers["default"],context:{pubsub:pubsub,db:_data["default"]}});server.start(function(){return console.log("Server is running on 4000!")});