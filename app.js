import express, { urlencoded } from 'express';
//import routerProducts from './routers/api/indexProducts.js';
//import routerCarts from './api/routers/indexCarts.js';
//import routerCarts from './routers/api/indexCarts.js';
//import router from './routers/indexProducts.js';
import routerProducts from './routers/indexProducts.js';
import routerCarts from './routers/indexCarts.js';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import { init } from './db/mongodb.js';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


await init();
const app = express();

hbs.registerHelper('isDisabled', function (value, opts) {
    return !value ? opts.fn(this) : opts.inverse(this)
  })
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/static', express.static(path.join(__dirname, 'public')))
  
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))

  console.log(__dirname);
 app.use('/', routerProducts);
 app.use('/', routerCarts);

export default app;