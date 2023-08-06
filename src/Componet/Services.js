import Menu from "./Menu";
import { AiOutlineRight } from "react-icons/ai";
import crical from "./img/header_cercle.png";

import "./Services.css";
import Footer from "./Footer";

const Services = () => {
  return (
    <>
      {/* ================================  services start 1_1 ============================ */}
      <div className="services123">
        <Menu />
        {/* <div className="bannerservices">
        </div> */}
      </div>

      {/* ================================  services end  1_2  ============================ */}

      {/*=========================== Service Start ============================= */}

      <section className="services">
        <div className="container text-center">
          <h5>Our services</h5>
          <h2>Protect your space with the power of cybersafe</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, do eiusmod.
          </p>
          <div className="d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-md-5 mt-sm-5 mt-4">
            <div className="service_card d-flex flex-column align-items-center text-center">
              <figure>
                <img src={require("./img/service1.png")} alt="service" />
              </figure>
              <h4>Cyber security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="#" className="btn_hover2">
                {" "}
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
            <div className="service_card d-flex flex-column align-items-center text-center">
              <figure>
                <img src={require("./img/service1.png")} alt="service" />
              </figure>
              <h4>Data protection</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="#" className="btn_hover2">
                {" "}
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
            <div className="service_card d-flex flex-column align-items-center text-center">
              <figure>
                <img src={require("./img/service1.png")} alt="service" />
              </figure>
              <h4>Data privacy</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="#" className="btn_hover2">
                {" "}
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-center flex-md-row flex-sm-column flex-column gap-lg-5 gap-md-4 gap-sm-5 gap-4 mt-md-5 mt-sm-5 mt-4">
            <div class="service_card d-flex flex-column align-items-center text-center">
              <figure>
                <img src={require("./img/service1.png")} alt="service" />
              </figure>
              <h4>Server Security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="#" class="btn_hover2">
                {" "}
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
            <div class="service_card d-flex flex-column align-items-center text-center">
              <figure>
                <img src={require("./img/service1.png")} alt="service" />
              </figure>
              <h4>Data Encryption</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="#" class="btn_hover2">
                {" "}
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
            <div class="service_card d-flex flex-column align-items-center text-center">
              <figure>
                <img src={require("./img/service1.png")} alt="service" />
              </figure>
              <h4>Cloud Security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                eiusmod amet elit.
              </p>
              <a href="#" class="btn_hover2">
                {" "}
                <i className="">
                  <AiOutlineRight />
                </i>
              </a>
            </div>
          </div>
          <figure>
            <img
              src={require("./img/about_cercle1.png")}
              alt="img"
              className="service-cercle1"
            />
          </figure>
          <figure>
            <img
              src={require("./img/about_cercle1.png")}
              alt="img"
              className="service-cercle2"
            />
          </figure>
          <figure>
            <img
              src={require("./img/about_cercle1.png")}
              alt="img"
              className="service-cercle3"
            />
          </figure>

          {/* <a href="Service.html" class="view_service btn_hover mt-lg-3 mt-md-3 mt-sm-3 mt-0">View all services</a> */}
        </div>
      </section>

      {/*=========================== Service End ============================= */}

      {/*=========================== Trusted Website Start ============================= */}

      <section className="choose">
        <div className="container">
          <div className="row d-flex  align-items-center">
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center text-md-start text-sm-center text-center gap-3 ">
              <h5 className="choose_us">Why choose us</h5>
              <h2 className="choose_up">
                Trusted protection for your website begins here
              </h2>
              <p className="pe-lg-5 pe-md-4 pe-sm-0 pe-0 choose_up">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut laboren amet elit.
              </p>
              <a href="#" className="btn_hover mt-4">
                Learn more
              </a>
              <figure>
                <img
                  src={require("./img/choose_main.png")}
                  className="mx-auto d-block w-100 mt-md-0 mt-sm-3 mt-3"
                  alt="image"
                />
              </figure>
              <figure>
                <img src={crical} alt="img" className="chose-cercle1" />
              </figure>
            </div>

            <div className="col-lg-6 col-md-6 d-flex align-items-center">
              <figure>
                <img src={crical} alt="img" className="chose-cercle2" />
              </figure>
              <div className="choose2 d-flex flex-column gap-md-5 gap-sm-5 gap-4 mt-md-0 mt-sm-4 mt-4">
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure>
                    <img src={require("./img/choose1.png")} alt="image" />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Network traffic analytics</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure>
                    <img src={require("./img/choose1.png")} alt="image" />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Enterprise-proven threat detection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
                <div className="d-flex gap-4 flex-md-row flex-sm-column flex-column text-md-start text-sm-center text-center">
                  <figure>
                    <img src={require("./img/choose1.png")} alt="image" />
                  </figure>
                  <div className="d-flex flex-column gap-3">
                    <h3>Cyber crime and fraud detection</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut laboren amet elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*=========================== Trusted Website End ============================= */}

      {/* ==========================  confused about start =========================== */}

      {/* <section className="faq mt-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 col-md-6 d-flex pe-md-5 pe-sm-0 pe-0 flex-column justify-content-center gap-3 text-md-start text-sm-center text-center position-relative">
        <figure>
          <img src="assets/Images/bg/about_cercle1.png" alt="img" />
        </figure>
        <h5>FAQ</h5>
        <h2>Still confused about our features?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-4 mt-4">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What are the objective of this service?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <p className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec
                aliquet ante.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                What is cyber security?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <p className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec
                aliquet ante.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How to try this cyber service?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <p className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec
                aliquet ante.
              </p>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How to pay for this?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionExample"
            >
              <p className="accordion-body">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                hendrerit aliquet fermentum. Nulla non metus sapien. Quisque nec
                aliquet ante.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}


<h5>Helloo</h5>


      {/* ===========================  confused about end ======================== */}


      <Footer />
    </>
  );
};
export default Services;
