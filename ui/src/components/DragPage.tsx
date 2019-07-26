import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class DragPage extends Component {

    constructor(props: any) {
        super(props);
        const x = localStorage.getItem("position_x");
        const y = localStorage.getItem("position_y");
        this.state = {
            componentPosition: {
                x: Number(x) || 0,
                y: Number(y) || 0
            }
        };
    };

    onDrag = (e: MouseEvent, position: any) => {
        const { x, y } = position;
        this.setState({
            position: { x, y }
        });
    };

    onStop = (e: MouseEvent, position: any) => {
        const { x, y } = position;

        localStorage.setItem("position_x", x);
        localStorage.setItem("position_y", y)
    };

    eventLogger = (e: MouseEvent, data: Object) => {
        console.log('Event: ', e);
        console.log('Data: ', data);
    };

    render() {
        return (
            <Draggable
                axis="x"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={this.state}
                grid={[25, 25]}
                scale={1}
            >
                <div>
                    <div className="handle">Drag from here</div>
                    <div>This readme is really dragging on...</div>
                </div>
            </Draggable>
        );
    }
}

//ReactDOM.render(<DragPage />, document.body);
export default DragPage;