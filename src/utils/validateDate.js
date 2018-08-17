exports.validateDate = function(val){ 
    var dateStr = val.split('.'); 
    var date = new Date(dateStr[2], dateStr[1]-1, dateStr[0]); 
    if(date.getDate() == dateStr[0] && date.getMonth()+1 == dateStr[1] && date.getFullYear() == dateStr[2])
        return true; 
    else
        return false;
}