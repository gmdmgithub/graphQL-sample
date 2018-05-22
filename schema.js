const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphNonNull
} = require('graphql');

//hardcoded data
const customers = [
    {id:'1', name:'John Doe', email:'test@test.com', age:24},
    {id:'2', name:'Steve Jobs', email:'test_a@test.com', age:42},
    {id:'3', name:'Mart Kowalski', email:'test_b@test.com', age:32},
    {id:'4', name:'Sara wilson', email:'test_c@test.com', age:43}
];

// customer type
const CustomerType = new GraphQLObjectType({
    name: 'Customer',
    filds:()=>({
        id: {type:GraphQLString},
        name: {type:GraphQLString},
        email: {type:GraphQLString},
        age: {GraphQLInt}
    })
})

//rout query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    filds:{
        customer:{
            type: CustomerType,
            args:{
                id:{type: GraphQLString}
            },
            resolve(parentValue,args){
                for (let i=0; i< customers.length; i++) {
                    if(customers[i] == args.id )
                        return customers[i];         
                }
            }
        }
    }
});

module.exprorts = new GraphQLSchema({
    query: RootQuery
});