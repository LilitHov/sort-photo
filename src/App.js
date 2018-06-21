import React,{Component} from 'react';
import './App.css';
// import elements from bootstrap
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';




class App extends Component {
    render() {
        return (
            <div className='App'>
                <Container>
                    <Row className="show-grid">
                        <Col xs={12} sm={8} smoffset={2} style={styles.sortPhotosOverall}>
                            <div style={styles.searchBlock}>
                                <Form method='post' action='https://www.google.com/search'>
                                    <FormGroup>
                                        <input type="text" placeholder={content.searchPlaceholder} style={styles.searchBlockInput} className='form-control-lg'/>
                                        <Button type="submit" style={styles.btnSearch}>{content.search}</Button>
                                    </FormGroup>
                                </Form>
                            </div>
                            <div style={styles.sortingPhotos}>
                                   <span style={styles.sortSpan}>
                                       {content.searchPics}
                                    </span>
                            </div>
                            <div style={styles.sortedBlock}>
                                    <span style={styles.sortSpan}>
                                        {content.selectedPhotos}
                                      </span>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}




// content
const content = {
    searchPlaceholder:'Search images from Flickr.com',
    search: 'Search',
    searchPics:'Search pics to sort',
    selectedPhotos:'Selected photos',
};
// content


// styles
const styles = {
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
        height: 380,
        border: '1px dashed #61DAFB'
    },
    sortedBlock:{
        height: 250,
        border: '1px dashed #61DAFB',
        marginTop: 15
    },
    'sortSpan':{
    fontSize:32
     },

};
// styles




export default App;
