/**
 * BillController
 *
 * @description :: Server-side logic for managing bills
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  getCurrentBill : function(req, res){
    //var currentBill = BillService.getCurrentBill();
    //res.json(currentBill);
    billService.submitCurrentBill(function(err, data){
      res.json(data);
    })
  }

};

