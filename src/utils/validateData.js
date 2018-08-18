var validateEmail = require('./validateEmail').validateEmail;
var validateDate = require('./validateDate').validateDate;

exports.validate = function(data, schema) {
    var validateFormat = (format, component) => {
        if(format && (format === 'date' || format === 'email')) {
            if(format === 'email' && !validateEmail(component)) {
                throw new Error(`Wrong data: Format: '${component}' is not an ${format}.`);
            } else if(format === 'date' && !validateDate(component)) {
                throw new Error(`Wrong data: Format: '${component}' is not a ${format}.`);
            }
        }
    }

    var validateField = (data, schema, element) => {
        var component = data[element];

        if(!component) {
            throw new Error(`Wrong data: Required value is not defined: ${component}.`);
        }

        var parameter = schema.parameters[element];
        var type = parameter.type;

        if(type !== 'array' && typeof component !== type) {
            throw new Error(`Wrong data: ${component} is not a ${type} value.`);
        } else if(type === 'array' && !(component instanceof Array)) {
            throw new Error(`Wrong data: ${component} is not an array value.`);
        } else if(type === 'array') {
            var itemsType = schema.parameters[element].items.type;
            var itemsFormat = schema.parameters[element].items.format;
            
            component.forEach((element, index) => {
                if(typeof element !== itemsType)
                    throw new Error(`Wrong data: ${element} is not a ${itemsType} value.`);

                validateFormat(itemsFormat, element);
            })
        }

        var format = schema.parameters[element].format;

        validateFormat(format, component);
    }

    var validateRequiredFields = (data, schema) => {
        var requiredFields = schema.required;

        if(requiredFields) {
            if(!(requiredFields instanceof Array)) {
                throw new Error('Wrong data: Required field is not array.');
            }

            requiredFields.forEach((element, index) => {
                validateField(data, schema, element);
            })
        }
    }

    var validateData = (data, schema) => {
        var currentData = data;
        var currentSchema = schema;

        validateRequiredFields(currentData, currentSchema);
    }

    return validateData(data, schema);
} 