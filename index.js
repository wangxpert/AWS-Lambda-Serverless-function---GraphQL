exports.handler = function (event, context) {
  console.log('value1', event.key1);
  context.succeed('Success');
};
