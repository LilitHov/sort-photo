import React from 'react';
import {Col} from 'reactstrap';
import './App.css';


class Baskets extends React.Component {
    render() {
        return (
            <div className="basketElems">
                <Col>Basket1</Col>
                <Col>Basket2</Col>
            </div>
        )
    }
}

export default Baskets;
