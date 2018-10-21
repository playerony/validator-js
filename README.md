# validator-js

## Usage

Simple object validation using JSON schemas - another part of my project at University

###

## Example

```javascript
const data = {
  name: "test@gmail.com",
  objects: ["13.12.1995", "13.12.1995"]
};

const schema = {
  parameters: {
    name: {
      type: "string",
      format: "email"
    },
    objects: {
      type: "array",
      items: {
        type: "string",
        format: "date"
      }
    }
  },
  required: ["name", "objects"]
};

validate(data, schema);
```

###
