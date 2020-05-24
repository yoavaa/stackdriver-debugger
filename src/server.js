require('@google-cloud/debug-agent').start({
  projectId: 'test-debugger-node-js',
  keyFilename: 'key.json',
  serviceContext: {
    service: 'test-app',
    version: 'v1.0'
  }
});

import "@babel/polyfill";
// Importing node modules
import express from 'express';
// Importing source files
import routes from './routes/main.routes';
import foo from './routes/page1';
// consts
const app = express();

app.use('/', routes);
app.get('/page', foo);

// arrow functions
const server = app.listen(3000, () => {
	// destructuring
  const {address, port} = server.address();

  // string interpolation:
  console.log(`Example app listening at http://${address}:${port}`);
});
