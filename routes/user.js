'use strict';

let express = require('express');
let router = express.Router();

/*
 * GET userlist.
 */
router.get('/list', (req, res) => {
  let db = req.db;
  let userlist = db.collection('userlist');
  console.log(userlist);
  db.userlist.find((err, docs) => {
    res.json(docs);
  });
});

/*
 * POST to adduser.
 */
router.post('/add', (req, res) => {
  let db = req.db;
  let userlist = db.collection('userlist');
  db.userlist.insert(req.body, (err) => {
    res.sendStatus(201);
  });
});

/*
 * GET to get a single user.
 */
router.get('/:id', (req, res) => {
  let db = req.db;
  let userlist = db.collection('userlist');
  let userID = req.params.id;
  db.userlist.findOne({
    ID: userID,
  }, (err, doc) => {
    res.json(docs);
  });
});

/*
 * DELETE to deleteuser.
 */
router.delete('/:id', (req, res) => {
  let db = req.db;
  let userlist = db.collection('userlist');
  let userToDelete = req.params.id;
  db.userlist.remove({
    _id: userToDelete,
  }, (err, lastErrorObject) => {
    res.sendStatus(204);
  });
});

module.exports = router;
