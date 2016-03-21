import {listen, unListen} from './Grid';
import Col from './Col';
const React = require('react');

const positionMap = ['start', 'end', 'center'];
const positionPropType = React.PropTypes.oneOf(positionMap);

function mustBeCols(props, propName, componentName) {
    const prop = props[propName];
    let error = null;
    React.Children.forEach(prop, (el) => {
        if ( error ) return;
        if ( el.type != Col ) {
            error = new Error(`${componentName} should only have children of type ${Col.displayName}.`);
        }
    });
    return error;
}

function flexPosition(given) {
    if ( positionMap.indexOf(given) < 0 ) return '';
    return given == 'center'? given : `flex-${given}`;
}

export default React.createClass({
    propTypes: {
        gutter: React.PropTypes.number,
        justify: positionPropType,
        align: positionPropType,
        reverse: React.PropTypes.bool,
        children: mustBeCols
    },

    getDefaultProps() {
        return {
            gutter: 15,
            justify: 'start',
            align: 'start',
            reverse: false
        };
    },

    getStyle() {
        const {gutter, justify, align, reverse} = this.props;
        return {
            marginLeft: -gutter,
            marginRight: -gutter,
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
            display: 'flex',
            flexDirection: reverse? 'row-reverse' : 'row',
            flexWrap: 'wrap',
            justifyContent: flexPosition(justify),
            alignItems: flexPosition(align)
        };
    },

    handleWindowResize() {
        this.forceUpdate();
    },

    componentDidMount() {
        listen(this.handleWindowResize);
    },

    componentWillUnmount() {
        unListen(this.handleWindowResize);
    },


    render() {
        const {gutter, children} = this.props;
        const style = this.getStyle();

        return (
            <div {...this.props}>
                <div style={style} >
                    {React.Children.map(children, (child) => React.cloneElement(child, {gutter}))}
                </div>
            </div>
        );
    }
});