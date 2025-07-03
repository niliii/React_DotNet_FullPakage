const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('data/taraveldb.json');
const middlewares = jsonServer.defaults();
const cors = require('cors');
// Middleware برای فعال‌سازی CORS
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
server.use(cors());
server.use(middlewares);
server.use(router);
server.listen(5001, () => {
  console.log('JSON Server is running on port 5001');
});
