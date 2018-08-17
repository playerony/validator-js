var validateEmail = require('./validateEmail').validateEmail;
var validateDate = require('./validateDate').validateDate;

exports.validate = function(data, schema) {
    var validateRequiredFields = (data, schema) => {
        var requiredFields = schema.required;

        if(requiredFields) {
            if(!(requiredFields instanceof Array)) {
                throw new Error('Wrong data: Required field is not array.');
            }

            requiredFields.forEach((element, index) => {
                var component = data[element];

                if(!component) {
                    throw new Error(`Wrong data: Required value is not defined: ${component}.`);
                }

                var type = schema.parameters[element].type;

                if(type !== 'array' && typeof component !== type){
                    throw new Error(`Wrong data: ${component} is not a ${type} value.`);
                } else if(type === 'array' && !(component instanceof Array)) {
                    throw new Error(`Wrong data: ${component} is not an array value.`);
                } 

                var format = schema.parameters[element].format;

                if(format && (format === 'date' || format === 'email')) {
                    if(format === 'email' && !validateEmail(component)) {
                        throw new Error(`Wrong data: Format: '${component}' is not an ${format}.`);
                    } else if(format === 'date' && !validateDate(component)) {
                        throw new Error(`Wrong data: Format: '${component}' is not a ${format}.`);
                    }
                }
            })
        }
    }

    var validateData = (data, schema) => {
        var currentData = data;
        var currentSchema = schema;

        validateRequiredFields(currentData, currentSchema);

        return 'xd';
    }

    return validateData(data, schema);
} 