import {ContainerWidthMap, getIndex, listen, unListen} from './Grid';
const React = require('react');

export default React.createClass({
    propTypes: {
        fluid: React.PropTypes.bool
    },

    getInitialState() {
        return this.getState();
    },

    getDefaultProps() {
        return { fluid: false };
    },

    getStyle() {
        return {
            margin: 'auto',
            width: this.props.fluid? 'auto' : ContainerWidthMap[getIndex()],
            maxWidth: ContainerWidthMap[0]
        };
    },

    getState() {
        return { style: this.getStyle() };
    },

    handleWindowResize() {
        this.setState(this.getState());
    },

    componentDidMount() {
        listen(this.handleWindowResize);
    },

    componentWillUnmount() {
        unListen(this.handleWindowResize);
    },

    render() {
        return <div style={this.state.style}>{this.props.children}</div>;
    }
});