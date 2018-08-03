var express = require("express");

var router = express.Router();

var burgers = require("../models/burgers");

router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    //console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.put("/api/burger/:id", function(req, res) {
  var condition = req.params.id;

  burgers.update(
    {
      devoured: req.body.devoured
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

router.post("/api/burgers", function(req, res) {
  burgers.create(
    "burgers",
    ["burger_name", "devoured"],
    [req.body.burger_name, req.body.devoured],
    function(result) {
      res.json({ id: result.insertId });
    }
  );
});

module.exports = router;
