import {
	GraphQLObjectType,
	GraphQLList,
} from 'graphql';

import {propertyType} from './types/property';
import {getProperty, getProperties} from './resolver';

const getPropertiesOutputType = new GraphQLObjectType({
	name: 'PropertiesOutputType',
	description: 'GetProduct output Information',
	fields: () => ({
		properties: {
			type: new GraphQLList(propertyType),
			description: 'List of Properties',
		}
	})
});

const Query = new GraphQLObjectType({
	name: 'RootQueryType',
	fields: {
		getProperties: {
			type: getPropertiesOutputType,
			resolve: getProperties
		},
	}
});

export default Query;
