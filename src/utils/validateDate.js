exports.validateDate = function(value){ 
    const dateStr = value.split('.'); 
    const date = new Date(dateStr[2], dateStr[1] - 1, dateStr[0]); 

    return (date.getDate() == dateStr[0] && date.getMonth() + 1 == dateStr[1] && date.getFullYear() == dateStr[2]) ? true : false;
};