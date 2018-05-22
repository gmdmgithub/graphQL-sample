const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLSchema,
    GraphQLList,
    GraphQLNonNull
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
    name:'Customer',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        age: {type: GraphQLInt},
    })
});


// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        customer:{
            type:CustomerType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parentValue, args){

                for(let i = 0;i < customers.length;i++){
                    if(customers[i].id == args.id){
                        return customers[i];
                    }
                }
            }
        },
        customers:{
            type: new GraphQLList(CustomerType),
            resolve(parentValue,args){
                return customers;
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery
});