Error.stackTraceLimit = Infinity;
import angualar from 'angular';
import mocks from 'angular-mocks';
const context = require.context('../app', true, /\.spec\.js$/);
context.keys().forEach(context);
