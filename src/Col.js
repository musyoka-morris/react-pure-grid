import {KeyMap, OffsetMap, getIndex} from './Grid';
const React = require('react');

function getState() {
    return { index: getIndex() };
}

export default React.createClass({

    propTypes: {
        gutter: React.PropTypes.number.isRequired
    },

    getInitialState() {
        return getState();
    },

    componentWillReceiveProps() {
        this.setState(getState());
    },

    calculateSize(map) {
        const {index} = this.state;
        for ( let i = index; i < map.length; i++ ) {
            const key = map[i];
            if ( this.props.hasOwnProperty(key) ) {
                const cols = this.props[key];
                return (cols/12)*100;
            }
        }
        return -1;
    },

    getWidth() {
        const width = this.calculateSize(KeyMap);
        return width < 0? 100 : width;
    },

    getOffset() {
        const offset = this.calculateSize(OffsetMap);
        return Math.max(offset, 0);
    },

    getStyle() {
        const {gutter} = this.props;
        return {
            main: {
                padding: 0,
                margin: 0,
                marginLeft: this.getOffset() + '%',
                width: this.getWidth() + '%'
            },
            inner: {
                marginTop: 0,
                marginBottom: 0,
                marginRight: gutter,
                marginLeft: gutter,
                padding: 0,
                position: 'relative'
            }
        }
    },

    render() {
        const Styles = this.getStyle();
        return <div style={Styles.main}>
            <div style={Styles.inner}>
                <div {...this.props}>
                    {this.props.children}
                </div>
            </div>
        </div>;
    }
});
