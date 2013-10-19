var CreateTodos = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('title', 'string');
          t.column('status', 'string');
          t.column('userId', datatype); // belongsTo User

        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('todo', def, callback);
  };

  this.down = function (next) {
    var callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.dropTable('todo', callback);
  };
};

exports.CreateTodos = CreateTodos;
