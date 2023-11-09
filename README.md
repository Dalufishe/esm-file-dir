# esm-file-dir

`esm-file-dir` is a Node.js package that allows you to easily get `__dirname` and `__filename` values in an ES Modules environment, without the need for imports.

## Usage

Import package to your root file (e.g., index.js):

```js
// In ".mjs" script or a script under "type": "module" package
import "esm-file-dir";
```

Retrieve the results:

```js
console.log(__dirname(import.meta));
console.log(__filename(import.meta));
```

or use `__dirname` and `__filename` like under commonjs module:

```js
let __dirname = __dirname(import.meta);
let __filename = __filename(import.meta);

console.log(__dirname, __filename);
```

## Difference from others libraries

There are numerous similar libraries available in the ecosystem, but they typically require `importing` dirname or filename functions to use. `esm-file-dir` differentiates itself by directly injecting these functions into the global context, which not only streamlines your code but also enhances usability.

```js
// not doing like this
import { __dirname, __filename } from 'others-libraries';
// instead
import "esm-file-dir";
```

`It's so easy to use!`

## License

[MIT](./LICENSE)

## Links

[Github](https://github.com/Dalufishe/esm-file-dir)
[Npm](https://www.npmjs.com/package/esm-file-dir)