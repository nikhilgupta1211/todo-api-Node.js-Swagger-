const todosController = require('../controllers').todos;

module.exports = (app) => {
  app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
  }));

  app.post('/api/todos', todosController.create);
  app.get('/api/todos', todosController.list);
  app.get('/api/todos/:id', todosController.show);
  app.put('/api/todos/:id', todosController.update);
  app.delete('/api/todos/:id', todosController.destroy);
};