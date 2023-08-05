import Menu from "./Menu";
import './About.css';

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


      {/* ============================ About Us End ===================== */}
    </>
  );
};
export default About;
