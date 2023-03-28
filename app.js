import express, { urlencoded } from 'express';
import routerProducts from './routers/indexProducts.js';
import routerCarts from './routers/indexCarts.js';

import { init } from './db/mongodb.js';

init();
const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));
app.use('/static', express.static('./public'));

app.set('view engine', 'hbs');
app.set('views', './views');

app.use('/', routerProducts);
app.use('/', routerCarts);

export default app;