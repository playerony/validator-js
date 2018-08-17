var validateSchema = require('./utils/validateSchema').validate;
var validateData = require('./utils/validateData').validate;

var validate = (data, schema) => {
    var currentData = data;
    var currentSchema = schema;

    validateSchema(currentSchema);

    return validateData(currentData, currentSchema);
}

var data = {
    name: '13.12.1995'
}

var schema = {
    parameters: {
        name: {
            type: 'string',
            format: 'date'
        },
        objects: {
            type: 'array',
            items: {type: 'string'}
        }
    },
    required: [
        'name'
    ]
}

console.log(validate(data, schema));