/**
 * ItemController
 *
 * @description :: Server-side logic for managing items
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var _ = require('lodash');
var async = require('async');

module.exports = {

  itemBilled: function (req, res) {

    var itemId = req.body.itemId,
      findQuery = {itemId: itemId},
      updateQuery = req.body;

    updateQuery.sold = true;

    Inventory.find({itemId: itemId}, function (err, found) {
      DbUtils.upsert(Inventory, findQuery, updateQuery)(err, found);
    });

    res.end('ok');

  },

  sendItemRFID: function (req, res) {
    var asyncTasks = [];
    var rfidArray = req.body.key,
      rfidStringArray = _.values(rfidArray).join('').split('$').slice(1),
      rfidCleanedArray = _.map(rfidStringArray, function (rfid) {
        return rfid.split('\n')[0];
      });
    console.log(rfidCleanedArray);
    rfidCleanedArray.forEach(function (itemId) {
      var findQuery = {itemId: itemId},
        updateQuery = req.body;
      delete updateQuery.key;
      updateQuery.sold = true;

      Inventory.find({itemId: itemId}, function (err, found) {
        DbUtils.upsert(Inventory, findQuery, updateQuery)(err, found);
      });
    });
    res.end('ok');
  }

};

