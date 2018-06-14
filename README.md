# react-scrollto

> Animated scrolling to anchors

[![NPM](https://img.shields.io/npm/v/react-scrollto-animated.svg)](https://www.npmjs.com/package/react-scrollto-animated) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-scrollto-animated
```

## Usage

```jsx
import React, { Component } from 'react'

import { Anchored, ScrollTo } from 'react-scrollto-animated'

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
