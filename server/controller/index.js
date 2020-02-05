var models = require('../models');

////////////////
/* controller */
////////////////

module.exports = {
  homes : {
    get : (req, res) => { 
      models.homes.get(req.query.id, (err, data) => {
        if (err) {
          res.send(200);
        } else {
          res.send(data);
        }
      });
    },
    post : (req, res) => {}
  },
  bank : {
    get : (req, res) => {
      models.bank.get((err, data) => {
        if (err) {
          res.send(200);
        } else {
          res.send(data);
        }
      });
    },
    post : (req, res) => {}    
  },
  insurance : {
    get : (req, res) => {},
    post : (req, res) => {}
  },
  mortgages : {
    get : (req, res) => {},
    post : (req, res) => {}
  },
  states : {
    get : (req, res) => {},
    post : (req, res) => {}
  },
  taxes : {
    get : (req, res) => {},
    post : (req, res) => {}
  }
}