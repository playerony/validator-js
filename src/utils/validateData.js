const validateEmail = require('./validateEmail').validateEmail;
const validateDate = require('./validateDate').validateDate;

exports.validate = function(data, schema) {
    const validateFormat = (format, component) => {
        if(format && (format === 'date' || format === 'email'))
            if(format === 'email' && !validateEmail(component))
                throw new Error(`Wrong data: Format: '${component}' is not an ${format}.`);
            else if(format === 'date' && !validateDate(component))
                throw new Error(`Wrong data: Format: '${component}' is not a ${format}.`);
    };

    const validateField = (data, schema, element) => {
        const component = data[element];

        if(!component)
            throw new Error(`Wrong data: Required value is not defined: ${component}.`);

        const parameter = schema.parameters[element];
        const type = parameter.type;

        if(type !== 'array' && typeof component !== type)
            throw new Error(`Wrong data: ${component} is not a ${type} value.`);
        else if(type === 'array' && !(component instanceof Array))
            throw new Error(`Wrong data: ${component} is not an array value.`);
        else if(type === 'array') {
            const itemsType = schema.parameters[element].items.type;
            const itemsFormat = schema.parameters[element].items.format;
            
            component.forEach((element, index) => {
                if(typeof element !== itemsType)
                    throw new Error(`Wrong data: ${element} is not a ${itemsType} value.`);

                validateFormat(itemsFormat, element);
            })
        }

        const format = schema.parameters[element].format;

        validateFormat(format, component);
    };

    const validateRequiredFields = (data, schema) => {
        const requiredFields = schema.required;

        if(requiredFields) {
            if(!(requiredFields instanceof Array)) {
                throw new Error('Wrong data: Required field is not array.');
            }

            requiredFields.forEach((element, index) => {
                validateField(data, schema, element);
            })
        }
    };

    const validateData = (data, schema) => {
        const currentData = data;
        const currentSchema = schema;

        validateRequiredFields(currentData, currentSchema);
    };

    return validateData(data, schema);
};