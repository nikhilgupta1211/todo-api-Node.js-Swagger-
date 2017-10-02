const todosController = require('../controllers').todos;
const authController = require('../controllers').auth;

module.exports = (app) => {
  app.get('/api', authController.auth,(req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.get('/', authController.auth, (req, res) => res.status(200).send({
    message: 'Authenticated',
  }));

  app.post('/api/todos',authController.auth, todosController.create);
  app.get('/api/todos', authController.auth, todosController.list);
  app.get('/api/todos/:id', authController.auth, todosController.show);
  app.put('/api/todos/:id', authController.auth, todosController.update);
  app.delete('/api/todos/:id', authController.auth, todosController.destroy);
};