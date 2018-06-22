import React,{Component} from 'react';
import './App.css';
// import elements from bootstrap
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
// Import default Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.css';
import Gallery from './Gallery'



class App extends Component {
    render() {
        return (
<div className='App'>
    <Container>
        <Row className="show-grid">
            <Col xs={12}  style={STYLES.sortPhotosOverall}>
                <div style={STYLES.searchBlock}>
                    <Form method='post' action='https://www.google.com/search'>
                        <FormGroup>
                            <input type="text" placeholder={CONTNET.searchPlaceholder} style={STYLES.searchBlockInput} className='form-control-lg'/>
                            <Button type="submit" style={STYLES.btnSearch}>{CONTNET.search}</Button>
                        </FormGroup>
                    </Form>
                </div>
                <Row className="show-grid">
                    <Col xs={12} sm={12} md={8}>
                        <div style={STYLES.sortingPhotos}>
                       <span style={STYLES.sortSpan}>

                           {CONTNET.searchPics}
                           <Gallery />
                        </span>
                        </div>
                    </Col>
                    <Col xs={12} sm={12} md={4}>
                        <div style={STYLES.sortedBlock}>
                        <span style={STYLES.sortSpan}>
                            {CONTNET.selectedPhotos}
                          </span>
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
</div>
        )
    }
}




// content
const CONTNET = {
    searchPlaceholder:'Search images from Flickr.com',
    search: 'Search',
    searchPics:'Search pics to sort',
    selectedPhotos:'Selected photos',
};
// content


// styles
const STYLES = {
    sortPhotosOverall: {
        background: '#0C2B3B',
        color: '#2892C7',
        padding: '5px 15px 10px',
        borderRadius: 10
    },
    searchBlock: {
        padding:'30px 26px'
    },
    'searchBlockInput': {
        width: '80%',
        marginRight: 40
    },
    // 'searchBlockInput:focus':{
    //     borderColor:'#0C2B3B',
    //     boxShadow:'none',
    // },
    btnSearch:{
        background:'#61DAFB',
        color:'#0C2B3B',
        border:'none',
        padding: '9px 16px',
        marginBottom: 6,
        fontSize: 18,
    },
    // 'btnSearch:hover':{
    //     background:'#49b9d1',
    //     boxShadow:'none',
    //     color:'red'
    // },
    sortingPhotos:{
        padding: '5px 10px',
        height: 'auto',
        border: '1px dashed #61DAFB'
    },
    sortedBlock:{
        height: '100%',
        border: '1px dashed #61DAFB',
    },
    'sortSpan':{
        fontSize:32
    },

};
// styles



export default App;

