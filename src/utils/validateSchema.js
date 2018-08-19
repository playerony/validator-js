exports.validate = function(schema) {    
    const validateParamContent = (content, element) => {
        if(!content) {
            throw new Error(`Wrong schema: Parameters section is not defined.`);
        }

        if(content.length === 0) {
            throw new Error('Wrong schema: Parameters are not defined.');
        }

        if(content.type !== 'string' && content.type !== 'number' && content.type !== 'array' && content.type !== 'object') {
            throw new Error(`Wrong schema: Parameter: ${element} has wrong type value: ${content.type}`);
        }

        if(content.format && content.format !== 'date' && content.format !== 'email') {
            throw new Error(`Wrong schema: Parameter: ${element} has wrong format value: ${content.format}`);
        }

        if(content.type === 'array') {
            if(!content.items)
                throw new Error(`Wrong schema: Parameters section is not defined for array.`);

            validateParamContent(content.items, element);
        }
    };

    const validateParameters = (parameters) => {
        const currentParameters = parameters;
        const keys = Object.keys(currentParameters);

        keys.forEach((element, index) => {
            const content = currentParameters[element];
            
            validateParamContent(content, element);
        })
    };

    const validateSchema = (schema) => {
        const currentSchema = schema;
        const parameters = currentSchema.parameters;

        if(!parameters) {
            throw new Error('Wrong schema: Parameters section is not defined.');
        }

        if(parameters.length === 0) {
            throw new Error('Wrong schema: Parameters are not defined.');
        }

        validateParameters(parameters);
    };

    return validateSchema(schema);
}