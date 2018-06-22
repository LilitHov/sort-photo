import React from 'react';
import axios from 'axios';
import ReactDOM from "react-dom";
import { Row, Col} from 'reactstrap';
import './App.css';


// Axios with React test
class Gallery extends React.Component {

    state = {
        photos: []
    };

    componentDidMount() {
        // via get method getting 10 photos and send to App.js
        axios.get('https://jsonplaceholder.typicode.com/photos')
            .then(result => {
                // console.log(result);
                // save all info in result
                const photos = result.data;
                this.setState({ photos });
               // console.log(photos)
            });

    }

    render() {
        return (
            <Row >
                {/*using ES6 map() // like a foreach*/}
                { this.state.photos.map(function(photo,index) {
                    // get only 10 elements
                        if (index<10){
                            return(
                                <Col className="searchedItem">
                                    <img src={photo.url} alt="" title={photo.title} key={index}  />
                                </Col>
                            )
                        }
                    }
                )}
            </Row>
        )
    }
}

export default Gallery;
