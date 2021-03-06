var Todos = function () {
  this.respondsWith = ['html', 'json', 'xml', 'js', 'txt'];

  this.index = function (req, resp, params) {
    var self = this;
   // this.session.set('userId', params._id);
    geddy.log.debug(params.id);
    geddy.model.Todo.all(function(err, todos) {
    self.respond({params: params, todos: todos});
  });
//    this.respond({params: params});
  };

  this.add = function (req, resp, params) {
    this.respond({params: params});
  };

    // Save the resource, then display index page
  this.create = function (req, resp, params) {
  var self = this
    , todo = geddy.model.Todo.create({title:params.title, status:'open', description: params.description});

  todo.save(function(err, data) {
    if (err) {
      params.errors = err;
      self.transfer('add');
    } else {
      self.redirect({controller: self.name});
    }
  });
    //this.redirect({controller: this.name});
  };

  this.show = function (req, resp, params) {
  var self = this;

  geddy.model.Todo.load(params.id, function(err, todo) {
    self.respond({params: params, todo: todo});
  });
//    this.respond({params: params});
  };

  this.edit = function (req, resp, params) {
  var self = this;

  geddy.model.Todo.load(params.id, function(err, todo) {
    self.respond({params: params, todo: todo});
  });
//    this.respond({params: params});
  };

  this.update = function (req, resp, params) {
    // Save the resource, then display the item page
  var self = this;

  geddy.model.Todo.load(params.id, function(err, todo) {
    todo.updateAttributes(params);

    todo.save(function(err, data) {
      if (err) {
        params.errors = err;
        self.transfer('edit');
      } else {
        self.redirect({controller: self.name});
      }
    });
  });
 //   this.redirect({controller: this.name, id: params.id});
  };

  this.remove = function (req, resp, params) {
   var self = this;
    geddy.model.Todo.remove(params.id, function(err){
      if (err) {
        params.errors = err;
        self.transfer('edit');
      }
      else {
        self.redirect({controller: self.name});
      }
    });
//    this.respond({params: params});
  };

};

exports.Todos = Todos;

