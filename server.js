import express from 'express';
import graphqlHTTP from 'express-graphql';
import Schema from './schema';
const {expressPlayground} = require('graphql-playground-middleware');

var app = express();

app.use('/property', graphqlHTTP({
  schema: Schema,
  rootValue: global,
  graphiql: true,
}));

app.get('/playground', expressPlayground({
  endpoint: '/property'
}));

const server = app.listen(3001, () => {
  let { address, port } = server.address();
  console.log(`graphql server listening at ${address} on port ${port}`);
});
