# km200-api
[![NPM](https://nodei.co/npm/km200-api.png)](https://nodei.co/npm/km200-api/)

[![Release](https://img.shields.io/github/release/jenszech/km200-api.svg)](https://github.com/jenszech/km200-api/releases/latest)
[![npm version](https://badge.fury.io/js/km200-api.svg)](https://badge.fury.io/js/km200-api)
[![Downloads](https://img.shields.io/npm/dm/km200-api.svg?maxAge=2592000)](https://www.npmjs.com/package/km200-api)
[![Issues](https://img.shields.io/github/issues/jenszech/km200-api.svg)](https://github.com/jenszech/km200-api/issues)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://opensource.org/licenses/MIT)

A nodejs module for connecting a buderus heater via km200 interface

It is released as npm module under [km200-api](https://www.npmjs.com/package/km200-api)

## Usage
### Install
```
npm install km200-api
```
### Basic Usage
AES key generator for the KM200 web gateway: https://km200.andreashahn.info

```javascript
import { Km200 } from 'km200-api';

const key = '<INSERT YOUR KEY HERE>';
const km200 = new Km200('192.168.10.22', 80, key);

// Call a single Value from Buderus KM200
console.log('Get Km200 Firmware Verion ... ');
km200.getKM200('/gateway/versionFirmware').then((data) => {
  console.log('Km200 Firmware: ' + data.value);
});

// Print a single API with all provided sub calls
km200.printSingleApi('/gateway');

// Print all provided API calls
km200.printCompleteApi();

```

### More Examples
More examples and details in [exampe.ts](./src/example/example.ts)

You can also check my own project for detailed usage example and inspiration<b> 
https://github.com/jenszech/hm-node-runner

## Dokumentation
## Development and build pipeline
### Release a new version
```
npm version major|minor|patch
npm publish
```

## Further documentation

Step by step: Building and publishing an NPM Typescript package.<br>
https://itnext.io/step-by-step-building-and-publishing-an-npm-typescript-package-44fe7164964c

## License
See the [LICENSE](LICENSE.md) file for license rights and limitations (MIT).
