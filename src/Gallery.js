import React from 'react';
import axios from 'axios';
import { Row, Col} from 'reactstrap';
import './App.css';


// Axios with React test
class Gallery extends React.Component {
    constructor(props){
        super(props);
        this.axios = this.axios.bind(this);

        this.state = {
            photos: [],
            search: ''
        };

    }


    componentDidMount()
    {
        this.axios();
    }
    componentWillReceiveProps()
    {
        this.axios();
    }


    axios()
    {
        console.log(this.props);
        let url = 'https://api.flickr.com/services/rest' +
            '?sort=relevance' +
            '&parse_tags=1' +
            '&content_type=7' +
            '&extras=can_comment%2Ccount_comments%2Ccount_faves%2Cdescription%2Cisfavorite%2Clicense%2Cmedia%2Cneeds_interstitial%2Cowner_name%2Cpath_alias%2Crealname%2Crotation%2Curl_c%2Curl_l%2Curl_m%2Curl_n%2Curl_q%2Curl_s%2Curl_sq%2Curl_t%2Curl_z' +
            '&per_page=25' +
            '&page=1' +
            '&lang=en-US' +
            '&text=' + this.props.search +
            '&viewerNSID=' +
            '&method=flickr.photos.search' +
            '&csrf=' +
            '&api_key=9c57468fb1ebdf940881ebeedaebb831' +
            '&format=json' +
            '&hermes=1' +
            '&hermesClient=1' +
            '&reqId=92c4c659&nojsoncallback=1';
        axios.get(url)
            .then(result => {
                // console.log(result);
                // save all info in result
                const photos = result.data.photos.photo;
                console.log(photos);
                this.setState({ photos });
                // console.log(this.photos)
                // .catch((err) => {
                //         console.log(err)
            });
    }

    render() {
        return (
            <Row >
                {/*using ES6 map()*/}
                { this.state.photos.map(function(photo,index) {
                        if (index<10){
                            return(
                                <Col className="searchedItem" key={index}>
                                    <img src={photo.url_c} alt="" title={photo.title}   />
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
