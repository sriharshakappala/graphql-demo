import { GraphQLSchema } from "graphql";

import Query from './query';

const Schema = new GraphQLSchema({
	query: Query,
	// mutation: Mutation
});

export default Schema;
