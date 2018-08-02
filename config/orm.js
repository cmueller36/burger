var connection = require("./connection");

var orm = {
  selectALL: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  update: function(tableInput, condition, cb) {
    var queryString = "UPDATE ?? SET devoured = true WHERE id = ?"

    console.log(queryString);
    connection.query(queryString, [tableInput,condition], function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;
