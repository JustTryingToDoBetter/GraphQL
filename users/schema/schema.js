//all knowledge and properties and relationships

const graphql = require('graphql')
const axios = require('axios')
const {
    GraphQLObjectType, // id of user]\
    GraphQLInt, 
    GraphQLString,
    GraphQLSchema
} = graphql;



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
                return axios.get(`http://localhost:3000/users/${args.id}`)
                    .then(resp => resp.data)
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
})