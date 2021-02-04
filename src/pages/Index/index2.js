import React, { Component } from "react";
import Header3 from "../../layout/header/header3";
import Herosection1 from "../../widgets/herosection/herosection1";
import FeatureServices from "../../widgets/featurebox/services";
import Counter1 from "../../widgets/counter/counter1";
import About from "../../widgets/index/about";
import Skillbox from "../../widgets/featurebox/skillbox";
import Team1 from "../../widgets/team/team1";
import Pricingplan1 from "../../widgets/pricingplan/pricingplan1";
import Blog2 from "../../widgets/blog/blog2";
import About1 from "../../widgets/index/about1";
import axios from 'axios';


class Index2 extends Component {
  constructor(props) {
    super(props);
  }
  handleOnSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    // setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://formspree.io/f/xoqpbeee",
      data: new FormData(form),
    })
      .then((r) => {
        // handleServerResponse(true, "Thanks!", form);
        console.log("cool");
      })
      .catch((r) => {
        console.log("cool");
        // handleServerResponse(false, r.response.data.error, form);
      });
  };

  componentDidMount() {
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <div>
        {/*hero section start*/}
        <Herosection1 />
        {/*hero section end*/}
        {/*header start*/}
        <Header3 />
        {/*header end*/}
        {/*body content start*/}
        <div className="page-content">
          {/*services start*/}
          <section className="custom-pb-3 bg-primary position-relative">
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8">
                  <div>
                    <h2 className="text-white font-w-5">
                      Rivaldo recomienda los productos fitline
                    </h2>
                    <p className="lead mb-0 text-light">
                      El campeon mundial toma fitline antes de su entrenamiento
                      diario
                    </p>
                    <p className="lead mb-0 text-light">
                      Quieres probar el entrenamiento de Rivaldo?
                    </p>
                    <div className="mb-3">
                      <form onSubmit={this.handleOnSubmit} >
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          name="email"
                        ></input>
                        <button type="submit" className="btn btn-success">
                          Success
                        </button>
                      </form>
                    </div>

                    {/* <div className="mb-3">
                      <label
                        htmlFor="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Example textarea
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* / .row */}
            </div>
            <div
              className="shape-1 bottom"
              style={{ height: "55px", overflow: "hidden" }}
            >
              <svg
                viewBox="0 0 500 150"
                preserveAspectRatio="none"
                style={{ height: "100%", width: "100%" }}
              >
                <path
                  d="M0.00,49.98 C150.00,150.00 349.20,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                  style={{ stroke: "none", fill: "white" }}
                />
              </svg>
            </div>
          </section>
          {/* <section className="mt-n15 p-0"> */}
          {/* <div className="container">
              <FeatureServices  bgshadow="bg-white shadow" />
            </div> */}
          {/* </section> */}
          {/*services end*/}
          {/*counter start*/}
          {/* <section>
            <div className="container">
              <Counter1 />
            </div>
          </section> */}
          {/*counter end*/}
          {/*about start*/}
          {/* <section className="pt-0">
          <About1 />
          </section> */}
          {/*about end*/}
          {/*feature start*/}
          {/* <Skillbox /> */}
          {/*feature end*/}
          {/*team start*/}
          {/* <section> */}
          {/* <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                    Bootsland Team
                        </span>
                    <h2 className="mt-3 font-w-6">Meet Our Team Of Expert</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div> */}
          {/* / .row */}
          {/* <Team1 />
            </div>
          </section> */}
          {/*team end*/}
          {/*pricing start*/}
          {/* <section>
            <div className="container-fluid">
          <Pricingplan1 />
          </div>
          </section> */}
          {/*pricing end*/}
          {/*blog start*/}
          {/* <section>
            <div className="container">
              <div className="row justify-content-center text-center">
                <div className="col-12 col-md-12 col-lg-8 mb-8 mb-lg-0">
                  <div className="mb-8"> <span className="badge badge-primary-soft p-2 font-w-6">
                    Latest News
                        </span>
                    <h2 className="mt-3 font-w-6">From Our Blog List Latest Feed</h2>
                    <p className="lead mb-0">All types of businesses need access to development resources, so we give you the option to decide how much you need to use.</p>
                  </div>
                </div>
              </div>
              {/* / .row */}
          {/* <Blog2 /> 
            </div>
          </section> */}
          {/*blog end*/}
        </div>
        {/*body content end*/}
      </div>
    );
  }
}

export default Index2;
