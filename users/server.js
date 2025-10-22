const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP; // glue layer
const app = express()

app.use('/graph', expressGraphQL({
    graphiql: true //makes query against our dev server
}))

app.listen(4000,() =>{
    console.log("Listening");
})