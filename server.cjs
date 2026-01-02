// server.cjs
const jsonServer = require('json-server');
const auth = require('json-server-auth');
const path = require('path');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'data/db.json'));
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.db = router.db; // required for json-server-auth
server.use(auth);
server.use(router);

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`JSON Server with Auth is running on port ${PORT}`);
});
