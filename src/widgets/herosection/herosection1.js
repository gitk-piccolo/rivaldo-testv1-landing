import React, { Component } from "react";
import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import Videobox1 from "../vediolightbox.js/videobox1";
import Draggable from "react-draggable";

class Herosection1 extends Component {
  render() {
    return (
      <section className="position-relative overflow-hidden pb-0">
        <Draggable>
          <img
            className="draggableBall"
            src={require(`../../assets/images/icon/football.svg`)}
            alt=""
          />
        </Draggable>

        <div className="container">
          <Videobox1 />
          {/* / .row */}
        </div>

        {/* / .container */}
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">
              {/* <div className="heroparallax"> */}
              <ParallaxProvider>
                <Parallax className="heroparallax" x={[-45, 20]}>
                  <img
                    className="img-fluid thumbnail onLgSmallify"
                    src={require(`../../assets/images/hero/rivaldo.jpg`)}
                    alt=""
                  />
                </Parallax>
              </ParallaxProvider>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Herosection1;
