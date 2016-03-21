import {getIndex, KeyMap} from './Grid';
const React = require('react');

export default React.createClass({
    propTypes: {
        xs: React.PropTypes.bool,
        sm: React.PropTypes.bool,
        md: React.PropTypes.bool,
        lg: React.PropTypes.bool
    },

    isVisible() {
        const key = KeyMap[getIndex()];
        if ( this.props.hasOwnProperty(key) ) {
            return !!this.props[key];
        }

        return !KeyMap.some((nKey) => {
            return this.props.hasOwnProperty(nKey) && this.props[nKey];
        });
    },

    render() {
        const Style = {display: 'block'};
        return this.isVisible()? <div style={Style}></div> : null;
    }
});