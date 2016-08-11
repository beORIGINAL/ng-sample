Error.stackTraceLimit = Infinity;
import angular from 'angular';
import mock from 'angular-mocks';
const context = require.context('../app', true, /\.spec\.js$/);
context.keys().forEach(context);
