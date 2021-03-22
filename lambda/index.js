var app = require('./the.js')('Amber3dBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
