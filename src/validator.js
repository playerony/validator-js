var validateSchema = require('./utils/validateSchema').validate;
var validateData = require('./utils/validateData').validate;

var validate = (data, schema) => {
    var currentData = data;
    var currentSchema = schema;

    validateSchema(currentSchema);

    return validateData(currentData, currentSchema);
}

var data = {
    name: 'test@gmail.com',
    objects: ['13.12.1995', '13.12.1995']
}

var schema = {
    parameters: {
        name: {
            type: 'string',
            format: 'email'
        },
        objects: {
            type: 'array',
            items: { 
                type: 'string',
                format: 'date'
            }
        }
    },
    required: [
        'name',
        'objects'
    ]
}

validate(data, schema);