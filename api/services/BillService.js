/**
 * Created by sohamchetan on 04/07/15.
 */

var currentBill ={
  items : []
};

module.exports = {

  generateNewBill : function(){
    currentBill = {
      items : []
    };
  },

  pushItemToBill : function(item){
    currentBill.items.push(item);
  },

  getCurrentBill : function(){
    return currentBill;
  },

  submitCurrentBill : function(cb){
    if(currentBill.items.length > 0) {
      Bill.create(currentBill, cb);
    }
    else{
      cb(null,currentBill);
    }

    this.generateNewBill();
  }

};
