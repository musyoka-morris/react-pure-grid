# React-Pure-Grid
React-Pure-Grid is a set of React components that mirror Bootstrap grid system. This library harmoniously integrates with your React project and it's easily customizable and very flexible. 

React-Pure-Grid is **NOT** dependent on any external css files.

## Installation
React-Pure-Grid is available as an npm package.
```
npm install react-pure-grid --save
```

## Usage
Using React-Pure-Grid is very straightforward. Once react-pure-grid is included in your project, you can use the components this way:

```js
import {Container, Row, Col} from 'react-pure-grid';

const App = () => (
      <Container>
        <Row>
          <Col xs={6} md={4} lg={3}>Hello, world!</Col>
        </Row>
        <Row>
            <Col xsOffset={5} xs={7}>Welcome!</Col>
        </Row>
      </Container>
);
```

##Customization
Beginning with v2.0.0, Styling the grid system to your liking is simple and hassle-free. This can be achieved by using the `PureGridProvider` to inject the customizations into your application context. Following that, you can to use any of the components as demonstrated in the documentation.

The following are the possible customizations:

###props
**gutterSize** `number` `[default = 15]`
The gutter size to separate cols 

**maxWidth** `number` `[default = 1170]`
Maximum container width

**replaceBreakPoints** `boolean` `[default = false]`
This determines whether to merge or replace the provided `breakPoints` with the `default breakPoints`. *We highly recommend you leave this untouched*

**breakPoints** `object`
Each entry is an object containing two keys:
```js
{
    browser     : number, /* The browser width */
    container   : number, /* The width to apply to a container within this breakpoint */
}
```

```js
// Default breakPoints
{
   lg: {
      browser: 1200,
      container: 1170
  },
  md: {
      browser: 992,
      container: 870
  },
  sm: {
      browser: 768,
      container: 750
  },
  xs: {
      browser: 0,
      container: 'auto'
  }
}
```

Here is a quick example to get you started:

###./App.js

```js
import React from 'react';
import {render} from 'react-dom';
import {PureGridProvider} from 'react-pure-grid';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';

const App = () => (
  <PureGridProvider gutterSize={4}>
    <MyAwesomeReactComponent />
  </PureGridProvider>
);

render(<App />, document.getElementById('app'));
```


###./MyAwesomeReactComponent.js

```js
import React from 'react';
import {Container, Row, Col} from 'react-pure-grid';

const MyAwesomeReactComponent = () => (
  <Container>
    <Row>
        <Col xs={12} md={6}>
            My Col Data
        </Col>
    </Row>
  </Container>
);

export default MyAwesomeReactComponent;
```

##Components

### 1. Container
**fluid**  `boolean`  `[default = true]`
Fluid or Fixed-Width layout

### 2. Row
**reverse**  `boolean`  `[default = false]`
Set to `true` to output `Cols` in reverse order 

**align**  `string`  `[default = start]`
Accepts one of `start|center|end`. Vertical alignment of Cols with varying heights

**justify**  `string`  `[default = start]`
Accepts one of `start|center|end`. Horizontal alignment of Cols when they don't occupy full width


### 3. Col
__\*__  `number` 
Number of columns [1-12] to use as `Col` width

**\*Offset**  `number` 
Number of columns [1-12] to offset


**Note**: __\*__ is a key in `breakPoints` object <br/>
**Example**: `<Col md={4} xsOffset={2}>Col Content</Col>`



## Browser Support
Supported in all major browsers

## Contribute
If you have a feature request, please add it as an issue or make a pull request.

## License
MIT