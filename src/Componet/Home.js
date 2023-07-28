import Menu from "./Menu";
import crical from "./img/header_cercle.png";
import imgpngone from "./img/imgdata1.png";
import bannercards1 from "./img/bannercard1.png";
import { AiOutlineRight } from "react-icons/ai";
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
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
                                <a href="/" className="btn_hover2">
                                    <i className=""><AiOutlineRight /></i>
                                </a>
                            </div>


                            <div>
                                <figure>
                                    <img src={bannercards1}></img>
                                </figure>
                                <h4>Cyber security</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
                                <a href="/" className="btn_hover2">
                                    <i className=""><AiOutlineRight /></i>
                                </a>
                            </div>

                            <div>
                                <figure>
                                    <img src={bannercards1}></img>
                                </figure>
                                <h4>Cyber security</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed eiusmod amet elit.</p>
                                <a href="/" className="btn_hover2">
                                    <i className=""><AiOutlineRight /></i>
                                </a>
                            </div>
                    </div>
            </section>

        {/* ========================= Banner-box Con End =========================== */}

      </div>
    </>
  );
};
export default Home;
