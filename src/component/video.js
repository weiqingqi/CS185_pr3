import { Component } from 'react';
import v1 from './videos/video1.mp4'
import v2 from './videos/video2.mp4'
import v3 from './videos/video3.mp4'

class Videos extends Component {
    constructor() {
        super();
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    onClickHandler(event) {
        event.stopPropagation();
    }

    showVideo(event) {
        var ol = document.getElementById("overlay");
        var video = document.getElementById("in_overlay");
        ol.style.display = "block";
        video.src = event.target.src;
        video.type = event.target.type;
    }

    hideVideo() {
        var ol = document.getElementById("overlay");
        ol.style.display = "none";
    }
    render() {
        return (
            <div>
                <div class="grid_container">
                <div class="grid-item"><video onClick={this.showVideo} src={v1}></video></div>
                <div class="grid-item"><video onClick={this.showVideo} src={v2}></video></div>
                <div class="grid-item"><video onClick={this.showVideo} src={v3}></video></div>
                </div>
                <div id="overlay" className="overlay" onClick={this.hideVideo}>
                <video id="in_overlay" className="in_overlay" onClick={this.onClickHandler} controls></video>
            </div>
            </div>
        )
    }
}


export default Videos;