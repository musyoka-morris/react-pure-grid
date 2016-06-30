import React, {Component, PropTypes} from 'react';
import Defaults from './Defaults';

export default class GridComponent extends Component {

    static contextTypes = {
        pureGrid: PropTypes.object
    };
    
    constructor(props) {
        super(props);
        this.state = { browserWidth: 0 };
        this.handleWindowResize = this.handleWindowResize.bind(this);
    }

    handleWindowResize() {
        const browserWidth = window.innerWidth;
        this.setState({browserWidth});
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleWindowResize);
        this.handleWindowResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowResize);
    }

    isInside(breakpoint) {
        const {browserWidth} = this.state;
        return browserWidth >= breakpoint.browser;
    }
    
    contextProps() {
        const {pureGrid} = this.context;
        return Object.assign({}, Defaults, pureGrid);
    }
}