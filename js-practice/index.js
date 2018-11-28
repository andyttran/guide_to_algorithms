const nativeTest = require('./solutions').testSuite;
const algorithmTests = require('./algorithms').testSuite;
const perf = require('./algorithms').perf;

nativeTest();
algorithmTests();
perf();
