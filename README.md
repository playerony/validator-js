# validator-js

## Usage

Simple object validation using JSON schemas

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

## Installation

1. Clone repository
2. npm install
3. npm test

#### Requirements

- Installed GIT
- Installed node.js

###

## License

```text
MIT License

Copyright (c) 2018 Paweł Wojtasiński

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

###
