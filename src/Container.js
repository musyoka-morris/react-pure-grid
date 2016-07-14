import React, {PropTypes} from 'react';
import prefix from './prefix';
import GridComponent from './GridComponent';

export default class Container extends GridComponent {

    static propTypes = {
        fluid: PropTypes.bool
    };

    static defaultProps = {
        fluid: true
    };
    
    getStyle() {
        const {fluid} = this.props;
        const {breakPoints, maxWidth} = this.contextProps();
        let width = 600;
        for ( let key in breakPoints ) {
            if ( breakPoints.hasOwnProperty(key) && this.isInside(breakPoints[key]) ) {
                width = breakPoints[key].container;
                break;
            }
        }
        
        return {
            margin: 'auto',
            width: fluid? 'auto' : width,
            maxWidth: isNaN(width)? maxWidth : Math.min(width, maxWidth)
        };
    }

    render() {
        const style = prefix(this.getStyle());
        return (
            <div style={style}>
                <div {...this.props}>
                    {this.props.children}
                </div>
            </div>);
    }
}