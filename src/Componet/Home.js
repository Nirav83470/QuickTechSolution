import Menu from "./Menu";
import crical from "./img/header_cercle.png";
import imgpngone from "./img/imgdata1.png";
import bannercards1 from "./img/bannercard1.png";
import { AiOutlineRight } from "react-icons/ai";
import cilents from "./img/client1.svg";
import "./Menu.css";
import { Button } from "react-bootstrap";
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
                  Protect your website with the power of QuickTech Solution.
                </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            <div className="col-lg-6 col-md-6 d-flex flex-column align-items-md-start align-items-sm-center align-items-center text-md-start text-sm-center text-center gap-3">
              <h5>Why choose us</h5>
              <h2>Trusted protection for your website begins here</h2>
              <p class="pe-lg-5 pe-md-4 pe-sm-0 pe-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboren amet elit.
              </p>
              <a href="#" class="btn_hover mt-4">Learn more</a>
            </div>
          </div>
        </div>
      </section>

      {/*=========================== Trusted Website End ============================= */}

        <h1>123456789987654321</h1>

    </>
  );
};
export default Home;
