/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addBillForUser : function(req, res){
    var userId = req.body.userId;

    User.find({userId:userId}, function(err, found){
      var foundBills = found.bills || [];
      BillService.submitCurrentBill(function(err, data){
        foundBills.push(data);
        User.update({userId:userId},{bills:foundBills}, console.log);
      });
    });

    res.end('ok');
  }

};

