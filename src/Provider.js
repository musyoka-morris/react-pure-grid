import React, {Component, PropTypes} from 'react';
import Defaults from './Defaults';

export default class Provider extends Component {
    
    static propTypes = {
        gutterSize: PropTypes.number,
        maxWidth: PropTypes.number,
        breakPoints: PropTypes.object,
        replaceBreakPoints: PropTypes.bool
    };
    
    static defaultProps = {
        ...Defaults,
        replaceBreakPoints: false
    };
    
    static childContextTypes = {
        pureGrid: PropTypes.object
    };
    
    getChildContext() {
        let {gutterSize, maxWidth, replaceBreakPoints, breakPoints} = this.props;
        
        if ( !replaceBreakPoints ) {
            breakPoints = Object.assign({}, Defaults.breakPoints, breakPoints);
        }
        
        return {
            pureGrid: {
                gutterSize,
                maxWidth,
                breakPoints
            }
        };
    }
    
    
    render() {
        return <div>{this.props.children}</div>;
    }
}