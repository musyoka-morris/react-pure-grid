import React from 'react';
import prefix from './prefix';
import GridComponent from './GridComponent';

export default class Col extends GridComponent {
    
    getStyle() {
        const {breakPoints, gutterSize} = this.contextProps();
        const percentage = (suffix = '') => {
            for ( let key in breakPoints ) {
                if ( breakPoints.hasOwnProperty(key) && this.isInside(breakPoints[key]) ) {
                    let propName = key + suffix;
                    if ( this.props.hasOwnProperty(propName) ) {
                        const cols = this.props[propName];
                        return (cols/12)*100;
                    }
                }
            }
            return 100;
        };
        const width = percentage();
        const offset = percentage('Offset');
        
        return {
            main: {
                padding: 0,
                margin: 0,
                marginLeft: (offset == 100? 0 : offset) + '%',
                width: width + '%'
            },
            inner: {
                marginTop: 0,
                marginBottom: 0,
                marginRight: gutterSize,
                marginLeft: gutterSize,
                padding: 0,
                position: 'relative'
            }
        };
    }

    render() {
        const Styles = prefix(this.getStyle());
        return (
            <div style={Styles.main}>
                <div style={Styles.inner}>
                    <div {...this.props}>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
