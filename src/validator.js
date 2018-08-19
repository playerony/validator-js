const validateSchema = require('./utils/validateSchema').validate;
const validateData = require('./utils/validateData').validate;

const validate = (data, schema) => {
    const currentData = data;
    const currentSchema = schema;

    validateSchema(currentSchema);

    return validateData(currentData, currentSchema);
}

const data = {
    name: 'test@gmail.com',
    objects: ['13.12.1995', '13.12.1995']
}

const schema = {
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