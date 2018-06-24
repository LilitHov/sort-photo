import React from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';

// let element = ['num','kum','zoom','apook'];
// let index = element.indexOf('kum');
// console.log(element);
// element.splice(index,1);
// console.log(element);


class DragDrop extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            allowable : 'apple',
            selectedPhotos:[
                'banana','apple','orange','apple','apple'

            ],
            draggPhotos:[
                'cat','dog','bear'
            ]

        }
    }





    componentWillReceiveProps()
    {
        this.setState({
            allowable: this.props.allowable,
        })
    }

    removePeople(elem){

       let array = this.state.selectedPhotos;
       let index = array.indexOf(elem); // Let's say it's Bob.
        array.slice(index,1);
    };


    render() {
        return (
            <div>
                <ul>
                        { this.state.selectedPhotos.map(function(photo,index) {
                                return(
                                    <Draggable type="fruit" data={photo}>
                                    <li key={index}>
                                        {photo}
                                    </li>
                                    </Draggable>
                                )
                            }
                        )}
                </ul>
                <Droppable className="basketElems"
                     types={['fruit']} // <= allowed drop types
                     onDrop={this.onDrop.bind(this)} >
                    <div>cat</div>
                    {/*<Col>{secondWord}</Col>*/}
                </Droppable>
                <div>
                    <ul className="Smoothie">
                        { this.state.draggPhotos.map(function(photo,index) {
                                    return(
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

        if (data.fruit === this.state.allowable)
        {
            alert(true);
          //  add a selected item to selectedPhotos
            this.setState({
                draggPhotos: [...this.state.draggPhotos, data.fruit]

            });
            let index = this.state.selectedPhotos.indexOf(data.fruit);
            this.state.selectedPhotos.splice(index,1);

            this.setState({
                selectedPhotos:[...this.state.selectedPhotos]
            });



        }else{
            alert(false)
        }
    }

}

export default DragDrop;

