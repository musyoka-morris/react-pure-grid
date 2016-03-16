import {Container, Row, Col, ClearFix} from '../index';
const React = require('react');
const { render } = require('react-dom');

const Style = {
    row : {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottom: '1px dotted #00bcd4'
    },

    col: {
        background: '#00bcd4',
        textAlign: 'center',
        borderRadius: 5,
        paddingTop: 30,
        paddingBottom: 30,
        paddingRight: 8,
        paddingLeft: 8,
        marginBottom: 8
    }
};

function paddedCol(padding) {
    return {
        ...Style.col,
        paddingTop: padding,
        paddingBottom: padding
    };
}

function nestedCol() {
    return {
        ...paddedCol(15),
        background: '#ff4081'
    };
}


const SimpleGrid = (
    <Container>
        <Row style={Style.row}>
            <Col sm={6} md={4} lg={3} style={Style.col}>sm-6 md-4 lg-3</Col>
            <Col sm={6} md={4} lg={3} style={Style.col}>sm-6 md-4 lg-3</Col>
            <Col sm={6} md={4} lg={3} style={Style.col}>sm-6 md-4 lg-3</Col>
            <Col sm={6} md={4} lg={3} style={Style.col}>sm-6 md-4 lg-3</Col>
        </Row>
        <Row style={Style.row} gutter={1}>
            <Col xs={4} style={Style.col}>gutter:1</Col>
            <Col xs={4} style={Style.col}>gutter:1</Col>
            <Col xs={4} style={Style.col}>gutter:1</Col>
            <Col xs={4} style={Style.col}>gutter:1</Col>
        </Row>
        <Row style={Style.row} align="start">
            <Col xs={4} style={paddedCol(50)}>align: start</Col>
            <Col xs={4} style={paddedCol(20)}>align: start</Col>
            <Col xs={4} style={paddedCol(70)}>align: start</Col>
        </Row>
        <Row style={Style.row} align="center">
            <Col xs={4} style={paddedCol(50)}>align: center</Col>
            <Col xs={4} style={paddedCol(20)}>align: center</Col>
            <Col xs={4} style={paddedCol(70)}>align: center</Col>
        </Row>
        <Row style={Style.row} align="end">
            <Col xs={4} style={paddedCol(50)}>align: top</Col>
            <Col xs={4} style={paddedCol(20)}>align: top</Col>
            <Col xs={4} style={paddedCol(70)}>align: top</Col>
        </Row>
        <Row style={Style.row} justify="start">
            <Col xs={3} style={Style.col}>justify: start</Col>
            <Col xs={3} style={Style.col}>justify: start</Col>
            <Col xs={3} style={Style.col}>justify: start</Col>
        </Row>
        <Row style={Style.row} justify="center">
            <Col xs={3} style={Style.col}>justify: center</Col>
            <Col xs={3} style={Style.col}>justify: center</Col>
            <Col xs={3} style={Style.col}>justify: center</Col>
        </Row>
        <Row style={Style.row} justify="end">
            <Col xs={3} style={Style.col}>justify: end</Col>
            <Col xs={3} style={Style.col}>justify: end</Col>
            <Col xs={3} style={Style.col}>justify: end</Col>
        </Row>
        <Row style={Style.row} reverse={true}>
            <Col xs={3} style={Style.col}>Reverse #1</Col>
            <Col xs={3} style={Style.col}>Reverse #2</Col>
            <Col xs={3} style={Style.col}>Reverse #3</Col>
            <Col xs={3} style={Style.col}>Reverse #4</Col>
        </Row>
        <Row style={Style.row}>
            <Col md={6} style={paddedCol(15)}>
                <Row gutter={5}>
                    <Col style={nestedCol()}>Nested columns</Col>
                    <Col md={6} style={nestedCol()}>Nested</Col>
                    <Col md={6} style={nestedCol()}>Nested</Col>
                </Row>
            </Col>
            <Col md={6} style={Style.col}>
                Not nested
            </Col>
        </Row>
    </Container>
);
render(SimpleGrid, document.body);
