/**
 * Created by sohamchetan on 04/07/15.
 */

var currentBill ={
  items : []
},
  _ = require('lodash');

module.exports = {

  generateNewBill : function(){
    currentBill = {
      items : []
    };
  },

  pushItemToBill : function(item){
    console.log('--pushing item to bill--');
    currentBill.items.push(item);
  },

  getCurrentBill : function(){
    return currentBill;
  },

  submitCurrentBill : function(cb){
    if(currentBill.items.length > 0) {
      currentBill.items = _.unique(currentBill.items,'itemId');
      Bill.create(currentBill, cb);
    }
    else{
      cb(null,currentBill);
    }

    this.generateNewBill();
  }

};
