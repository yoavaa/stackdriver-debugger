console.log('debugger before start')
require('@google-cloud/debug-agent').start({
  projectId: 'test-debugger-node-js',
  keyFilename: 'key.json',
  loadInlineSourceMaps: true,
  serviceContext: {
    service: 'test-app',
    version: 'v1.0'
  }
});
console.log('debugger after start')

require('./server');