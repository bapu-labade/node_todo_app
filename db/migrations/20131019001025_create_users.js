var CreateUsers = function () {
  this.up = function (next) {
    var def = function (t) {
          t.column('userName', 'string');
          t.column('firstName', 'string');
          t.column('lastName', 'string');
          t.column('age', 'int');
          t.column('email', 'string');
          t.column('password', 'string');
        }
      , callback = function (err, data) {
          if (err) {
            throw err;
          }
          else {
            next();
          }
        };
    this.createTable('user', def, callback);
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
    this.dropTable('user', callback);
  };
};

exports.CreateUsers = CreateUsers;
