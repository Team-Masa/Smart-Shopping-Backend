/**
 * Created by sohamchetan on 04/07/15.
 */

var returnMessage = function(msg, cb){
  return function(err, data){
    if(err){
      console.log(err);
    }
    console.log('---successfully ' + msg + ' item with id=' + data.itemId + ' with data : ' , data, '\n\n');
    BillService.pushItemToBill(data[0]);
    cb();
  }
};
module.exports = {

  upsert : function(collection, findQuery, updateQuery, cb){
    return function(err, data){
      if(data.length > 0){
        collection.update(findQuery, updateQuery, returnMessage('updated', cb));
      }
      else{
        collection.create(updateQuery, returnMessage('created', cb));
      }
    }
  }

};
