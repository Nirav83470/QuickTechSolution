import Menu from "./Menu";
import crical from "./img/header_cercle.png";
import icons8 from "./img/icons8-software.png";
import imgpngone from "./img/imgdata1.png";
import bannercards1 from "./img/bannercard1.png";
import { AiOutlineRight } from "react-icons/ai";
import { BsFillPlayFill } from "react-icons/bs";
import { FaUserAlt, FaComment } from "react-icons/fa";
// import { AiOutlinePlayCircle } from "react-icons/ai";
import cilents from "./img/client1.svg";
import "./Menu.css";
import { Button } from "react-bootstrap";
import Footer from "./Footer";
const Home = () => {
  return (
    <>
      <div className="heders_back">
        <Menu />

        {/* ========================= Banner-1 Con Start =========================== */}
        <section className="banner">
          <div className="container">
            <figure>
              <img src={crical} className="heders_crical_1"></img>
            </figure>
            <figure>
              <img src={crical} className="heders_crical_2"></img>
            </figure>
            <div className="row d-flex align-items-center gap-md-0 gap-sm-4 gap-4">
              <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center justify-content-center gap-md-4 gap-sm-3 gap-3">
                <h1>
                Software Outsourcing Company in India
                </h1>
                <p>
                QuickTech Solution is the leading software outsourcing company which gives best services and solutions which placed in India. We love to solve your business problems using technology. At QuickTech Solution, we have made it our mission to be known as the one-stop solution for your software development needs, irrespective of your business and size type. We are a full-stack custom software development company from India with 5+ years of experience and a team of 20+ developers delivering world-class software.
                </p>
                <Button>Learn more</Button>
              </div>
              <div className="col-lg-6 col-md-6 d-flex justify-content-end">
                <figure className="img_banner">
                  <img src={imgpngone}></img>
                </figure>
              </div>
            </div>
          </div>
        </section>
        {/* ========================= Banner-1 Con End =========================== */}

        {/* ========================= Banner_box Con Start =========================== */}

        <section className="banner_card">
          <div className="container d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 justify-content-between flex-md-row flex-sm-column flex-column align-items-center">
            <div>
              <figure>
                <img src={require('./img/icons8-software.png')}></img>
              </figure>
              <h4>Cyber security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="/" className="btn_hover2">
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>

            <div>
              <figure>
                <img src={bannercards1}></img>
              </figure>
              <h4>Cyber security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="/" className="btn_hover2">
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>

            <div>
              <figure>
                <img src={bannercards1}></img>
              </figure>
              <h4>Cyber security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="/" className="btn_hover2">
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
          </div>
        </section>

        {/* ========================= Banner-box Con End =========================== */}
      </div>

      {/* =========================  conten exp start  =========================== */}

      <section className="about">
        <div className="container">
          <div className="row">
            <div className="col">
              <h5>About us</h5>
              <h2>Securing your website is easy with cyber safe.</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                do eiusmod tempor incididunt ut laboren do tempor amet elit.
              </p>
              <div className="row mt-4">
                <div className="col-lg-3 col-md-3 d-flex justify-content-md-start justify-content-md-start justify-content-sm-center justify-content-center">
                  <h2 className="count">16</h2>
                  <h2>+</h2>
                </div>
                <div className="col-lg-9 col-md-9">
                  <h3>Year of experience</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor off laboren amet elit.
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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor off laboren amet elit.
                  </p>
                </div>
              </div>
              <div className="mt-md-5 mt-sm-4 mt-4 d-flex justify-content-md-start justify-content-sm-center justify-content-center gap-3">

                <a href="About.html" className="btn_hover">Learn more</a>
                <a href="Contact.html" className="btn_hover2">Get started</a>
              </div>
            </div>
            <div class="col-lg-6 col-md-6 d-flex justify-content-center align-items-center mt-md-0 mt-sm-5 mt-5">
              <figure><img src={require('./img/aboutimg.png')} alt="img" class="ab-image" /></figure>
            </div>
          </div>
        </div>
      </section>

      {/* =========================  conten exp  end   =========================== */}
      {/* =========================  conten Our clients start =========================== */}
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
      {/* =========================  conten Our clients end =========================== */}

      {/*=========================== Trusted Website Start ============================= */}

      <section className="choose">
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

      {/*=========================== Service Start ============================= */}

      <section className="services">
        <div className="container text-center">
          <h5>Our services</h5>
          <h2>Protect your space with the power of cybersafe</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod.</p>
          <div className="d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-md-5 mt-sm-5 mt-4">
            <div className="service_card d-flex flex-column align-items-center text-center">
              <figure><img src={require('./img/service1.png')} alt="service" /></figure>
              <h4>Cyber security</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
              <a href="#" className="btn_hover2"> <i className="">
                <AiOutlineRight />
              </i></a>
            </div>
            <div className="service_card d-flex flex-column align-items-center text-center">
              <figure><img src={require('./img/service1.png')} alt="service" /></figure>
              <h4>Data protection</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
              <a href="#" className="btn_hover2"> <i className="">
                <AiOutlineRight />
              </i></a>
            </div>
            <div className="service_card d-flex flex-column align-items-center text-center">
              <figure><img src={require('./img/service1.png')} alt="service" /></figure>
              <h4>Data privacy</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
              <a href="#" className="btn_hover2"> <i className="">
                <AiOutlineRight />
              </i></a>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-md-5 mt-sm-5 mt-4">
            <div class="service_card d-flex flex-column align-items-center text-center">
              <figure><img src={require('./img/service1.png')} alt="service" /></figure>
              <h4>Server Security</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
              <a href="#" class="btn_hover2"> <i className="">
                <AiOutlineRight />
              </i></a>
            </div>
            <div class="service_card d-flex flex-column align-items-center text-center">
              <figure><img src={require('./img/service1.png')} alt="service" /></figure>
              <h4>Data Encryption</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
              <a href="#" class="btn_hover2"> <i className="">
                <AiOutlineRight />
              </i></a>
            </div>
            <div class="service_card d-flex flex-column align-items-center text-center">
              <figure><img src={require('./img/service1.png')} alt="service" /></figure>
              <h4>Cloud Security</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
              <a href="#" class="btn_hover2"> <i className="">
                <AiOutlineRight />
              </i></a>
            </div>
          </div>
          <figure><img src={require('./img/about_cercle1.png')} alt="img" className="service-cercle1" /></figure>
          <figure><img src={require('./img/about_cercle1.png')} alt="img" className="service-cercle2" /></figure>
          <figure><img src={require('./img/about_cercle1.png')} alt="img" className="service-cercle3" /></figure>

          <a href="Service.html" class="view_service btn_hover mt-lg-3 mt-md-3 mt-sm-3 mt-0">View all services</a>
        </div>
      </section>


      {/*=========================== Service End ============================= */}


      {/*=========================== How We Work Start ============================= */}

      <section className="work">
            <div className="container">
                <div className="row position-relative">
                    <figure><img src={crical} alt="img" className="work-cercle1" /></figure>
                    <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                        <figure className="position-relative">
                            <img src={require('./img/how_we_work.jpg')} alt="img" className="how-we-work" />
                            <a href="#"><i><BsFillPlayFill /></i></a>
                        </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 text-md-start text-sm-center text-center mt-md-0 mt-sm-5 mt-5 pt-md-0 pt-sm-3 pt-3">
                        <h5>How we work</h5>
                        <h2>Your cyber security on a chip</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboren do tempor amet elit.</p>
                        <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                            <div>
                                <h2>01</h2>
                            </div>
                            <div>
                                <h3>Company analysis</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                            <div>
                                <h2>02</h2>
                            </div>
                            <div>
                                <h3>Specifications listed</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                        <div className="d-flex align-items-center flex-md-row flex-sm-column flex-column gap-md-4 gap-sm-3 gap-1 mt-4">
                            <div>
                                <h2>03</h2>
                            </div>
                            <div>
                                <h3>Set up security</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                            </div>
                        </div>
                    </div>
                    <figure><img src={crical} alt="img" className="work-cercle2" /></figure>
                </div>
            </div>
        </section>
      {/*=========================== How We Work End ============================= */}

      {/* ========================== Fixed Background Start ============================ */}

      <section className="experience">
            <div className="container text-center d-flex flex-column gap-3">
                <h2>Want to experience our features? get a free 7-days trial.</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut.</p>
                <div className="d-flex gap-md-3 gap-sm-3 gap-2 flex-md-row flex-sm-row flex-column justify-content-center align-items-center mt-3">
                  
                    <a href="#" className="btn_hover">Learn more</a>
                    <a href="#" className="get">Start free trial</a>
                </div>
            </div>
        </section>

      {/* ========================== Fixed Background End ============================ */}


      {/* ========================== Your Choose Project Start ================================= */}

      {/* <section>
            <div className="container">
                <div className="testimonial text-center">
                    <h5>Testimonials</h5>
                    <h2>You choose, we protect</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="slider slick-initialized slick-slider slick-dotted"><div class="slick-list draggable"><div className="slick-track" style={{ opacity: "1"},{width :"9072px"}}><div className="slick-slide slick-cloned" data-slick-index="-1" aria-hidden="true" tabindex="-1" style="width: 1296px;"><div><div className="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column" style="width: 100%; display: inline-block;">
                        <div className="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src="assets/Images/slider/testimonial1.png" alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Jacob scott</h4>
                            </div>
                        </div>
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Phillip boyd</h4>
                            </div>
                        </div>
                    </div></div></div><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" role="tabpanel" id="slick-slide00" aria-describedby="slick-slide-control00" tabindex="-1" style="width: 1296px;"><div><div class="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column" style="width: 100%; display: inline-block;">
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Jacob scott</h4>
                            </div>
                        </div>
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Phillip boyd</h4>
                            </div>
                        </div>
                    </div></div></div><div class="slick-slide" data-slick-index="1" aria-hidden="true" role="tabpanel" id="slick-slide01" aria-describedby="slick-slide-control01" style="width: 1296px;" tabindex="-1"><div><div class="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column" style="width: 100%; display: inline-block;">
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Jacob scott</h4>
                            </div>
                        </div>
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Phillip boyd</h4>
                            </div>
                        </div>
                    </div></div></div><div class="slick-slide" data-slick-index="2" aria-hidden="true" role="tabpanel" id="slick-slide02" aria-describedby="slick-slide-control02" style="width: 1296px;"><div><div class="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column" style="width: 100%; display: inline-block;">
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Jacob scott</h4>
                            </div>
                        </div>
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Phillip boyd</h4>
                            </div>
                        </div>
                    </div></div></div><div class="slick-slide slick-cloned" data-slick-index="3" aria-hidden="true" tabindex="-1" style="width: 1296px;"><div><div class="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column" style="width: 100%; display: inline-block;">
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Jacob scott</h4>
                            </div>
                        </div>
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Phillip boyd</h4>
                            </div>
                        </div>
                    </div></div></div>
               
                    <div class="slick-slide slick-cloned" data-slick-index="5" aria-hidden="true" tabindex="-1" style="width: 1296px;"><div><div class="d-flex justify-content-between align-items-center gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-5 flex-md-row flex-sm-column flex-column" style="width: 100%; display: inline-block;">
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src={require('./img/testimonial1.png')} alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Jacob scott</h4>
                            </div>
                        </div>
                        <div class="testimonial_card d-flex gap-lg-5 gap-md-3 gap-sm-5 gap-2 align-items-center flex-md-row flex-sm-row flex-column text-md-start text-sm-start text-center">
                            <figure><img src="assets/Images/slider/testimonial3.png" alt="testimonial" /></figure>
                            <div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <hr></hr>
                                <h4>Phillip boyd</h4>
                            </div>
                        </div>
                    </div></div></div></div></div><ul class="slick-dots" style="display: block;" role="tablist"><li class="slick-active" role="presentation"><button type="button" role="tab" id="slick-slide-control00" aria-controls="slick-slide00" aria-label="1 of 3" tabindex="-1">1</button></li><li role="presentation" class=""><button type="button" role="tab" id="slick-slide-control01" aria-controls="slick-slide01" aria-label="2 of 3" tabindex="-1">2</button></li><li role="presentation" class=""><button type="button" role="tab" id="slick-slide-control02" aria-controls="slick-slide02" aria-label="3 of 3" tabindex="0" aria-selected="true">3</button></li></ul></div>
            </div>
        </section> */}


      {/* ========================== Your Choose Project End ================================= */}

      {/* ========================== Blog Sections  Start ================================= */}



      <section className="blog">
            <div className="container d-flex flex-column align-items-center gap-md-5 gap-sm-4 gap-4">
                <div className="text-center">
                    <h5>Blogs</h5>
                    <h2>A better way to do digital.</h2>
                </div>
                <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 flex-md-row flex-sm-column flex-column">
                    <div class="card">
                        <figure><img src={require('./img/blog1.jpg')} alt="image" /></figure>
                        <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-4 mb-4">
                            <span className="d-flex gap-3">
                         <i ><FaUserAlt /></i>
                         <a href="#" className="p-2">Admin</a>
                         </span>
                            <span className="d-flex gap-3">
                         <i><FaComment /></i>
                         <a href="#" className="p-2">0</a>
                         </span>
                        </div>
                        <h4>Encode mobile spplication dource code with code</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et aliqua.</p>
                        <a href="#" className="p-2">Learn more</a>
                    </div>

                    <div class="card">
                        <figure><img src={require('./img/blog1.jpg')} alt="image" /></figure>
                        <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-4 mb-4">
                            <span className="d-flex gap-3">
                         <i><FaUserAlt /></i>
                         <a href="#" className="p-2">Admin</a>
                         </span>
                            <span className="d-flex gap-3">
                         <i><FaComment /></i>
                         <a href="#" className="p-2">0</a>
                         </span>
                        </div>
                        <h4>Encode mobile spplication dource code with code</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et aliqua.</p>
                        <a href="#" className="p-0">Learn more</a>
                    </div>
                   
                    <div class="card">
                        <figure><img src={require('./img/blog1.jpg')} alt="image" /></figure>
                        <div className="d-flex gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-4 mb-4">
                            <span className="d-flex gap-3">
                         <i><FaUserAlt /></i>
                         <a href="#" className="p-2">Admin</a>
                         </span>
                            <span className="d-flex gap-3">
                         <i><FaComment /></i>
                         <a href="#" className="p-2">0</a>
                         </span>
                        </div>
                        <h4>Encode mobile spplication dource code with code</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod et aliqua.</p>
                        <a href="#" className="p-0">Learn more</a>
                    </div>
                </div>
                <a href="Blog.html" class="btn_hover mt-1">View all news</a>
            </div>
        </section>
      {/* ========================== Blog Sections  End ================================= */}


      <Footer />

          <h1></h1>
    </>
  );
};
export default Home;
