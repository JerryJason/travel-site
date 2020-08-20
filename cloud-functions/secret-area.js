exports.handler = function(even, context, callback) {
	callback(null, {
		statusCode: 200,
		body: 'Welcome to the secret area.'
	});
};
