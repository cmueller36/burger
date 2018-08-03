var connection = require("./connection");

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {
  selectALL: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      cb(result);
    });
  },

  update: function(tableInput, condition, cb) {
    var queryString = "UPDATE ?? SET devoured = true WHERE id = ?";

    connection.query(queryString, [tableInput, condition], function(
      err,
      result
    ) {
      cb(result);
    });
  },

  create: function(tableInput, cols, vals, cb) {
    var queryString = "INSERT INTO " + tableInput;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      cb(result);
    });
  }
};

module.exports = orm;
