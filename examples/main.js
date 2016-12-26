import React from 'react';
import {render} from 'react-dom';
import prefix from '../src/prefix';
import {PureGridProvider, Container, Row, Col} from '../index';

const Style = prefix({
    row : {
        paddingTop: 6,
        paddingBottom: 20,
        borderBottomSize: 1,
        borderBottomStyle: 'dotted',
        borderBottomColor: '#00bcd4'
    },

    col: {
        textAlign: 'center',
        fontSize: 12,
        fontWeight: 'bold',
        lineHeight: '300%',
        borderRadius: 5,
        borderSize: 1,
        borderStyle: "solid",
        borderColor: "silver"
    }
});


const newBreakPoints = {
    a: {
        browser: 992,
        container: 870
    },
    b: {
        browser: 500,
        container: 460
    }
};

function tallCol(height) {
    return {
        ...Style.col,
        height: height
    };
}


const SimpleGrid = (
    <PureGridProvider
        gutterSize={10}
        maxWidth={970}
        breakPoints={newBreakPoints}
        replaceBreakPoints={false} >
        <Container>
            <Row style={Style.row}>
                <Col sm={6} md={4} lg={3} style={Style.col}>sm: 6, md: 4, lg: 3</Col>
                <Col sm={6} md={4} lg={3} style={Style.col}>sm: 6, md: 4, lg: 3</Col>
                <Col sm={6} md={4} lg={3} style={Style.col}>sm: 6, md: 4, lg: 3</Col>
                <Col sm={6} md={4} lg={3} style={Style.col}>sm: 6, md: 4, lg: 3</Col>
            </Row>
            <Row style={Style.row} align="start">
                <Col xs={4} style={tallCol(50)}>align: start</Col>
                <Col xs={4} style={tallCol(35)}>align: start</Col>
                <Col xs={4} style={tallCol(70)}>align: start</Col>
            </Row>
            <Row style={Style.row} align="center">
                <Col xs={4} style={tallCol(50)}>align: center</Col>
                <Col xs={4} style={tallCol(35)}>align: center</Col>
                <Col xs={4} style={tallCol(70)}>align: center</Col>
            </Row>
            <Row style={Style.row} align="end">
                <Col xs={4} style={tallCol(50)}>align: end</Col>
                <Col xs={4} style={tallCol(35)}>align: end</Col>
                <Col xs={4} style={tallCol(70)}>align: end</Col>
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
                <Col md={6} style={Style.col}>
                    <Row>
                        <Col style={Style.col}>Nested columns</Col>
                        <Col md={6} style={Style.col}>Nested</Col>
                        <Col md={6} style={Style.col}>Nested</Col>
                    </Row>
                </Col>
                <Col md={6} style={Style.col}>
                    Not nested
                </Col>
            </Row>
            <Row style={Style.row}>
                <Col a={2} b={4} style={Style.col}>a: 2, b: 4</Col>
                <Col a={2} b={4} style={Style.col}>a: 2, b: 4</Col>
                <Col a={2} b={4} style={Style.col}>a: 2, b: 4</Col>
                <Col a={2} b={4} style={Style.col}>a: 2, b: 4</Col>
            </Row>
        </Container>
    </PureGridProvider>
);

render(SimpleGrid, document.body);
