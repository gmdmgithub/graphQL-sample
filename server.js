const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./schema.js');

const app = express();
require('dotenv').config();

//middleware
app.use('/graphql',expressGraphQL({
    schema:schema, //schema will be used for objects
    graphiql:true //graphical tool wil be used
}) )


app.set('port', process.env.PORT || 4000);

app.listen(app.get('port'),()=>{
    console.log(`App is running on port ${app.get('port')} !`);
})