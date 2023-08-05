import { Button, Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
// import quicklogoes from "./img/logoquick.png";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Menu.css";
import { Link } from "react-router-dom";
const Menu = () => {
  return (
    <>
          <div className="container navbar_main">
           <div className="menu_main">
           <Navbar>
              <Container>
                <Navbar.Brand href="#">QuickTech Solution</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse >
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: "100px" }}
                    
                  >
                    <Nav.Link>
                      <Link to="/" className=" active">
                        Home
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/about">About Us</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/services">Services</Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link to="/contact">Contact</Link>
                    </Nav.Link>

                    <NavDropdown title="More">
                      <NavDropdown.Item href="#action3">
                        <Link to="/more"></Link>
                      </NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <div>
                    <Button>Get Start</Button>
                  </div>
                </Navbar.Collapse>
              </Container>
            </Navbar>
           </div>

            {/* ============================== off  ===================================== */}

          <div className="offcanvas_menu">
              {[false].map((expand) => (
              <Navbar
                key={expand}
                expand={expand}
                className=" mb-3"
              >
                <Container fluid >
                  <Navbar.Brand href="#">QuickTech Solution</Navbar.Brand>
                  <Navbar.Toggle
                    aria-controls={`offcanvasNavbar-expand-${expand}`}
                  />
                  <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-${expand}`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                    placement="end"
                  >
                    <Offcanvas.Header closeButton>
                      <Offcanvas.Title
                        id={`offcanvasNavbarLabel-expand-${expand}`}
                      >
                        QuickTech Solution
                      </Offcanvas.Title>
                      
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                      <Nav className="justify-content-end flex-grow-1 pe-3">
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">About Us</Nav.Link>
                        <Nav.Link href="#action2">Services</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>

                        <NavDropdown
                          title="More"
                          id={`offcanvasNavbarDropdown-expand-${expand}`}
                        >
                          <NavDropdown.Item href="#action3">
                          Testimonial
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action3">
                          Pricing Plan
                          </NavDropdown.Item> <NavDropdown.Item href="#action3">
                          Blog
                          </NavDropdown.Item> <NavDropdown.Item href="#action3">
                          Coming Soon
                          </NavDropdown.Item>
                          <NavDropdown.Item href="#action3">
                              404
                          </NavDropdown.Item>
                         
                        </NavDropdown>
                      </Nav>
                    </Offcanvas.Body>
                  </Navbar.Offcanvas>
                </Container>
              </Navbar>
            ))}
              </div>
          </div>
    </>
  );
};
export default Menu;
