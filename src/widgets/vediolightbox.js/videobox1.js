import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';

class Videobox1 extends Component {
    constructor() {
        super()
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.setState({ isOpen: true })
    }
    render() {
        return (
          
                    <div className="row">
                         <ModalVideo channel='custom' isOpen={this.state.isOpen} autoplay={true} url='https://video-rivaldo-pm.s3.us-east-2.amazonaws.com/IMG_5368.MP4' onClose={() => this.setState({ isOpen: false })} />
                               
                        <div className="col-12 col-lg-6 py-11 z-index-1">
                            {/* Heading */}
                        
                            <div className="video-btn ml-5"> 
                                <a className="play-btn popup-youtube" onClick={this.openModal}><i className="la la-play" /></a>
                                <div className="spinner-eff">
                                <div className="spinner-circle circle-1" />
                                <div className="spinner-circle circle-2" />
                                </div>
                            </div>


                            <h1 className="display-4 mt-8 font-w-5">
                            Sientete mejor y descubre porque el mejor jugador del mundo toma fitline cada dia
                            </h1>
                            {/* Text */}
                            <p className="lead text-muted">Mejor rendimiento &amp; bienestar para ti y tu familia.</p>
                        </div>
                    </div>
            

        );
    }
}

export default Videobox1;