//all knowledge and properties and relationships

const graphql = require('graphql')

const {
    GraphQLObjectType, // id of user]\
    GraphQLInt, 
    GraphQLString
} = graphql;

c


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

            }
        }
    }
});