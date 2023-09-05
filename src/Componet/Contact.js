import Menu from "./Menu";
import crical from "./img/header_cercle.png";
import Footer from "./Footer";
import "./Contact.css";


const Contact = () => {
    return (
        <>


            <div className="header_contact">
                <Menu />
            </div>

            {/* ======================= conten start =================== */}

            <section className="contact_page">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6 position-relative pe-lg-5 pe-md-4 pe-sm-2 pe-2">
                            <figure>
                                <img
                                    src={crical}
                                    alt="img"
                                    className="contact-cercle1"
                                />
                            </figure>
                            <div className="mapouter">
                                <iframe
                                    className="gmap_iframe"
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2706.7510119348476!2d72.87591026645325!3d21.233810279943228!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f75e005ee1f%3A0xe18ab41f7f3c5f5d!2sSumeru%20City%20Mall!5e0!3m2!1sen!2sin!4v1693913549994!5m2!1sen!2sin"
                                />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 mt-md-0 mt-sm-5 mt-4 text-md-start text-sm-center text-center position-relative">
                            <h2>Get in touch with us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut laboren amet elit.
                            </p>
                            {/* contact form */}
                            <form id="contact-form">
                                <div id="contact-message"> </div>
                                <div className="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
                                    <input type="text" placeholder="Your name" />
                                    <input type="email" placeholder="Email address" required="" />
                                </div>
                                <div className="d-flex gap-lg-4 gap-md-3 gap-sm-4 gap-3">
                                    <input type="text" placeholder="Phone number" />
                                    <input type="text" placeholder="Subject" />
                                </div>
                                <div>
                                    <textarea
                                        cols={30}
                                        rows={8}
                                        placeholder="Write here message"
                                        defaultValue={""}
                                    />
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                            <figure>
                                <img
                                    src={crical}
                                    alt="img"
                                    className="contact-cercle2"
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </section>



            {/* ======================= conten start =================== */}


                <Footer />

        </>
    )
}
export default Contact;