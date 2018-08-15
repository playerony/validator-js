var validateSchema = require('./utils/validateSchema').validate;
var validateData = require('./utils/validateData').validate;

var validate = (data, schema) => {
    var currentData = data;
    var currentSchema = schema;

    validateSchema(currentSchema);

    return validateData(currentData, currentSchema);
}

var data = {
    name: 'xd'
}

var schema = {
    parameters: {
        name: {
            type: 'string',
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