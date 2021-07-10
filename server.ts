import 'zone.js/dist/zone-node'

import { ngExpressEngine } from '@nguniversal/express-engine'
import * as express from 'express'

import { join }                       from 'path'
import { existsSync, readFileSync }   from 'fs'
import { createWindow }               from 'domino'

const distFolder = join(process.cwd(), 'dist/browser');
const template   = readFileSync(join(distFolder, 'index.html')).toString()
const win        = createWindow(template)

global['window']    = win.window
global['document']  = win.document
global['navigator'] = win.navigator

import { AppServerModule } from './src/main.server'
import { APP_BASE_HREF } from '@angular/common'

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server     = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  const indexHtml  = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  const PORT = 4200
  const HOST = '0.0.0.0'

  // Start up the Node server
  const server = app();
  server.listen(PORT, HOST, () => {
    console.log(`Node Express server listening on http://${HOST}:${PORT}`);
  });
}
run();

export * from './src/main.server';
