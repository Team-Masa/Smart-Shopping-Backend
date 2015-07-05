/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  addBillForUser: function (req, res) {
    var userId = req.body.userId,
      billId = req.body.billId;

    console.log('phone is sending:' ,billId);

    User.findOne({userId: userId}, function (err, found) {
      var foundBills = found.bills || [];
      console.log('found bills : ', foundBills);
      //BillService.submitCurrentBill(function(err, data){
      //  foundBills.push(data);
      //  User.update({userId:userId},{bills:foundBills}, console.log);
      //});
      Bill.findOne({id: billId}, function (err, data) {
        foundBills.push(data);
        User.update({userId: userId}, {bills: foundBills}, console.log);
      });
    });

    res.end('ok');
  }

};

