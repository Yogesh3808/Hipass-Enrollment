var testschema = require("./inTake");
var graphql = require("graphql");

var schema = new graphql.GraphQLSchema({
    query : testschema.schemaPass
});

module.exports = schema;