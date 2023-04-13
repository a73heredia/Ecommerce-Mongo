import express, { urlencoded } from 'express';
import expressSession from 'express-session';
import MongoStore from 'connect-mongo';
import routerProducts from './routers/indexProducts.js';
import routerCarts from './routers/indexCarts.js';
import routerSessions from './routers/indexSessions.js';
import hbs from 'hbs';
import path from 'path';
import { fileURLToPath } from 'url';
import { init } from './db/mongodb.js';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)


await init();
dotenv.config();
const app = express();

hbs.registerHelper('isDisabled', function (value, opts) {
    return !value ? opts.fn(this) : opts.inverse(this)
  })
  
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use('/static', express.static(path.join(__dirname, 'public')))
  
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))

  app.use(expressSession({
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        mongoOptions: {},
        ttl: 20000
    }),
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false
}));

 app.use('/', routerProducts);
 app.use('/', routerCarts);
 app.use('/', routerSessions);
export default app;