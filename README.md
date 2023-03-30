# React Global Loading

![Example](/assets/example.png)

[![npm version](https://badge.fury.io/js/react-global-loading.svg)][npm_url]
[![downloads](https://img.shields.io/npm/dt/react-global-loading.svg)][npm_url]
[![license](https://img.shields.io/npm/l/react-global-loading.svg)][npm_url]

[npm_url]: https://www.npmjs.org/package/react-global-loading

React simple global loading package

## Installation

With Yarn:

```bash
yarn add react-global-loading
```

With npm:

```bash
npm install --save react-global-loading
```

## Getting Started

Add the GlobalLoading to your app first (should be at root component like index.js or app.js). It will take care of rendering global loading . Now you can trigger `globalLoading.show()` and `globalLoading.hide()` from anywhere!

```tsx
import { GlobalLoading, showLoading } from 'react-global-loading';

const App = () => {
  const show = () => {
    showLoading(true);
    setTimeout(() => {
      showLoading(false);
    }, 1000);
  };

  return (
    <div>
      <button onClick={show}>Show Loading</button>
      <GlobalLoading />
    </div>
  );
};
```

## Other way to trigger loading

```tsx
import { showLoading } from 'react-global-loading';
showLoading(true); // show
showLoading(false); // hide

import { show, hide } from 'react-global-loading';
show(); // show
hide(); // hide

import { globalLoading } from 'react-global-loading';
globalLoading.show(); // show
globalLoading.hide(); // hide
```

<details><summary>Example using React Class</summary>

</details>

## Available Loaders, PropTypes, and Default Values

Default props:

```
  children: React.ReactNode;
  WrapperComponent?: (props: any) => ReactElement;
  backgroundColor?: string;
  loadingSize?: number;
  loadingColor?: string;
  loadingType?:
    | 'spin'
    | 'bars'
    | 'bubbles'
    | 'cubes'
    | 'cylon'
    | 'spin'
    | 'spinningBubbles'
    | 'spokes';
```

### `children` prop

`children` will replace default loading icon

```tsx
<GlobalLoading>
  <ReactLoading /> // OR your custom loading component
<GlobalLoading/>
```

### `WrapperComponent` prop

The wrapper component ( background screen )

```tsx
<GlobalLoading WrapperComponent={() => <div style={style} />} />;

// suggested style
style = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: '100vw',
  height: '100vh',
  backgroundColor: 'rgba(0, 0, 0, 0.6)',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
```

### `zIndex`, `backgroundColor`, `loadingSize`, `loadingThickness`, `loadingSpeed`, `loadingColor`, and `loadingType` props

Style of the default loading component
