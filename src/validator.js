var validateSchema = require('./utils/validateSchema').validate;

var validate = (data, schema) => {
    var currentData = data;
    var currentSchema = schema;

    validateSchema(currentSchema);

    return currentSchema;
}

var data = {
    name: 'test'
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