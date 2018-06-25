import React from 'react';
import axios from 'axios';
import {Row, Col} from 'reactstrap';
import './App.css';
import {Draggable,} from 'react-drag-and-drop';


// Axios with React
class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.axios = this.axios.bind(this);

        this.state = {
            photos: [],
        };
    }

    componentWillReceiveProps() {
        this.axios();
        this.setState({
            search: this.props.search,
        })
    }

    axios() {
        let url = 'https://api.flickr.com/services/rest' +
            '?sort=relevance' +
            '&parse_tags=1' +
            '&content_type=7' +
            '&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z' +
            '&per_page=10' +
            '&page=1' +
            '&lang=en-US' +
            '&text=' + this.props.search +
            '&viewerNSID=' +
            '&method=flickr.photos.search' +
            '&csrf=' +
            '&api_key=5054131d8e190719e51ab3da4d0a84a6' +
            '&format=json' +
            '&hermes=1' +
            '&hermesClient=1' +
            '&reqId=92c4c659&nojsoncallback=1';
        axios.get(url)
            .then(result => {
                const photos = result.data.photos.photo;
                this.setState({photos});
            });
    }

    render() {
        return (
            <Row>
                {this.state.photos.map(function (photo, index) {
                    return (
                        <Col className="searchedItem">
                            <Draggable type="img" data={photo.title} url={photo.url_c} key={index}>
                                <img src={photo.url_c} alt="" title={photo.title}/>
                            </Draggable>
                        </Col>
                    );
                })}
            </Row>
        )
    }
}

export default Gallery;
