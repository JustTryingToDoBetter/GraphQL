//all knowledge and properties and relationships

const graphql = require('graphql')
const _ = require('lodash')
const {
    GraphQLObjectType, // id of user]\
    GraphQLInt, 
    GraphQLString,
    GraphQLSchema
} = graphql;

const users = [
    {id : '23', firstName: 'Jaydin', age: 23 }, 
    {id : '21', firstName: 'Jonna', age: 22 }, 
]


//creating properties
const UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
        id: { type: GraphQLString }, 
        firstName: {type: GraphQLString }, 
        age: {type: GraphQLInt}
    }
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType', 
    fields : {
        user: {
            type: UserType,
            args: {id :{ type : GraphQLString}} , 
            resolve(parentValue, args) {
                return _.find(users, {id : args.id})
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})