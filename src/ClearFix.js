import React, {PropTypes} from 'react';
import GridComponent from './GridComponent';

/**
 * PropTypes: Any key in the breakpoints object, As provided by the PureGridProvider, whose value should be boolean
 * The boolean value determines whether the component should be rendered at that particular break point.
 * Defaults to {true} for all breakPoints
 */
export default class ClearFix extends GridComponent {

    /**
     * Determines whether this component is to be rendered with respect to the browser width
     * To disable render, pass a breakpoint key as props with the value false
     * 
     * Example: <ClearFix xs={false} />
     * @returns {boolean}
     */
    isVisible() {
        const {breakPoints} = this.contextProps();
        for ( let key in breakPoints ) {
            if ( breakPoints.hasOwnProperty(key) &&
                    this.props.hasOwnProperty(key) &&
                    this.isInside(breakPoints[key]) ) {
                return this.props[key];
            }
        }
        
        //Defaults to true
        return true;
    }

    render() {
        const Style = {display: 'block'};
        return this.isVisible()? <div style={Style}></div> : null;
    }
    
}