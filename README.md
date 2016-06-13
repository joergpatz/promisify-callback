# promisify-callback
A small ES6 module that turns any async function with callback into a promise

## Usage Example

```javascript
import promisify from 'promisify-callback';

promisify(fs.readFile, '/path/to/file').then(/*code here*/);
```