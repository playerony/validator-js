const validateSchema = require("./src/utils/validateSchema").validate;
const validateData = require("./src/utils/validateData").validate;

const validate = (data, schema) => {
  const currentData = data;
  const currentSchema = schema;

  validateSchema(currentSchema);

  return validateData(currentData, currentSchema);
};

module.exports = validate;
