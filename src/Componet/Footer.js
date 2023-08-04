import crical from "./img/header_cercle.png";
import { FaPaperPlane } from "react-icons/fa";
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
                        <button type="submit"><i><FaPaperPlane /></i></button>

                    {/* Baki */}

                    </form>
                </div>
                <div class="row text-md-start text-sm-center text-center">
                    <div class="col-lg-5 col-md-5">
                        <a href="index.html" class="p-0">
                            <figure><img src="assets/Images/logo.png" alt="logo" /></figure>
                        </a>
                        <p class="pb-3 pe-md-5 pe-sm-0 pe-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            
                        <span class="d-flex gap-3 flex-wrap justify-content-md-start justify-content-sm-center justify-content-center">
                            <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="#"><i class="fa-brands fa-instagram"></i></a>
                            <a href="#"><i class="fa-brands fa-twitter"></i></a>
                            <a href="#"><i class="fa-brands fa-linkedin-in"></i></a>
                            <a href="#"><i class="fa-brands fa-pinterest-p"></i></a>
                       </span>
                    </div>
                    <div class="col-lg-3 col-md-3 position-relative mt-md-0 mt-sm-4 mt-4">
                        <h4>Useful links</h4>
                        <div class="d-flex gap-md-5 gap-sm-5 gap-5 mt-4 justify-content-md-start justify-content-sm-center justify-content-center">
                            <div class="d-flex flex-column gap-4">
                                <a href="index.html" class="p-0">Home</a>
                                <a href="About.html" class="p-0">About</a>
                                <a href="Service.html" class="p-0">Services</a>
                            </div>
                            <div class="d-flex flex-column gap-4">
                                <a href="Contact.html" class="p-0">Contact</a>
                                <a href="Pricing.html" class="p-0">Pricing</a>
                                <a href="Blog.html" class="p-0">Blog</a>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                    <div class="col-lg-4 col-md-4 ps-4 mt-md-0 mt-sm-4 mt-4 d-flex flex-column align-items-md-start align-items-sm-center align-items-start">
                        <h4>Our Office</h4>
                        <div class="d-flex align-items-center gap-4 mt-4">
                            <i class="fa-sharp fa-solid fa-house"></i>
                            <p class="p-0">Plaza x , xy floor, street, xyz</p>
                        </div>
                        <div class="d-flex align-items-center gap-4 mt-4">
                            <i class="fa-sharp fa-solid fa-phone"></i>
                            <p class="p-0">+123-456-7890</p>
                        </div>
                        <div class="d-flex align-items-center gap-4 mt-4">
                            <i class="fa-solid fa-envelope"></i>
                            <p class="p-0">yourname@email.com</p>
                        </div>
                    </div>
                </div>
                <hr class="mt-5"></hr>
                <div class="d-flex justify-content-md-between justify-content-sm-center justify-content-center flex-wrap  text-center mb-3 gap-3">
                    <h6>Copyright © 2023 cyber safe evonicmedia. all rights reserved.</h6>
                    <h6>Terms and conditions | privacy policy</h6>
                </div>
                <figure><img src="assets/Images/bg/about_cercle1.png" alt="img" class="footer-cercle1" /></figure>
            </div>
        </footer>

        </>
    )
}
export default Footer;