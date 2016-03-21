# React-Pure-Grid
React-Pure-Grid is a set of React components that imitate Bootstrap grid system.
This library harmoniously integrates with your React project and it's easily customizable and very flexible. 

React-Pure-Grid is **NOT** dependent on any external css files.

## Installation
React-Pure-Grid is available as an npm package.
```
npm install react-pure-grid
```

## Usage
Using React-Pure-Grid is very straightforward. Once react-pure-grid is included in your project, you can use the components this way:

```js
const {Container, Row, Col} = require('react-pure-grid');

const App = React.createClass({
  render() {
    return (
      <Container>
        <Row>
          <Col xs={6} md={3}>Hello, world!</Col>
        </Row>
      </Container>
    );
  }
});
```

## License
MIT
