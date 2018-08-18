exports.validate = function(schema) {    
    var validateParamContent = (content, element) => {
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
    }

    var validateParameters = (parameters) => {
        var currentParameters = parameters;
        var keys = Object.keys(currentParameters);

        keys.forEach((element, index) => {
            var content = parameters[element];
            
            validateParamContent(content, element);
        })
    }

    var validateSchema = (schema) => {
        var currentSchema = schema;
        var parameters = currentSchema.parameters;

        if(!parameters) {
            throw new Error('Wrong schema: Parameters section is not defined.');
        }

        if(parameters.length === 0) {
            throw new Error('Wrong schema: Parameters are not defined.');
        }

        validateParameters(parameters);
    }

    return validateSchema(schema);
}