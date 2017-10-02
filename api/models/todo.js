module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define('Todo', {
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    completed: {
      type: DataTypes.BOOLEAN,
    },
  });

  return Todo;
};