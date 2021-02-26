import React, { Component } from 'react';
import Lake from './images/image1.jpg'
import Redsky from './images/image2.webp'
import Yoda from './images/image3.jpeg'
import Aurora from './images/image4.jpg'
import Google from './images/image5.jpg'
import MounFuji from './images/image6.jpg'


class Image extends Component {
    clickImg(image){
        this.setState({modalImg: image,
            modalDisplay: 'flex'
        });
    }
    closeImg(){
        this.setState({modalDisplay: 'none'});
    }

    render() {
        return (
            <div>
                <div class="grid_container">
                <div class="grid-item"><img onClick={(e)=>this.clickImg(Lake)} src={Lake} alt="lake"/></div>
                <div class="grid-item"><img onClick={(e)=>this.clickImg(Redsky)} src={Redsky} alt="redsky"/></div>
                <div class="grid-item"><img onClick={(e)=>this.clickImg(Yoda)} src={Yoda} alt="yoda"/></div>
                <div class="grid-item"><img onClick={(e)=>this.clickImg(Aurora)} src={Aurora} alt="aurora"/></div>
                <div class="grid-item"><img onClick={(e)=>this.clickImg(Google)} src={Google} alt="google"/></div>
                <div class="grid-item"><img onClick={(e)=>this.clickImg(MounFuji)} src={MounFuji} alt="mounfuji"/></div>
            </div>
	            <div class="overlay" id="overlay" ><img class="obj" id="obj"/></div>
            </div>
        )
    }
}

export default Image; 