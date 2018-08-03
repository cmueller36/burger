var orm = require("../config/orm");

var burgers = {
  all: function(cb) {
    orm.selectALL("burgers", function(res) {
      cb(res);
    });
  },
  update: function(tableInput,condition, cb) {
    orm.update("burgers",condition, function(res) {
      cb(res);
    });
  },
  create: function(tableInput,cols,vals,cb){
    orm.create("burgers",cols,vals, function(res){
      cb(res)
    })
  }
};

module.exports = burgers;
