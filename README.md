<div align=center>

  [<img height="100px" src="https://github.com/pastelnetwork/pastel-qr-scan/blob/master/src/assets/images/logo.svg"/>](https://pastel.network/)

</div>

<p align=center>
  <b>Pastel QR Code Scanner & Reader</b>
</p>

<div align=center>

  [![Docs](https://img.shields.io/badge/doc-reference-%233F9AF7)](https://docs.pastel.network/introduction/pastel-overview)
  [![License](https://img.shields.io/github/license/pastelnetwork/pastel-electron-wallet)](https://github.com/pastelnetwork/pastel-qr-scanblob/master/LICENSE)
  [![Language](https://img.shields.io/badge/language-Typescript-%232b7489)](https://github.com/pastelnetwork/pastel-qr-scansearch?q=typescript)

</div>

---

Pastel QR Code Scanner & Reader is a component built to scan PSL QR codes using a webcam.

## Installation

You can install this library via NPM or YARN.

### NPM

```bash
npm i pastel-qr-scan
```

### YARN

```bash
yarn add pastel-qr-scan
```

## Example Usage

After reading and performing the previous steps, you should be able to import the library and use it like in this example:

```javascript
import React, { useState } from 'react';
import { QrReader } from 'pastel-qr-scan';

const Test = (props) => {
  const [data, setData] = useState('No result');

  return (
    <>
      <QrScan
        onResult={(result) => {
          if (result) {
            setData(result?.text);
          }
        }}
      />
      <p>{data}</p>
    </>
  );
};
```

## Component API

The `Pastel QR Code Scanner & Reader` component has the following props:

| Properties          | Types                                                                                           | Default Value            | Description                                              |
| ------------------- | ----------------------------------------------------------------------------------------------- | ------------------------ | -------------------------------------------------------- |
| onResult            | `function`                                                                                      | none                     | Scan event handler                                       |
| videoWidth             | `string`                                                                                        | `100%`                  | The width for the video element                             |
| videoHeight             | `string`                                                                                        | `100%`                  | The height for the video element                             |
| className           | `string`                                                                                         | none                     | ClassName for the container element.                     |

## Issues

Please, open an [issue](https://github.com/pastelnetwork/pastel-qr-scan/qr-scan/issues) following one of the issues templates. We will do our best to fix them.

## License

Distributed under the MIT license. See [LICENSE](LICENSE) for more information.
