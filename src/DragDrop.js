import React from 'react';
import {Droppable} from 'react-drag-and-drop';
import Gallery from './Gallery';


class DragDrop extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            draggPhotos: []
        }
    }

    componentWillReceiveProps() {
        this.setState({
            search: this.props.search,
        })
    }


    render() {
        return (

            <div>
                <Gallery search={this.props.search}/>
                <Droppable className="basketElems"
                           types={['img']}
                           onDrop={this.onDrop.bind(this)}>
                    <div>{this.props.search}</div>
                </Droppable>
                <div>
                    <ul className="Smoothie">
                        {this.state.draggPhotos.map(function (photo, index) {
                                return (
                                    <li key={index}>
                                        {photo}
                                    </li>
                                )
                            }
                        )}
                    </ul>
                </div>
            </div>)
    }

    onDrop(data) {
        let regExp = this.props.search.toLowerCase();
        let searchWord = data.img.toLowerCase();
        let findPlace = searchWord.search(regExp);


        console.log(this.props);
        if ( findPlace !== -1 ) {
            alert(true);
            this.setState({
                draggPhotos: [...this.state.draggPhotos, data.img]

            });

            // delete item from state array
            // let index = this.state.selectedPhotos.indexOf(data.img);
            // this.state.selectedPhotos.splice(index,1);
            // this.setState({
            //     selectedPhotos:[...this.state.selectedPhotos]
            // });
            // delete item from state array
        } else {
            alert(false)
        }
    }
}

export default DragDrop;