'use strict';
require('env2')('.env');
var graphql = require('graphql');
var isEmpty = require('lodash.isempty');
var schema = require('./lib/schema');

exports.handler = function (event, context, callback) {
  console.log('Incoming Event', event);
  // In the introspection query from GraphiQL the variables key is not present in the event body
  var variables = event.variables && !isEmpty(event.variables) ? JSON.parse(event.variables) : {};
  graphql.graphql(schema.root, event.query, null, variables)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};
