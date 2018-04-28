# react-scrollto

> Animated scrolling to anchors

[![NPM](https://img.shields.io/npm/v/react-scrollto.svg)](https://www.npmjs.com/package/react-scrollto) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scrollto
```

## Usage

```jsx
import React, { Component } from 'react'

import { Anchored, ScrollTo } from 'react-scrollto'

class Example extends Component {
  render () {
    return (
      <div>
        <ScrollTo anchor='first'>
          <button>First</button>
        </ScrollTo>
        <p>Lopus rerolum</p>;
        <Anchored anchor='first'>First</Anchored>;
      </div>
    )
  }
}
```

## License

MIT © [aszabacsi](https://github.com/aszabacsi)
