import {
	GraphQLObjectType,
	GraphQLString,
	GraphQLInt,
	GraphQLBoolean
} from 'graphql';

export const propertyType = new GraphQLObjectType({
	name: 'Property',
	description: 'Property Information',
	fields: () => ({
		name: {
			type: GraphQLString,
			description: 'Property name',
		},
		address: {
			type: GraphQLString,
			description: 'Address of the property'
		},
		price: {
			type: GraphQLInt,
			description: 'Price of the property'
    },
    price_formatted: {
			type: GraphQLString,
			description: 'Formatted Price of the property'
		},
		city: {
			type: GraphQLString,
			description: 'City of the property'
		},
		is_available_for_rent: {
			type: GraphQLBoolean,
			description: 'Whether the property is available for rent?'
		}
	})
});
