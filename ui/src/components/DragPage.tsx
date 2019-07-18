import React, { Component } from 'react';
//import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';

class DragPage extends Component {

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
                position={{ x: 0, y: 0 }}
                grid={[25, 25]}
                scale={1}
            //onStart={this.handleStart}
            //onDrag={this.handleDrag}
            //onStop={this.handleStop}
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