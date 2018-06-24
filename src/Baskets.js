import React from 'react';
import {Col} from 'reactstrap';
import './App.css';


class Baskets extends React.Component {
    constructor(props){
        super(props);
        //console.log(this.props)
    }




    render() {
        return (
            <div className="basketElems">
                <Col>{this.props.first}</Col>
                {/*<Col>{secondWord}</Col>*/}
            </div>
        )
    }
}

export default Baskets;
