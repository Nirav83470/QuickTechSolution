import crical from "./img/header_cercle.png";
import { FaPaperPlane,FaFacebook, FaInstagram,FaTwitter,FaPinterestP,FaLinkedinIn ,FaHome,FaPhoneAlt ,FaGoogle } from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
    return(
        <>
        <footer>
            <figure><img src={crical} alt="img" class="footer-cercle2" /></figure>
            <div class="container position-relative">
                <div class="text-center d-flex flex-column gap-2">
                    <h5>Get in touch</h5>
                    <h2>Subscribe our newsletter</h2>
                    <p className="footer-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <form className="d-flex justify-content-center gap-4 mt-4" id="footer-form">
                        <div id="footer-message"> </div>
                        <input type="email" placeholder="Enter your email" required="" />
                        <button type="submit"><i className="plean"><FaPaperPlane /></i></button>

                    {/* Baki */}

                    </form>
                </div>
                <div className="row text-md-start text-sm-center text-center">
                    <div className="col-lg-5 col-md-5">
                        <a href="index.html" class="p-0">
                            <figure><img src="assets/Images/logo.png" alt="logo" /></figure>
                        </a>
                        <p className="pb-3 pe-md-5 pe-sm-0 pe-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            
                        <span className="d-flex gap-3 flex-wrap justify-content-md-start justify-content-sm-center justify-content-center">
                            <a href="#"><i> <FaFacebook /> </i></a>
                            <a href="https://www.instagram.com/quicktech_solution/?igshid=MzRlODBiNWFlZA%3D%3D"><i><FaInstagram /></i></a>
                            <a href="#"><i><FaTwitter /></i></a>
                            <a href="#"><i><FaLinkedinIn /></i></a>
                            <a href="#"><i><FaPinterestP /></i></a>
                       </span>
                    </div>
                    <div className="col-lg-3 col-md-3 position-relative mt-md-0 mt-sm-4 mt-4">
                        <h4>Useful links</h4>
                        <div className="d-flex gap-md-5 gap-sm-5 gap-5 mt-4 justify-content-md-start justify-content-sm-center justify-content-center">
                            <div className="d-flex flex-column gap-4">
                                <a href="index.html" className="p-0">Home</a>
                                <a href="About.html" className="p-0">About</a>
                                <a href="Service.html" className="p-0">Services</a>
                            </div>
                            <div className="d-flex flex-column gap-4">
                                <a href="Contact.html" className="p-0">Contact</a>
                                <a href="Pricing.html" className="p-0">Pricing</a>
                                <a href="Blog.html" className="p-0">Blog</a>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="col-lg-4 col-md-4 ps-4 mt-md-0 mt-sm-4 mt-4 d-flex flex-column align-items-md-start align-items-sm-center align-items-start">
                        <h4>Our Office</h4>
                        <div className="d-flex  gap-4">
                            <i> <FaHome /> </i>
                            <p>B-54, Sumeru City Mall, Near Sudama Chowk, Mota Varachha , Surat - 394101</p>
                        </div>
                        <div className="d-flex  gap-4">
                            <i><FaPhoneAlt /></i>
                            <p>+91 9408571265</p>
                        </div>
                        <div className="d-flex  gap-4 ">
                            <i><FaGoogle /></i>
                            <p>quicktechsolution@email.com</p>
                        </div>
                    </div>
                </div>
                <hr className="mt-5"></hr>
                <div className="d-flex justify-content-md-between justify-content-sm-center justify-content-center flex-wrap  text-center mb-3 gap-3">
                    <h6>Copyright © 2023 QuickTech Solution. All Rights Reserved.</h6>
                    <h6>Terms and conditions | privacy policy</h6>
                </div>
                <figure><img src={crical} alt="img" class="footer-cercle1" /></figure>
            </div>
        </footer>

        </>
    )
}
export default Footer;