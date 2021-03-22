var app = require('./the.js')('ApplicationOrLibraryTitleBackend');

exports.status = app('status');
exports.echo = app('echoEvent:andContext:');
