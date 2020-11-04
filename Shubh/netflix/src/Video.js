import React, { Component } from 'react'
import './style.css';

class Video extends Component {
    render() {
        const {
            img = "",
            title = "",
            addToRec,
            removeFromRec,
            add = false,
            remove = false
        } = this.props
        return (
            <div className="video">
                <img src={img} />
                <p>{title}</p>
                {add && (<button onClick={addToRec}>Add</button>)}
                {remove && (<button onClick={removeFromRec}>Remove</button>)}
            </div>
        )
    }
}

export default Video
