import React, {PropTypes} from 'react';
import prefix from './prefix';
import GridComponent from './GridComponent';

export default class Row extends GridComponent {
    
    static propTypes = {
        justify: PropTypes.oneOf(['start', 'end', 'center']),
        align: PropTypes.oneOf(['start', 'end', 'center']),
        reverse: PropTypes.bool
    };

    static defaultProps = {
        justify: 'start',
        align: 'start',
        reverse: false
    };

    render() {
        const {gutterSize} = this.contextProps();
        const {justify, align, reverse, ...others} = this.props;
        const position = (g) => (g == 'center'? g : `flex-${g}`);

        const style = prefix({
            marginLeft: -gutterSize,
            marginRight: -gutterSize,
            marginTop: 0,
            marginBottom: 0,
            padding: 0,
            display: 'flex',
            flexDirection: reverse? 'row-reverse' : 'row',
            flexWrap: 'wrap',
            justifyContent: position(justify),
            alignItems: position(align)
        });

        return (
            <div {...others}>
                <div style={style} >
                    {this.props.children}
                </div>
            </div>
        );
    }
}