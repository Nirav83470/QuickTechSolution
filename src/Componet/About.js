import Menu from "./Menu";
import cilents from "./img/client1.svg";
import centerimg from "./img/about_counter.png";
import crical from "./img/header_cercle.png";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel';

import "./About.css";

const About = () => {
  return (
    <>
      {/* ====================  Fixed Start =========================== */}

      <div className="site-wrapper">
        <div className="header_about">
          <Menu />
        </div>
      </div>

      {/* ====================  Fixed End =========================== */}

      {/* ============================ About Us Start ===================== */}

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>About us</h5>
              <h2>Securing your website is easy with cyber safe.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboren do tempor amet elit.
              </p>
              <div className="row mt-4">
                <div className="col-lg-3 col-md-3 d-flex justify-content-md-start justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 className="count">16</h2>
                  <h2>+</h2>
                </div>
                <div className="col-lg-9 col-md-9">
                  <h3>Year of experience</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor off laboren amet elit.
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div class="col-lg-3 col-md-3 d-flex d-flex justify-content-md-start justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 class="count">200</h2>
                  <h2>+</h2>
                </div>
                <div class="col-lg-9 col-md-9">
                  <h3>Servers protection</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor off laboren amet elit.
                  </p>
                </div>
              </div>
              <div className="mt-md-5 mt-sm-4 mt-4 d-flex justify-content-md-start justify-content-sm-center justify-content-center gap-3">
                <a href="About.html" className="btn_hover">
                  Learn more
                </a>
                <a href="Contact.html" className="btn_hover2">
                  Get started
                </a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mt-md-0 mt-sm-5 mt-5">
              <figure>
                <img
                  src={require("./img/aboutimg.png")}
                  alt="img"
                  class="ab-image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
      {/* ============================ About Us End ===================== */}

      {/* ============================  Silders Clients Start ======================== */}

      <section className="client">
        <div className="container text-center">
          <h5>Our client</h5>
          <h2>We help companies around the world</h2>
        </div>
        <div className="d-flex justify-content-md-evenly justify-content-sm-center justify-content-center align-items-center flex-wrap gap-4">
          <figure>
            <img src={cilents}></img>
          </figure>
          <figure>
            <img src={cilents}></img>
          </figure>
          <figure>
            <img src={cilents}></img>
          </figure>
          <figure>
            <img src={cilents}></img>
          </figure>
          <figure>
            <img src={cilents}></img>
          </figure>
        </div>
      </section>

      {/* ============================  Silders Clients End ======================== */}


      {/* ============================= visions Start =============================== */}

      <section className="vision">
  <div className="container">
    <div className="row d-flex align-items-center">
      <div className="col-lg-7 col-md-6 d-flex justify-content-between gap-3 position-relative pe-0">
        <figure>
          <img src={require("./img/vision1.jpg")} alt="img" />
        </figure>
        <figure>
          <img src={require("./img/vision2.jpg")} alt="img" />
        </figure>
        <figure>
          <img
            src="assets/Images/bg/about_cercle1.png"
            alt="img"
            className="vision-cercle"
          />
        </figure>
      </div>
      <div className="col-lg-5 col-md-6 text-md-start text-sm-center text-center mt-md-0 mt-sm-5 mt-4">
        <h5>Our vision</h5>
        <h2>Cyber safe concern over increased cyber-crime</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <h3>Vision</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <h3>Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </p>
        <a href="#" className="btn_hover mt-4">
          Learn more
        </a>
      </div>
    </div>
  </div>
</section>


      {/* ============================= visions end =============================== */}



      {/* =============================   conter sections strat============================ */}


      <section className="counter">
          <div className="container d-flex justify-content-between ps-lg-0 ps-md-5 ps-sm-5 ps-5 align-items-center flex-wrap gap-md-3 gap-sm-4 gap-4">
            <div className="ab_counter d-flex align-items-center">
              <figure>
              <img src={centerimg} alt="img" />
              </figure>
              <div>
                <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 className="count">99</h2>
                  <h2>%</h2>
                </div>
                <h5>Secure service</h5>
              </div>
              <hr />
            </div>
            <div className="ab_counter d-flex align-items-center">
              <figure>
                <img src={centerimg} alt="img" />
              </figure>
              <div>
                <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 className="count">200</h2>
                  <h2>+</h2>
                </div>
                <h5>Clients protection</h5>
              </div>
              <hr />
            </div>
            <div className="ab_counter d-flex align-items-center">
              <figure>
                <img src={centerimg} alt="img" />
              </figure>
              <div>
                <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 className="count">100</h2>
                  <h2>+</h2>
                </div>
                <h5>Experts team</h5>
              </div>
              <hr />
            </div>
            <div className="ab_counter d-flex align-items-center">
              <figure>
                <img src={centerimg} alt="img" />
              </figure>
              <div>
                <div className="d-flex justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 className="count">50</h2>
                  <h2>+</h2>
                </div>
                <h5>Services provided</h5>
              </div>
            </div>
          </div>
      </section>



      {/* =============================   conter sections end ============================ */}


            {/*=========================== Trusted Website Start ============================= */}

      <section className="choose ab-choose" >
        <div className="container">
          <div className="row d-flex  align-items-center">
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center text-md-start text-sm-center text-center gap-3 ">
              <h5 className="choose_us">Why choose us</h5>
              <h2 className="choose_up">Trusted protection for your website begins here</h2>
              <p className="pe-lg-5 pe-md-4 pe-sm-0 pe-0 choose_up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboren amet elit.
              </p>
              <a href="#" className="btn_hover mt-4">Learn more</a>
              <figure><img src={require('./img/choose_main.png')} className="mx-auto d-block w-100 mt-md-0 mt-sm-3 mt-3" alt="image" /></figure>
              <figure><img src={crical} alt="img" className="chose-cercle1" /></figure>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-center">
              <figure><img src={crical} alt="img" className="chose-cercle2" /></figure>
              <div className="choose2 d-flex flex-column gap-md-5 gap-sm-5 gap-4 mt-md-0 mt-sm-4 mt-4">
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure><img src={require('./img/choose1.png')} alt="image" /></figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Network traffic analytics</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure><img src={require('./img/choose1.png')} alt="image" /></figure>
                  <div className="d-flex flex-column gap-3" >
                    <h3>Enterprise-proven threat detection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure><img src={require('./img/choose1.png')} alt="image" /></figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Cyber crime and fraud detection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=========================== Trusted Website End ============================= */}



      {/* =========================== silders start ================================ */}

      <section className="serv-testimonial">
  <div className="container">
    <div className="testimonial text-center">
      <h5>Testimonials</h5>
      <h2>You choose, we protect</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
    <div className="slider slick-initialized slick-slider slick-dotted">
      <div className="slick-list draggable">
        <div
          className="slick-track"
          style={{
            opacity: 1,
            width: 9072,
            transform: "translate3d(-1296px, 0px, 0px)"
          }}
        >
          <div
            className="slick-slide slick-cloned"
            data-slick-index={-1}
            aria-hidden="true"
            tabIndex={-1}
            style={{ width: 1296 }}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial1.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial3.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slick-slide slick-current slick-active"
            data-slick-index={0}
            aria-hidden="false"
            role="tabpanel"
            id="slick-slide00"
            aria-describedby="slick-slide-control00"
            style={{ width: 1296 }}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial1.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial2.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slick-slide"
            data-slick-index={1}
            aria-hidden="true"
            role="tabpanel"
            id="slick-slide01"
            aria-describedby="slick-slide-control01"
            style={{ width: 1296 }}
            tabIndex={-1}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial3.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial2.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slick-slide"
            data-slick-index={2}
            aria-hidden="true"
            role="tabpanel"
            id="slick-slide02"
            aria-describedby="slick-slide-control02"
            style={{ width: 1296 }}
            tabIndex={-1}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial1.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial3.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slick-slide slick-cloned"
            data-slick-index={3}
            aria-hidden="true"
            tabIndex={-1}
            style={{ width: 1296 }}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial1.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial2.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slick-slide slick-cloned"
            data-slick-index={4}
            aria-hidden="true"
            tabIndex={-1}
            style={{ width: 1296 }}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial3.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial2.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="slick-slide slick-cloned"
            data-slick-index={5}
            aria-hidden="true"
            tabIndex={-1}
            style={{ width: 1296 }}
          >
            <div>
              <div
                className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column"
                style={{ width: "100%", display: "inline-block" }}
              >
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial1.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Jacob scott</h4>
                  </div>
                </div>
                <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                  <figure>
                    <img
                      src="assets/Images/slider/testimonial3.png"
                      alt="testimonial"
                    />
                  </figure>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <hr />
                    <h4>Phillip boyd</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ul className="slick-dots" style={{ display: "block" }} role="tablist">
        <li className="slick-active" role="presentation">
          <button
            type="button"
            role="tab"
            id="slick-slide-control00"
            aria-controls="slick-slide00"
            aria-label="1 of 3"
            tabIndex={0}
            aria-selected="true"
          >
            1
          </button>
        </li>
        <li role="presentation" className="">
          <button
            type="button"
            role="tab"
            id="slick-slide-control01"
            aria-controls="slick-slide01"
            aria-label="2 of 3"
            tabIndex={-1}
          >
            2
          </button>
        </li>
        <li role="presentation" className="">
          <button
            type="button"
            role="tab"
            id="slick-slide-control02"
            aria-controls="slick-slide02"
            aria-label="3 of 3"
            tabIndex={-1}
          >
            3
          </button>
        </li>
      </ul>
    </div>
  </div>
</section>


      {/* =========================== silders end ================================ */}

      <Footer />

    </>
  );
};
export default About;
